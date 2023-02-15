// Доп
// Задача 35:Задайте одномерный массив из 123 случайных чисел [0: 1000].
// Найдите количество элементов массива, значения которых лежат в отрезке [10,99].

// Пример для массива из 5, а не 123 элементов. В своём решении сделайте для 123

// [5, 18, 123, 6, 2] -> 1

// [1, 2, 3, 6, 2]-> 0

// [10, 11, 12, 13, 14]-> 5

function getArray(length){
    let arr = []
    for(let i = 0; i < length; i++){
      arr[i] = Math.trunc(Math.random() * 1000)
    }
    return arr
  }
  console.log(getArray(123));
  
  function checkArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      if (array[i] >= 10 && array[i] <= 99){
        sum ++
      }
    }
    return sum
  }
  
  console.log(checkArray(getArray(123)));