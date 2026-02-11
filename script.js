/* ===============================
   FF PANEL – MOBILE DRAG SCRIPT
   Visual Simulator (UI Only)
   =============================== */

/* ELEMENTOS */
const floatBtn = document.getElementById("floatBtn");
const panel = document.getElementById("panel");
const panelHeader = document.getElementById("panelHeader");
const statusText = document.getElementById("status");

/* ABRIR / FECHAR PAINEL */
floatBtn.addEventListener("click", () => {
  panel.classList.toggle("hidden");
});

/* TOGGLE ANIMADO */
function toggle(el) {
  el.classList.toggle("active");
}

/* INJETAR (SIMULAÇÃO) */
function inject() {
  statusText.innerText = "Injetando (simulação)...";
  setTimeout(() => {
    statusText.innerText = "Painel ativado ✔";
  }, 2500);
}

/* ===============================
   BOTÃO FLUTUANTE ARRASTÁVEL
   =============================== */
let dragBtn = false;

floatBtn.addEventListener("touchstart", () => dragBtn = true);
floatBtn.addEventListener("touchend", () => dragBtn = false);

floatBtn.addEventListener("touchmove", (e) => {
  if (!dragBtn) return;
  const touch = e.touches[0];
  floatBtn.style.left = touch.clientX - 28 + "px";
  floatBtn.style.top = touch.clientY - 28 + "px";
  floatBtn.style.right = "auto";
  floatBtn.style.bottom = "auto";
});

/* ===============================
   PAINEL ARRASTÁVEL (HEADER)
   =============================== */
let dragPanel = false;
let offsetX = 0;
let offsetY = 0;

panelHeader.addEventListener("touchstart", (e) => {
  dragPanel = true;
  const touch = e.touches[0];
  const rect = panel.getBoundingClientRect();
  offsetX = touch.clientX - rect.left;
  offsetY = touch.clientY - rect.top;
});

document.addEventListener("touchmove", (e) => {
  if (!dragPanel) return;
  const touch = e.touches[0];
  panel.style.left = (touch.clientX - offsetX) + "px";
  panel.style.top = (touch.clientY - offsetY) + "px";
  panel.style.right = "auto";
  panel.style.bottom = "auto";
});

document.addEventListener("touchend", () => {
  dragPanel = false;
});
