// Написать функцию, которая создает пустой объект, но без прототипа.

function createNonProtoObject(){
  const obj = Object.create(null);
  return obj;
}