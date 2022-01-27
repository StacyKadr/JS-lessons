/* 4. Присвоить переменной a значение в промежутке от 0 до 15.
С помощью оператора switch организовать вывод чисел от a до 15. */

const a = Number(prompt('Введите число', 0));

if (!isNaN(a) && a >= 0 && a <= 15) {
    /* получение результата */
    const result = display(a);

    /* и вывод в диалоговое окно */
    alert(result);
} else {
    /* сообщение об ошибке */
    alert('Вы ввели не число, либо оно не в диапазоне от 0 до 15');
}

function display(a) {
    let result = '';

    /* проверка числа и формирование строки */
    switch (a) {
        case 1:
            result += 'Один';
        case 2:
            result += 'Два';
        case 3:
            result += 'Три';
        case 4:
            result += 'Четыре';
        case 5:
            result += 'Пять';
        case 6:
            result += 'Шесть';
        case 7:
            result += 'Семь';
        case 8:
            result += 'Восемь';
        case 9:
            result += 'Девять';
        case 10:
            result += 'Десять';
        case 11:
            result += 'Одинадцать';
        case 12:
            result += 'Двенадцать';
        case 13:
            result += 'Тринадцать';
        case 14:
            result += 'Четырнадцать';
        case 15:
            result += 'Пятнадцать';
    }
    /* возвращаем результат */
    return result;
}