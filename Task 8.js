/* 8.(*) С помощью рекурсии организовать функцию возведения числа в степень: function power(val, pow), где val – заданное число, pow – степень. */

const val = Number(prompt('Введите число', 0));
const pow = Number(prompt('Введите степень', 0));

if (!isNaN(val) && !isNaN(pow)) {
    const result = power(val, pow);
    /* выводим результат */
    alert(result);
} else {
    /* если не чмсло, то сообщение об ошибке */
    alert('Вы ввели не число');
}

function power(val, pow) {
    if (val == 0)
        return 0;
    if (pow == 0)
        return 1;
    if (pow < 0)
        return power(1 / val, -pow);
    else
        return val * power(val, pow - 1);
}

