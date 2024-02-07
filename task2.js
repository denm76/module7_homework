// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
  name: "Jhon",
  surname: "Sullivan"
}

function isPropInclude(obj, prop) {
  return prop in obj;
}

console.log(isPropInclude(obj, "city"));
console.log(obj, "name");