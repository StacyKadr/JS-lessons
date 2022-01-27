/*  С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.*/

/* создаем двумерный массив корзины */
const basket = [
    ['Ванна', 13000],
    ['Смеситель', 6900],
    ['Тумба', 9990],
];

/* подсчитываем итоговую стоимость корзины */
const total = getTotalPrice(basket);

/* выводим итоговую стоимость в консоль для проверки работы*/
console.log(total);

function getTotalPrice(basket) {
    let result = 0;

    for (let item of basket) {
        result += item[1];
    }

    return result;
}