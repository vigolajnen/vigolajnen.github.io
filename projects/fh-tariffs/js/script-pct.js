(function() {
  ('use strict');
  // ===== КОНФИГУРАЦИЯ И КОНСТАНТЫ =====
  // ===== КОНФИГУРАЦИЯ И КОНСТАНТЫ =====
  
  // ЦВЕТА И ГРАДИЕНТЫ (легко менять без погружения в логику)
  const COLORS = {
    gradients: {
      bg_1: 'linear-gradient(135deg, #585858 0%, #585858 100%)',
      bg_2: 'linear-gradient(135deg, #226B9E 0%, #226B9E 100%)',
      bg_3: 'linear-gradient(135deg, #45281D 0%, #45281D 100%)',
      bg_4: 'linear-gradient(135deg, #3B3230 0%, #3B3230 100%)',
      bg_5: 'linear-gradient(135deg, #DBDAD8 0%, #DBDAD8 100%)',
      bg_6: 'linear-gradient(135deg, #522F20 0%, #522F20 100%)',
      bg_7: 'linear-gradient(135deg, #585858 0%, #585858 100%)',
    },
    text: {
      light: '#fff',
      dark: '#4b5052',
    },
  };
  
  // МАППИНГ ФОНОВ ДЛЯ ТАРИФОВ
  const BACKGROUND_DATA = {
    bg_1: {
      gradient: COLORS.gradients.bg_1,
      color: COLORS.text.light,
    },
    bg_2: {
      gradient: COLORS.gradients.bg_2,
      color: COLORS.text.light,
    },
    bg_3: {
      gradient: COLORS.gradients.bg_3,
      color: COLORS.text.light,
    },
    bg_4: {
      gradient: COLORS.gradients.bg_4,
      color: COLORS.text.light,
    },
    bg_5: {
      gradient: COLORS.gradients.bg_5,
      color: COLORS.text.dark,
    },
    bg_6: {
      gradient: COLORS.gradients.bg_6,
      color: COLORS.text.light,
    },
    bg_7: {
      gradient: COLORS.gradients.bg_7,
      color: COLORS.text.light,
    },
  };
  
  const TOOLTIP_CONFIG = {
    tariff: {
      selector: 'tariff-tooltip',
      class: 'tariff-tooltip',
    },
    tradeIn: {
      selector: 'trade-in-tooltip',
      class: 'trade-in-tooltip',
    },
    advantages: {
      selector: 'advantages-tooltip',
      class: 'advantages-tooltip',
    },
  };
  
  const SWIPER_BREAKPOINTS = {
    567: { slidesPerView: 2, spaceBetween: 5 },
    768: { slidesPerView: 2.5, spaceBetween: 10 },
    1024: { slidesPerView: 2.7, spaceBetween: 10 },
    1200: { slidesPerView: 3.5, spaceBetween: 10 },
    1400: { slidesPerView: 4, spaceBetween: 10 },
  };
  
  
  // ===== ИНИЦИАЛИЗАЦИЯ ТУЛТИПОВ =====
  // ===== ИНИЦИАЛИЗАЦИЯ ТУЛТИПОВ =====
  const initTooltips = (selector, customClass) => {
    return [].slice
      .call(document.querySelectorAll(`[data-bs-toggle="${selector}"]`))
      .map(
        el =>
          new bootstrap.Tooltip(el, {
            customClass: customClass,
            delay: { show: 100, hide: 50 },
          }),
      );
  };
  
  // Инициализация всех тултипов
  const tariffTooltips = initTooltips(
    TOOLTIP_CONFIG.tariff.selector,
    TOOLTIP_CONFIG.tariff.class,
  );
  const tradeInTooltips = initTooltips(
    TOOLTIP_CONFIG.tradeIn.selector,
    TOOLTIP_CONFIG.tradeIn.class,
  );
  const advantagesTooltips = initTooltips(
    TOOLTIP_CONFIG.advantages.selector,
    TOOLTIP_CONFIG.advantages.class,
  );
  
  
  // ===== ФУНКЦИОНАЛ ФОРМЫ =====
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation');
    let modalTour = document.querySelector('.modal-tour');
    let modalSubmitForm = document.getElementById('modal-submit-form');
  
    // document.addEventListener('DOMContentLoaded', () => {
  
    // });
  
  
    if (modalTour) {
      const modal = new bootstrap.Modal(modalTour);
      Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add('was-validated');
            } else {
              event.preventDefault();
              form.classList.remove('was-validated');
              const modalSubmit = new bootstrap.Modal(modalSubmitForm);
  
              modal.hide();
              modalSubmit.show();
  
              modalSubmitForm.addEventListener('hidden.bs.modal', function() {
                form.submit();
                form.reset();
              });
            }
          },
          false,
        );
      });
    } else {
      Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add('was-validated');
            } else {
              event.preventDefault();
              form.classList.remove('was-validated');
              const modalSubmit = new bootstrap.Modal(modalSubmitForm);
              modalSubmit.show();
  
              modalSubmitForm.addEventListener('hidden.bs.modal', function() {
                form.submit();
                form.reset();
              });
            }
          },
          false,
        );
      });
    }
  
  
    // маска для телефона
    // let phones = document.querySelectorAll('input[type="tel"]');
    // phones.forEach(phone => {
    //   let maskOptions = {
    //     mask: '{8} (000)000-00-00',
    //     lazy: true,
    //     autofix: true, // bound value
    //     placeholderChar: '9',
    //   };
    //   new IMask(phone, maskOptions);
    // });
  })();
  
  
  
  const FormService = {
    /**
         * Инициализация сервиса формы тарифов
         */
    init() {
      if (this.isInitialized) return;
  
      this.overrideFormSubmit();
      this.initTariffSelectHandler();
      this.isInitialized = true;
    },
  
    /**
         * Переопределяет обработчики отправки форм
         */
    overrideFormSubmit() {
      const forms = document.querySelectorAll('.needs-validation');
      if (forms.length === 0) return;
  
      forms.forEach(form => {
        this.setupFormHandler(form);
      });
    },
  
    /**
         * Настраивает обработчик для конкретной формы
         */
    setupFormHandler(form) {
      const newHandler = event => {
        this.handleFormSubmit(event, form);
      };
  
      form.addEventListener('submit', newHandler);
    },
  
    /**
         * Обработчик отправки формы
         */
    handleFormSubmit(event, form) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
  
      event.preventDefault();
      this.processValidForm(form);
    },
  
    /**
         * Обрабатывает валидную форму
         */
    processValidForm(form) {
      form.classList.remove('was-validated');
  
      const formData = this.collectFormData(form);
      this.sendFormData(formData);
      this.resetFormState(form);
    },
  
    /**
         * Собирает данные из формы
         */
    collectFormData(form) {
      const name = this.getElementValue('formName');
      const phone = this.getElementValue('formPhone');
      const tariff = this.getSelectedTariff(form);
      const clubId = this.getClubId(form);
  
      return {
        name: name,
        phone: phone,
        tariff: tariff,
        clubId: clubId,
        pageUrl: window.location.href,
      };
    },
  
    /**
         * Получает значение элемента по ID
         */
    getElementValue(id) {
      const element = document.getElementById(id);
      return element ? element.value : '';
    },
  
    /**
         * Получает выбранный тариф
         */
    getSelectedTariff(form) {
      const tariffSelect = form.querySelector('select[name="service"]');
      if (!tariffSelect || tariffSelect.selectedIndex < 0) return '';
  
      const selectedOption = tariffSelect.options[tariffSelect.selectedIndex];
      return selectedOption.text.trim();
    },
  
    /**
         * Получает ID клуба
         */
    getClubId(form) {
      const clubInput = form.querySelector('input[name="clubId"]');
      return clubInput ? clubInput.value : '';
    },
  
    /**
         * Отправляет данные на сервер
         */
    async sendFormData(formData) {
      try {
        // Продакшен: отправка на реальный endpoint
        const response = await fetch('/api/tariffs-feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
  
        await response.json();
      } catch (error) {
        console.error('Form submission error:', error);
        // Можно добавить отправку ошибок в систему мониторинга
      }
    },
  
    /**
         * Сбрасывает состояние формы
         */
    resetFormState(form) {
      form.classList.remove('was-validated');
      this.clearFieldStates(form);
      this.hideSelectedTariffInfo();
    },
  
    /**
         * Очищает состояния полей формы
         */
    clearFieldStates(form) {
      const fields = form.querySelectorAll('.is-valid, .is-invalid');
      fields.forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
      });
    },
  
    /**
         * Скрывает информацию о выбранном тарифе
         */
    hideSelectedTariffInfo() {
      const selectedTariffInfo = document.querySelector(
        '.selected-tariff-info',
      );
      if (selectedTariffInfo) {
        selectedTariffInfo.style.display = 'none';
      }
    },
  
    /**
         * Инициализация обработчиков выбора тарифа
         */
    initTariffSelectHandler() {
      const selects = document.querySelectorAll('select[name="service"]');
      selects.forEach(select => {
        select.addEventListener('change', this.handleTariffChange.bind(this));
      });
    },
  
    /**
         * Обработчик изменения тарифа
         */
    handleTariffChange(event) {
      const selectedOption = event.target.options[event.target.selectedIndex];
      if (selectedOption.value) {
        // Логирование для аналитики
        if (typeof gtag !== 'undefined') {
          gtag('event', 'tariff_select', {
            tariff_name: selectedOption.text.trim(),
            tariff_value: selectedOption.value,
          });
        }
      }
    },
  
    /**
         * Устанавливает тариф из внешнего источника
         */
    setTariffFromButton(tariffPrice, tariffName) {
      const tariffSelects = document.querySelectorAll('select[name="service"]');
  
      tariffSelects.forEach(select => {
        const option = Array.from(select.options).find(
          opt => opt.value === tariffPrice,
        );
        if (option) {
          select.value = tariffPrice;
          const event = new Event('change', { bubbles: true });
          select.dispatchEvent(event);
        }
      });
    },
  };
  
  /**
     * Интеграция с основным скриптом тарифов
     */
  function integrateWithTariffs() {
    if (
      typeof initTariffsAndSliders === 'function' &&
      typeof window.scrollToForm === 'function'
    ) {
      const originalScrollToForm = window.scrollToForm;
  
      window.scrollToForm = function(button) {
        const tariffName = button.getAttribute('data-tariff-name');
        const tariffPrice = button.getAttribute('data-tariff-price');
  
        FormService.setTariffFromButton(tariffPrice, tariffName);
        originalScrollToForm(button);
      };
    }
  }
  
  /**
     * Инициализация при полной загрузке DOM
     */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      FormService.init();
      integrateWithTariffs();
    }
  }
  
  
  
  
  // ===== ФУНКЦИОНАЛ ТАРИФОВ И СЛАЙДЕРОВ =====
  // ===== ФУНКЦИОНАЛ ТАРИФОВ И СЛАЙДЕРОВ =====
  
  let sliderGallery, sliderTariffs;
  let isInitialized = false;
  
  /**
     * Инициализация тарифов и слайдеров
     */
  function initTariffsAndSliders() {
    if (isInitialized) return;
  
    initSliders();
    initEventHandlers();
    isInitialized = true;
  }
  
  /**
     * Инициализация слайдеров
     */
  function initSliders() {
    initGallerySlider();
    initTariffsSlider();
  }
  
  /**
     * Инициализация основного слайдера с картинками
     */
  function initGallerySlider() {
    const sliderElement = document.querySelector(
      '#js-slider-gallery .swiper-container',
    );
    if (!sliderElement) return;
  
    sliderGallery = new Swiper('#js-slider-gallery .swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      watchOverflow: true,
      pagination: {
        el: '.page-tariffs__club-gallery .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.page-tariffs__club-gallery .swiper-button-next',
        prevEl: '.page-tariffs__club-gallery .swiper-button-prev',
      },
      on: {
        slideChange: handleGallerySlideChange,
        init: handleGalleryInit,
      },
    });
  }
  
  /**
     * Инициализация слайдера тарифов
     */
  function initTariffsSlider() {
    const tariffsSliderElement = document.querySelector(
      '#js-slider-tariffs .swiper-container',
    );
    if (!tariffsSliderElement) return;
  
    sliderTariffs = new Swiper('#js-slider-tariffs .swiper-container', {
      slidesPerView: 1.05,
      spaceBetween: 5,
      watchOverflow: true,
      pagination: {
        el: '.club-tariffs .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.club-tariffs .swiper-button-next',
        prevEl: '.club-tariffs .swiper-button-prev',
      },
      breakpoints: SWIPER_BREAKPOINTS,
      on: {
        init: checkTariffsVisibility,
        resize: checkTariffsVisibility,
      },
    });
  
    initTariffEventHandlers();
  }
  
  /**
     * Обработчик изменения слайда галереи
     */
  function handleGallerySlideChange() {
    const activeSlide = this.slides[this.activeIndex];
    const slide = activeSlide.getAttribute('data-slide');
    updateTariffsBackground(slide);
  }
  
  /**
     * Обработчик инициализации галереи
     */
  function handleGalleryInit() {
    const activeSlide = this.slides[this.activeIndex];
    const slide = activeSlide.getAttribute('data-slide');
    updateTariffsBackground(slide);
  }
  
  /**
     * Скроллит к форме обратной связи
     */
  function scrollToForm(button) {
    const formSection = document.getElementById('feedbackForm');
    if (!formSection) return;
  
    const tariffName = button.getAttribute('data-tariff-name');
    const tariffPrice = button.getAttribute('data-tariff-price');
  
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
    // Используем FormService если доступен
    if (typeof FormService !== 'undefined' && FormService.setTariffFromButton) {
      setTimeout(() => {
        FormService.setTariffFromButton(tariffPrice, tariffName);
      }, 300);
    }
  }
  
  /**
     * Обновляет фон и стили тарифов
     */
  function updateTariffsBackground(slide) {
    if (!BACKGROUND_DATA[slide]) return;
  
    const tariffsSection = document.getElementById('tariffsSection');
    const gallerySection = document.querySelector('#js-slider-gallery');
    const background = BACKGROUND_DATA[slide];
    const style = `--bg-color: ${background.gradient}; --text-color: ${background.color}`;
  
    if (tariffsSection) {
      tariffsSection.setAttribute('style', style);
    }
  
    if (gallerySection) {
      gallerySection.setAttribute('style', style);
    }
  
    highlightActiveTariff(slide);
  }
  
  /**
     * Подсвечивает активный тариф
     */
  function highlightActiveTariff(slide) {
    const allTariffs = document.querySelectorAll('.club-tariff');
    const activeTariff = document.querySelector(`[data-tariff="${slide}"]`);
  
    allTariffs.forEach(tariff => {
      tariff.style.transform = 'scale(1)';
      tariff.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    });
  
    if (activeTariff) {
      activeTariff.style.transform = 'scale(1.05)';
      activeTariff.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    }
  }
  
  /**
     * Проверяет видимость всех тарифов
     */
  function checkTariffsVisibility() {
    if (!sliderTariffs) return;
  
    const tariffsContainer = document.querySelector('#js-slider-tariffs');
    const totalSlides = sliderTariffs.slides.length;
    const slidesPerView = sliderTariffs.params.slidesPerView;
  
    if (tariffsContainer) {
      tariffsContainer.classList.toggle(
        'all-visible',
        totalSlides <= slidesPerView,
      );
    }
  }
  
  /**
     * Инициализация обработчиков событий
     */
  function initEventHandlers() {
    window.addEventListener('load', checkTariffsVisibility);
  }
  
  /**
     * Инициализация обработчиков для тарифов
     */
  function initTariffEventHandlers() {
    initTariffButtons();
    initTariffClicks();
  }
  
  /**
     * Инициализация обработчиков кнопок выбора
     */
  function initTariffButtons() {
    const buttons = document.querySelectorAll('.club-tariff__link');
    buttons.forEach(button => {
      button.addEventListener('click', handleTariffButtonClick);
    });
  }
  
  /**
     * Обработчик клика по кнопке выбора тарифа
     */
  function handleTariffButtonClick(e) {
    e.preventDefault();
    scrollToForm(e.currentTarget);
  }
  
  /**
     * Инициализация обработчиков кликов по тарифам
     */
  function initTariffClicks() {
    const tariffs = document.querySelectorAll('.club-tariff');
    tariffs.forEach(tariff => {
      tariff.addEventListener('click', handleTariffClick);
    });
  }
  
  /**
     * Обработчик клика по тарифу
     */
  function handleTariffClick(e) {
    if (e.target.closest('.club-tariff__link')) return;
  
    const slide = e.currentTarget.getAttribute('data-tariff');
    switchToTariffSlide(slide, e.currentTarget);
  }
  
  /**
     * Переключает слайдеры на указанный тариф
     */
  function switchToTariffSlide(slide, tariffElement) {
    if (sliderTariffs) {
      const index = Array.from(sliderTariffs.slides).indexOf(tariffElement);
      if (index !== -1) {
        sliderTariffs.slideTo(index);
      }
    }
  
    if (sliderGallery) {
      const index = Array.from(sliderTariffs.slides).indexOf(tariffElement);
      if (index !== -1) {
        sliderGallery.slideTo(index);
      }
    }
  }
  
  /**
     * Очистка ресурсов (для динамической перезагрузки)
     */
  function destroy() {
    if (sliderGallery && sliderGallery.destroy) {
      sliderGallery.destroy(true, true);
    }
    if (sliderTariffs && sliderTariffs.destroy) {
      sliderTariffs.destroy(true, true);
    }
    isInitialized = false;
  }
  
  // Экспорт функций
  window.initTariffsAndSliders = initTariffsAndSliders;
  window.destroyTariffsAndSliders = destroy;
  
  
  
  // ===== LAZY LOAD IFRAMES =====
  // ===== LAZY LOAD IFRAMES =====
  function lazyLoadIframes() {
    const iframes = document.querySelectorAll('.lazy-iframe');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          const src = iframe.getAttribute('data-src');
  
          if (src && !iframe.src) {
            iframe.src = src;
            iframe.onload = () => {
              iframe.style.background = 'none';
            };
          }
  
          observer.unobserve(iframe);
        }
      });
    });
  
    iframes.forEach(iframe => observer.observe(iframe));
  }
  
  
  // ===== НАБЛЮДАТЕЛЬ ЗА ИЗМЕНЕНИЯМИ DOM =====
  /**
     * Наблюдатель за изменениями DOM для динамически добавляемых iframes
     */
  function initIframeMutationObserver() {
    if (typeof MutationObserver === 'undefined') return;
  
    const mutationObserver = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) {
            if (
              (node.matches && node.matches('.lazy-iframe')) ||
              (node.querySelectorAll &&
                node.querySelectorAll('.lazy-iframe').length > 0)
            ) {
              lazyLoadIframes();
              return;
            }
          }
        }
      }
    });
  
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  
  

  // ===== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ =====
  document.addEventListener('DOMContentLoaded', () => {
    initTariffsAndSliders();
    lazyLoadIframes();
    initIframeMutationObserver();
    FormService.init(); // Инициализируем сервис формы
  });
})();
