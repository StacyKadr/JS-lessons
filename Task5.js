/* *Нарисовать пирамиду с помощью console.log, 
как показано на рисунке, только у вашей пирамиды должно быть 20 рядов */

let result = '';

/* используем цикл со счетчиком, чтобы сделать 20 итераций */
for (let i = 0; i < 20; i++) {
    /* на каждой итерации увеличиваем кол-во звездочек в строкe */
    result += '*';

    console.log(result);
}