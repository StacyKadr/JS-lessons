# Lesson2
Урок 2. Основные операторы JavaScript
Объяснить, почему код ниже даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

Объяснить, чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);

Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу (ноль можно считать положительным числом):

если a и b положительные, вывести их разность,
если a и b отрицательные, вывести их произведение,
если a и b разных знаков, вывести их сумму.
Присвоить переменной a значение в промежутке от 0 до 15.
С помощью оператора switch организовать вывод чисел от a до 15.

Реализовать основные арифметические операции: сложение, вычитание, умножение, деление.
Сделать их в виде функций с двумя параметрами.
Обязательно использовать оператор return.

Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций, используя функции из пункта 5, и вернуть полученное значение, используя switch.

(*) Сравнить null и 0 и своими словами объяснить результат.

(*) С помощью рекурсии организовать функцию возведения числа в степень: function power(val, pow), где val – заданное число, pow – степень.
