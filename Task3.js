/* (*) 3.Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы. */

/* введем идентификатор id для быстрого доступа к товару */
const catalog = {
    1: {
        id: 1,
        title: 'Ванна',
        price: 13000,
    },
    2: {
        id: 2,
        title: 'Смеситель',
        price: 6900,
    },
    3: {
        id: 3,
        title: 'Тумба',
        price: 9990,
    },
}


const basket = {

    items: [
        {
            id: 1,
            quantity: 3,
        },
        {
            id: 3,
            quantity: 1,
        },
    ],

    /* Функция добавит товар по индентификатору. */

    add(id) {
        const index = this.items.findIndex(function (item) {
            return item.id === id
        })

        if (index !== -1) {
            this.items[index].quantity += 1
        } else {
            this.items.push({
                id: id,
                quantity: 1
            })
        }
    },

    /** Функция выполнит удаление товара по индентификатору.*/
    remove(id) {
        const index = this.items.findIndex(function (item) {
            return item.id === id
        })

        if (index !== -1) {
            this.items.splice(index, 1)
        }
    },

    /** функция выполнит подсчет итоговой стоимости товаров в корзине. */

    getTotalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += catalog[item.id].price * item.quantity;
        }

        return result;
    }
};

const total = basket.getTotalPrice();

/* выводим итоговую стоимость в консоль */
console.log(total);