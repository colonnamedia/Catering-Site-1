import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index.html', 'menus.html', 'services.html', 'process.html', 'inquiry.html', '404.html'];
const customerPages = pages.filter((page) => page !== '404.html');
const requiredInquiryNames = [
  'name', 'email', 'event_date', 'guest_count', 'venue', 'event_type',
  'service_format', 'budget', 'menu_interest', 'dietary_needs', 'notes'
];

const failures = [];
const pass = (label) => console.log(`PASS  ${label}`);
const check = (condition, label) => condition ? pass(label) : failures.push(label);

for (const page of pages) {
  const html = await readFile(join(root, page), 'utf8');
  check(/<title>[^<]+<\/title>/i.test(html), `${page}: title`);
  check(/name="viewport"/i.test(html), `${page}: viewport`);
  check(/<h1[\s>]/i.test(html), `${page}: primary heading`);

  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]+)"/g)) {
    let target = match[1];
    if (target === '/') target = '/index.html';
    const file = normalize(join(root, target.replace(/^\//, '')));
    check(file.startsWith(root) && existsSync(file), `${page}: resolves ${target}`);
  }
}

for (const page of customerPages) {
  const html = await readFile(join(root, page), 'utf8');
  check(/name="description"/i.test(html), `${page}: SEO description`);
  check(/noindex/i.test(html), `${page}: sample demo noindex`);
  check(/illustrative|sample|demonstration|demo/i.test(html), `${page}: sample disclosure`);
}

const home = await readFile(join(root, 'index.html'), 'utf8');
check(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i.test(home), 'home: JSON-LD present');
const jsonLd = home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
try {
  const schema = JSON.parse(jsonLd);
  check(schema['@type'] === 'Caterer', 'home: Caterer schema parses');
  check(/sample|demo|illustrative/i.test(JSON.stringify(schema)), 'home: schema is safely labeled');
} catch {
  failures.push('home: JSON-LD parses');
}

const inquiry = await readFile(join(root, 'inquiry.html'), 'utf8');
check(/<form[^>]+id="catering-inquiry"[^>]*novalidate[^>]*>/i.test(inquiry), 'inquiry: local demo form');
check(!/<form[^>]+action=/i.test(inquiry), 'inquiry: no form action');
for (const field of requiredInquiryNames) {
  check(new RegExp(`name="${field}"`, 'i').test(inquiry), `inquiry: ${field} field`);
}
check(/does not send or store/i.test(inquiry), 'inquiry: non-transmission disclosure');
check(/does not hold this date|does not.*confirm/i.test(inquiry), 'inquiry: no availability claim');

const js = await readFile(join(root, 'js/site.js'), 'utf8');
check(/preventDefault\(\)/.test(js), 'script: prevents network submission');
check(!/\b(fetch|XMLHttpRequest|localStorage|sessionStorage|FormData)\b/.test(js), 'script: no network or storage API');
check(/checkValidity\(\)/.test(js) && /reportValidity\(\)/.test(js), 'script: local form validation');

for (const asset of ['hero-catering.webp', 'gallery-corporate.webp', 'gallery-grazing.webp']) {
  const info = await stat(join(root, 'assets', asset));
  check(info.size > 20_000 && info.size < 500_000, `asset: ${asset} optimized (${Math.round(info.size / 1024)} KB)`);
}

const handoff = await readFile(join(root, 'FIREWORKS-PROJECT.md'), 'utf8');
for (const amount of ['$1,899', '$299/year', '$499/year', '$899/year', '$20/year']) {
  check(handoff.includes(amount), `handoff: pricing ${amount}`);
}
check(/credentials[\s\S]*end-to-end/i.test(handoff), 'handoff: provider credential and testing gate');

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`\nAll ${pages.length} pages, 3 images, inquiry safeguards, SEO metadata and pricing checks passed.`);
