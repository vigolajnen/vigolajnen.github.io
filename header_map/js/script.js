'use strict';

// menu
const body = document.body;
const menu = document.querySelector(".page-header__wrapper");
const triggerMenu = document.querySelector(".page-header__toggle");

triggerMenu.addEventListener("click", () => {
    menu.classList.toggle("js-menu-open");
    triggerMenu.classList.toggle("active");
    body.classList.toggle("overflow");
});

// 

ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [59.939145, 30.418151],
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
    });
    // Создаем ломаные линии.
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [59.928099, 30.373998],
      [59.923792, 30.385203],
      [59.926668, 30.400673],
      [59.933604, 30.435534],
      [59.941145, 30.434876],
      [59.959708, 30.438126],
      [59.960269, 30.439262],
      [59.960708, 30.452491],
      [59.962269, 30.460408],
      [59.962960, 30.465185],
      [59.962280, 30.466908],
      [59.962075, 30.466543]
    ], {}, {
        // Задаем цвет.
        strokeColor: "#1c8a43",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 4000
    });
  
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    // Создаем метки.
    var firstPoint = new ymaps.Placemark([59.928099, 30.373998], {}, {
        preset: 'islands#pinkIcon'
    });
    var secondPoint = new ymaps.Placemark([59.962075, 30.466543], {}, {
        preset: 'islands#blueIcon'
    });
    // Функция анимации пути.
    function playAnimation() {
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(firstPoint);
        myMap.geoObjects.add(secondPoint);
        // Анимируем первую линию.
        firstAnimatedLine.animate()
    }
    // Запускаем анимацию пути.
    playAnimation();
}

// 

ymaps.modules.define('AnimatedLine', [
    'util.defineClass',
    'Polyline',
    'vow'
], function(provide, defineClass, Polyline, vow) {
    /**
     * @fileOverview Анимированная линия.
     */
    /**
     * Создает экземпляр анимированной линии.
     * @class AnimatedLine. Представляет собой геообъект с геометрией geometry.LineString.
     * @param {Boolean} [options.animationTime = 4000] Длительность анимации.
     **/
    function AnimatedLine(geometry, properties, options) {
        AnimatedLine.superclass.constructor.call(this, geometry, properties, options);
        this._loopTime = 50;
        this._animationTime = this.options.get('animationTime', 4000);
        // Вычислим длину переданной линии.
        var distance = 0;
        var previousElem = geometry[0];
        this.geometry.getCoordinates().forEach(function(elem) {
            distance += getDistance(elem, previousElem);
            previousElem = elem;
        });
        // Вычислим минимальный интервал отрисовки.
        this._animationInterval = distance / this._animationTime * this._loopTime;
        // Создадим массив с более частым расположением промежуточных точек.
        this._smoothCoords = generateSmoothCoords(geometry, this._animationInterval);
    }
    defineClass(AnimatedLine, Polyline, {
        // Анимировать линию.
        start: function() {
            var value = 0;
            var coords = this._smoothCoords;
            var line = this;
            var loopTime = this._loopTime;
            // Будем добавлять по одной точке каждые 50 мс.
            function loop(value, currentTime, previousTime) {
                if (value < coords.length) {
                    if (!currentTime || (currentTime - previousTime) > loopTime) {
                        line.geometry.set(value, coords[value]);
                        value++;
                        previousTime = currentTime;
                    }
                    requestAnimationFrame(function(time) {
                        loop(value, time, previousTime || time)
                    });
                } else {
                    // Бросаем событие окончания отрисовки линии.
                    line.events.fire('animationfinished');
                }
            }

            loop(value);
        },
        // Убрать отрисованную линию.
        reset: function() {
            this.geometry.setCoordinates([]);
        },
        // Запустить полный цикл анимации.
        animate: function() {
            this.reset();
            this.start();
            var deferred = vow.defer();
            this.events.once('animationfinished', function() {
                deferred.resolve();
            });
            return deferred.promise();
        }

    });
    // Функция генерации частых координат по заданной линии.
    function generateSmoothCoords(coords, interval) {
        var smoothCoords = [];
        smoothCoords.push(coords[0]);
        for (var i = 1; i < coords.length; i++) {
            var difference = [coords[i][0] - coords[i - 1][0], coords[i][1] - coords[i - 1][1]];
            var maxAmount = Math.max(Math.abs(difference[0] / interval), Math.abs(difference[1] / interval));
            var minDifference = [difference[0] / maxAmount, difference[1] / maxAmount];
            var lastCoord = coords[i - 1];
            while (maxAmount > 1) {
                lastCoord = [lastCoord[0] + minDifference[0], lastCoord[1] + minDifference[1]];
                smoothCoords.push(lastCoord);
                maxAmount--;
            }
            smoothCoords.push(coords[i])
        }
        return smoothCoords;
    }
    // Функция нахождения расстояния между двумя точками на плоскости.
    function getDistance(point1, point2) {
        return Math.sqrt(
            Math.pow((point2[0] - point1[0]), 2) +
            Math.pow((point2[1] - point1[1]), 2)
        );
    }
    provide(AnimatedLine);
});
