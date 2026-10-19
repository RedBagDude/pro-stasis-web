// Contact Form handling
function handleContactSubmit(event) {
  event.preventDefault();
  const feedback = document.getElementById('form-feedback');
  if (feedback) {
    feedback.classList.remove('hidden');
  }
  event.target.reset();
}

// Exposición explícita como global: el formulario la invoca vía atributo onsubmit
window.handleContactSubmit = handleContactSubmit;
