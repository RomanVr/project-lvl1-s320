# project-lvl1-s320

[![Build Status](https://travis-ci.org/RomanVr/project-lvl1-s320.svg?branch=master)](https://travis-ci.org/RomanVr/project-lvl1-s320) [![Maintainability](https://api.codeclimate.com/v1/badges/edb86d332f2272a065d7/maintainability)](https://codeclimate.com/github/RomanVr/project-lvl1-s320/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/edb86d332f2272a065d7/test_coverage)](https://codeclimate.com/github/RomanVr/project-lvl1-s320/test_coverage)

#### Проект Brain Games - набор мини-игр, запускаемых из консоли в среде выполнения Node.
#### Порядок установки и запуска:
  - Запуск игр происходит вызовом bin-файла из пакета braingames_glif.
  - Установите глобально пакет braingames_glif с помощью пакетного менеджера npm командой:'npm install braingames_glif -g'.
  - После установки в консоле запустите команду соответствующую bin файлу.



#### Состав:
1. **Игра:** "Проверка на четность"
    - **bin команда:** `brain-even`
    - **описание:** *Пользователю показывается случайное число. И ему нужно ответить yes, если число четное, или no - если нечетное.*
2. **Игра:** "Калькулятор"
    - **bin команда:** `brain-calc`
    - **описание:** *Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.*
3. **Игра:** "НОД"
    - **bin команда:** `brain-gcd`
    - **описание:** *Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.*
    - **пример игры:** <script src="https://asciinema.org/a/360B1UjDb2LV7HR9VwCQnwV7g.js" id="asciicast-360B1UjDb2LV7HR9VwCQnwV7g" async></script>
4. **Игра:** "Баланс"
    - **bin команда:** `brain-balance`
    - **описание:** *Пользователю показывается случайное число и ему необходимо сбалансировать число. Сбалансированное число – это число, в котором наименьшая цифра отличается от наибольшей не более чем на единицу. Порядок цифр в сбалансированном числе – по возрастанию. Например, вместо 322 и 232 нужно указывать 223. Примеры сбалансированных чисел: 111, 233, 55, 001, 9999, 0001.*
5. **Игра:** "Арифметическая прогрессия"
      - **bin команда:** `brain-progression`
      - **описание:** *Пользователю показывается ряд чисел, образующий арифметическую прогрессию, в котором заменено любое из чисел двумя точками. Игрок должен определить это число.*
      - **пример игры:** [![asciicast](https://asciinema.org/a/360B1UjDb2LV7HR9VwCQnwV7g.png)](https://asciinema.org/a/360B1UjDb2LV7HR9VwCQnwV7g)
6. **Игра:** "Простое ли число?"
      - **bin команда:** `brain-prime`
      - **описание:** *Пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no - если не простое.*
      - **пример игры:** <a href="https://asciinema.org/a/360B1UjDb2LV7HR9VwCQnwV7g" target="_blank"><img src="https://asciinema.org/a/360B1UjDb2LV7HR9VwCQnwV7g.png" /></a>
