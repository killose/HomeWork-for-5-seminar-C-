// Задача 38: Задайте массив вещественных чисел.
// Найдите разницу между максимальным и минимальным элементов массива.

// [3 7 22 2 78] -> 76

function calcSumArrIndex(array){
    let sumMin = array[0];
    let sumMax = array[0];
    for(let i = 0; i < array.length; i++){
      if(array[i]>sumMax){
        sumMax = array[i]
      } 
      if(array[i]<sumMin){
        sumMin = array[i]
        
      }
      }
    return `Сумма элементов между максимальным и минимальным элементом массива: ${sumMax - sumMin} от массива [${array}]`
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
    let calcNewArray = calcSumArrIndex(getArray(4));
    return calcNewArray
  }
  console.log(main())