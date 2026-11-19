
/**
 *
 Использовать createDelegate() - используется в Ext (устарел, не рекомендуется)
 тоже самое сделать через bind();
 где-то использовать стрелочную функцию.

 * **/

// Пример 1

if (true) {
    var oldWay = 'Я var — меня видно даже снаружи if';
    let modernLet = 'Я let — я живу только внутри этого if';
    const modernConst = 'Я const — я тоже живу только внутри этого if';
}

console.log(" ----- Пример 1 ----- ");
console.log(oldWay); // 'Я var — меня видно даже снаружи if'

// А вот следующие две строчки вызовут ошибку ReferenceError,
// потому что let и const остались за закрытой дверью блока if:
// console.log(modernLet);   // Ошибка: modernLet is not defined
// console.log(modernConst); // Ошибка: modernConst is not defined

// Пример 2

// --- VAR ---
console.log(" ----- Пример 2 ----- ");

var user = 'Анна';
var user = 'Борис'; // Повторное объявление сработает, но может вызвать путаницу
user = 'Виктор';    // Значение изменилось
console.log(user);  // 'Виктор'

// --- LET ---
let score = 10;
// let score = 20; // Ошибка! Нельзя объявить let с тем же именем в том же блоке
score = 15;        // А вот поменять значение — пожалуйста
console.log(score); // 15

// --- CONST ---
const appTitle = 'Мой сайт';
// appTitle = 'Новый сайт'; // Ошибка TypeError! Переменную const менять нельзя
console.log(appTitle); // 'Мой сайт'

// Пример 3

const settings = {
    theme: 'light',
    count: 1
};

settings.theme = 'dark'; // Можно! Мы меняем свойство внутри объекта, а не саму переменную settings
settings.count += 1;     // Тоже можно!

console.log(" ----- Пример 3 ----- ");
console.log(settings); // { theme: 'dark', count: 2 }

// А вот полностью заменить объект целиком уже не получится:
// settings = { theme: 'blue' }; // Ошибка TypeError: Assignment to constant variable

// Пример 4

function calculateTotal() {
    var a = 5;
    let b = 10;
    const c = 15;

    return a + b + c;
}

console.log(" ----- Пример 4 ----- ");
console.log(calculateTotal()); // 30

// Снаружи функции ни одна из них недоступна:
// console.log(a); // Ошибка
// console.log(b); // Ошибка
// console.log(c); // Ошибка

// Пример 5

// С let — на каждом шаге цикла создаётся своя отдельная переменная i
console.log(" ----- Пример 5 ----- ");
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log('let i =', i); // Выведет 0, затем 1, затем 2
    }, 100);
}

// С var — одна общая переменная i на весь цикл, к моменту срабатывания таймера она уже равна 3
for (var j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log('var j =', j); // Выведет 3, 3, 3
    }, 100);
}