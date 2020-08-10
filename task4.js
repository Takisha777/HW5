// Задача 4:
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// func("hello world", ['l', 'd']) // вернет нам "heo wor"
debugger;
function delSym(text, arr) {
        // varText = toString(text);
        for (let i = 0; i < arr.length; i++){
            text = text.replace(arr[i],'');
        }
}

document.writeln(delSym("hello world", ['l', 'd']));
