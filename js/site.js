const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const eventDate = document.querySelector('#event-date');
if (eventDate) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  eventDate.min = tomorrow.toISOString().split('T')[0];
}

const inquiryForm = document.querySelector('#catering-inquiry');
const formResult = document.querySelector('#form-result');

inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.checkValidity()) {
    inquiryForm.reportValidity();
    return;
  }
  formResult?.classList.add('show');
  formResult?.focus();
});

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
