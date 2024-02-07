// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const person = {
  city: "Moscow"
}

const student = Object.create(person);
student.college = "MGU";
student.age = 19;


function objKeysAndValues(obj) {
  for (key in obj) {
    console.log(key);
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
}

objKeysAndValues(student);