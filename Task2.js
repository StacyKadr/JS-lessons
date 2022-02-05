/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */


const basket = {

    items: [
        {
            title: 'Ванна',
            price: 13000
        },
        {
            title: 'Смеситель',
            price: 6900
        },
        {
            title: 'Тумба',
            price: 9990
        },
    ],

    getTotalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += item.price;
        }

        return result;
    }
};

/* Итоговая стоимость */
const total = basket.getTotalPrice();

/* выводим итоговую стоимость в консоль */
console.log(total);