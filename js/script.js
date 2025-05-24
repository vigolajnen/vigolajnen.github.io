import projects from './projects.js';

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme')
      ? 'Тёмная тема'
      : 'Светлая тема';
  });

  // Элементы DOM
  const projectsContainer = document.getElementById('projectsContainer');
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModal');
  const slidesContainer = document.getElementById('slidesContainer');
  const sliderDots = document.getElementById('sliderDots');

  // Переменные слайдера
  let currentSlide = 0;
  let slideInterval;

  // Создание карточек проектов
  function createProjectCards() {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const tagsHTML = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

      card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-tags">${tagsHTML}</div>
          `;

      card.addEventListener('click', () => openModal(project));
      projectsContainer.appendChild(card);
    });
  }

  // Обновление слайдера
  function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    // Скрываем все слайды
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Показываем текущий слайд
    if (slides[currentSlide]) {
      slides[currentSlide].classList.add('active');
    }

    // Обновляем точки навигации
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Переход к конкретному слайду
  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
  }

  // Следующий слайд
  function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  // Запуск автопрокрутки
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  // Сброс автопрокрутки
  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Открытие модального окна
  function openModal(project) {
    // Очищаем слайдер
    slidesContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    const existingTags = document.querySelector('.modal-tags');
    if (existingTags) existingTags.remove();

    // Создаем слайды
    project.images.forEach((image, index) => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.innerHTML = `<img src="${image}" alt="Скриншот ${index + 1}">`;
      slidesContainer.appendChild(slide);

      // Создаем точки навигации
      const dot = document.createElement('div');
      dot.className = 'slider-dot';
      dot.addEventListener('click', () => goToSlide(index));
      sliderDots.appendChild(dot);
    });

    // Устанавливаем первый слайд активным
    currentSlide = 0;
    updateSlider();

    // Заполняем информацию о проекте
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.desc;
    document.getElementById('modalLink').href = project.link;

    // Добавляем теги
    const modalTags = document.createElement('div');
    modalTags.className = 'modal-tags';
    project.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'modal-tag';
      tagElement.textContent = tag;
      modalTags.appendChild(tagElement);
    });

    // Вставляем теги перед описанием
    const modalDesc = document.getElementById('modalDesc');
    modalDesc.parentNode.insertBefore(modalTags, modalDesc);

    // Запускаем автопрокрутку
    startAutoSlide();

    // Показываем модальное окно
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // Закрытие модального окна
  function closeModal() {
    clearInterval(slideInterval);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Обработчики событий
  closeModalBtn.addEventListener('click', closeModal);

  window.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Инициализация
  createProjectCards();
});
