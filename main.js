// Efecto ripple al hacer clic en cada botón
function ripple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  circle.className = 'ripple-circle';
  const size = Math.max(btn.offsetWidth, btn.offsetHeight);
  circle.style.width  = size + 'px';
  circle.style.height = size + 'px';
  const rect = btn.getBoundingClientRect();
  circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
  circle.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
}
