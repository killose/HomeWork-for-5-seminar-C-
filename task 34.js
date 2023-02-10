// Задача 34: Задайте массив заполненный случайными положительными 
// трёхзначными числами. Напишите программу, которая покажет количество 
// чётных чисел в массиве.


function arrPush(length){
    let arr = []
    for(let i = 0; i < length; i++){
      let random = Math.trunc(Math.random() * 1000);
        arr.push(random)
    }
    return arr
  }
  console.log(arrPush(8));
  
  function arrCheck(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      console.log(arr)
      if (arr[i] % 2 === 0){
        sum++
      }
  }
    return sum
  }
  console.log(arrCheck(arrPush(8)));


  function arraySumChet(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        sum++
      }
    }
    return `Количество чётных элементов: ${sum} 
   от массива [${array}]`
  }
  
  function getArray(leng){
    let arr = []
    for(let i = 0; i < leng; i++) {
      let random = Math.random() * 1000
      arr.push(Math.trunc(random))
    } 
    return arr
  }
  
  function main(){
    let calcNewArray = arraySumChet(getArray(8));
    return calcNewArray
  }
  console.log(main())