// Interactive Hand Grips Selector Logic
function setGrip(name, description) {
  const gripNameEl = document.getElementById('grip-name');
  const gripDescEl = document.getElementById('grip-desc');
  if (gripNameEl && gripDescEl) {
    gripNameEl.textContent = name;
    gripDescEl.textContent = description;
  }
}

// Exposición explícita como global: los botones la invocan vía atributo onclick
window.setGrip = setGrip;
