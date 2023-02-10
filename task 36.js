// Задача 36: Задайте одномерный массив,
// заполненный случайными числами. Найдите сумму элементов, стоящих на нечётных позициях.

// [3, 7, 23, 12] -> 19

// [-4, -6, 89, 6] -> 0

function calcSumArrIndex(array){
    let sum = 0;
    for(let i = 1; i < array.length; i+=2){
      sum+=array[i]
      }
    return `Cумма элементов массива, стоящих на нечёт позициях: ${sum} от массива [${array}]`
  }
  
  function getArray(leng){
    let arr = []
    for(let i = 0; i < leng; i++) {
      let random = Math.random() * 100
      arr.push(Math.trunc(random))
    } 
    return arr
  }
  // console.log(arrPush(8));
  
  function main(){
    let calcNewArray = calcSumArrIndex(getArray(8));
    return calcNewArray
  }
  console.log(main())