// Задача 3:
// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
    let result;
   switch (znak) {
       case "+": result = x + y;
       break;
       case "-": result = x - y;
       break;
       case "*": result = x * y;
       break;
       case "/": result = x / y;
       break;
       case "%": result = x % y;
       break;
       case "^": result = x ^ y;
       break;
   }
   return result;
}

document.writeln(doMath(3,'+',4)+"<br>");
document.writeln(doMath(3,'-',4)+"<br>");
document.writeln(doMath(3,'*',4)+"<br>");
document.writeln(doMath(3,'/',4)+"<br>");
document.writeln(doMath(3,'%',4)+"<br>");
document.writeln(doMath(2,'^',4)+"<br>");