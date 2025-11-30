const messages = [
  "Fehler bedeuten: Du lernst gerade!",
  "Große Projekte beginnen mit kleinen Schritten.",
  "Du musst kein Profi sein – du musst anfangen.",
  "Jeder Coder hat mal verzweifelt… und dann weitergemacht!",
  "Deine Ideen sind wertvoll. Gib ihnen eine Chance.",
  "Heute schwer? Morgen stolz.",
  "Code bricht – du nicht!",
  "Wenn du durchhältst, wirst du besser als gestern.",
  "Kein Meister fällt vom Himmel – aber jeder Coder wächst mit jedem Bug.",
  "Dein Durchhalten ist stärker als jedes Tutorial.",
  "Kleine Fortschritte sind immer noch Fortschritte.",
  "Mut macht dich schneller als Talent.",
  "Du bist nur einen Versuch vom Erfolg entfernt.",
  "Auch Profis googeln jeden Tag.",
  "Der einzige schlechte Code ist der, den du nie schreibst.",
  "Bleib dran – dein zukünftiges Ich dankt dir.",
  "Deine Ausdauer entscheidet, nicht dein Startpunkt."
];

const btn = document.getElementById("motivateBtn");
const box = document.getElementById("messageBox");

btn.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  box.textContent = msg;
  box.style.opacity = 1;
});
