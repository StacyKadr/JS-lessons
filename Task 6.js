/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций, используя функции из пункта 5, и вернуть полученное значение, используя switch. */

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

const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '/';

const arg1 = Number(prompt('Введите первый аргумент', 0));
const arg2 = Number(prompt('Введите второй аргумент', 0));
const operation = prompt(`Введите операцию (${ADDITION}, ${SUBTRACTION}, ${MULTIPLICATION}, ${DIVISION})`, ADDITION);
/* проверка ввода данных*/
if (!isNaN(arg1) && !isNaN(arg2) && isOperationValid(operation)) {
    /* получаем результат математической операции */
    const result = mathOperation(arg1, arg2, operation);

    /* выводим результат */
    alert(result);
} else {
    /* если условие проверки не верно, то выводим сообщение об ошибке */
    alert('Вы ввели не число, либо математическая операция неизвестна');
}

function mathOperation(arg1, arg2, operation) {
    let result;

    switch (operation) {
        case ADDITION:
            result = add(arg1, arg2);
            break;
        case SUBTRACTION:
            result = subtract(arg1, arg2);
            break;
        case MULTIPLICATION:
            result = multiply(arg1, arg2);
            break;
        case DIVISION:
            result = divide(arg1, arg2);
            break;
    }

    return result;
}
function isOperationValid(operation) {
    return operation === ADDITION
        || operation === SUBTRACTION
        || operation === MULTIPLICATION
        || operation === DIVISION;
}