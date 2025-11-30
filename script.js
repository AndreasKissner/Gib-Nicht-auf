const messages = [
  "Fehler bedeuten: Du lernst gerade!",
  "Große Projekte beginnen mit kleinen Schritten.",
  "Du musst kein Profi sein – du musst anfangen.",
  "Jeder Coder hat mal verzweifelt… und dann weitergemacht!",
  "Deine Ideen sind wertvoll. Gib ihnen eine Chance.",
  "Heute schwer? Morgen stolz.",
  "Code bricht – du nicht!"
];

const btn = document.getElementById("motivateBtn");
const box = document.getElementById("messageBox");

btn.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  box.textContent = msg;
  box.style.opacity = 1;
});
