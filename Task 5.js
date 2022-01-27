/* 5. Реализовать основные арифметические операции: сложение, вычитание, умножение, деление.
Сделать их в виде функций с двумя параметрами.
Обязательно использовать оператор return. */

/* сложение */
function add(a, b) {
    return a + b;
}
/* вычитание */
function subtract(a, b) {
    return a - b;
}
/* умножение */
function multiply(a, b) {
    return a * b;
}
/* деление */
function divide(a, b) {
    return a / b;
}

const a = Number(prompt('Введите первое число', 0));
const b = Number(prompt('Введите второе число', 0));

/* проверка на корректный ввод */
if (!isNaN(a) && !isNaN(b)) {
    /* получаем результат сложения */
    const addition = add(a, b);

    /* получаем результат вычитания */
    const subtraction = subtract(a, b);

    /* получаем результат умножения */
    const multiplication = multiply(a, b);

    /* получаем результат умножения */
    const division = divide(a, b);

    /* выводим результат */
    alert(`
        Сложение: ${addition}
        Вычитание: ${subtraction}
        Умножение: ${multiplication} 
        Деление: ${division}
    `);
} else {
    /* если ввод не корректный сообщение об ошибке */
    alert('Вы ввели не число');
}