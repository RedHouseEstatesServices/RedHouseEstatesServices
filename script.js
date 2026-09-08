// Small UX touches for the template
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // For Netlify forms, let it submit normally; for local demo, prevent and show success.
    if (!location.hostname.includes('netlify') && !location.hostname.includes('localhost')) {
      // allow normal behaviour on deployed hosts
      return;
    }
    e.preventDefault();
    form.reset();
    const success = document.getElementById('form-success');
    if (success) success.classList.remove('hidden');
  });
}
