"use strict";

// Инициализация модальных окон
var myModalHistory = new bootstrap.Modal(document.getElementById('modal-history'));
var myModal = new bootstrap.Modal(document.getElementById('modalRegion'));
var modalResult = new bootstrap.Modal(document.querySelector('.modal-submit')); // Создаем модальное окно результата

// Получение всех форм
var forms = document.querySelectorAll('.needs-validation');

// Обработчики для открытия и закрытия модальных окон
function openModalHistory() {
  if (myModalHistory) {
    myModalHistory.show();
  }
}
function closeModalHistory() {
  if (myModalHistory) {
    myModalHistory.hide();
  }
}
function openModal() {
  if (myModal) {
    myModal.show();
  }
}
function closeModal() {
  if (myModal) {
    myModal.hide();
  }
}

// Навешивание событий на кнопки открытия модального окна
document.querySelector('.js-modal-history').addEventListener('click', function () {
  openModalHistory();
});

// Обработчик для кнопки закрытия модального окна
var btnModalHistoryClose = document.querySelector('.modal-history .btn-close');
if (btnModalHistoryClose) {
  btnModalHistoryClose.addEventListener('click', closeModalHistory);
}
var elements = document.querySelectorAll('[data-target="modalRegion"]');
elements.forEach(function (element) {
  element.addEventListener('click', openModal);
});

// Обработка отправки формы
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    if (!form.checkValidity()) {
      // Если форма не валидна
      form.classList.add('was-validated'); // Добавляем класс was-validated
    } else {
      // Если форма валидна
      form.classList.remove('was-validated'); // Убираем класс was-validated

      // Скрываем текущее модальное окно и показываем результат
      myModal.hide();
      modalResult.show();

      // Отправка формы после закрытия модального окна результатов
      modalResult._element.addEventListener('hidden.bs.modal', function () {
        form.submit();
        form.reset();
      });
    }
  });

  // Обработчик для кнопки закрытия модального окна
  var btnModalClose = form.closest('.modal').querySelector('.btn-close');
  if (btnModalClose) {
    btnModalClose.addEventListener('click', function () {
      form.reset();
      closeModal();
    });
  }
});

// Обработчик для элемента .definition-city
var mainCity = document.querySelector('.definition-city');
if (mainCity) {
  mainCity.addEventListener('click', function () {
    mainCity.classList.add('d-none');
  });
}

// console.log('fff');
// import Swiper from 'swiper';
// import { SwiperOptions } from 'swiper/types';

// const swiperParams = {
//   slidesPerView: 3,
//   spaceBetween: 50,
// };

// const swiper = new Swiper('.swiper-container', swiperParams);

// swiper();