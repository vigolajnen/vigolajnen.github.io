// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Если ОС настроена в тёмном режиме…
  if (prefersDarkScheme.matches) {
    // …тогда применяем класс .light-theme для переопределения этих стилей
    document.body.classList.toggle("light-theme");
    // В противном случае…
  } else {
    // …применяем класс .dark-theme для переопределения светлого стиля по умолчанию
    document.body.classList.toggle("dark-theme");
  }
});
