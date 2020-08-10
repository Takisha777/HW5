// Задача 2:
// Написать функцию, которая примет как аргументы (параметры) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function getArrMax(arrUser1,arrUser2) {
    if (summArr(arrUser1)>summArr(arrUser2)){
        return summArr(arrUser1);
    } else {
        return summArr(arrUser2);
    }
}
function summArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


console.log(getArrMax([1,2,4,3,5,20],[6,8,7,9,0]));