// Задача 4:
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// func("hello world", ['l', 'd']) // вернет нам "heo wor"

function delSym(text, arr) {
        for (let i = 0; i < arr.length; i++){
            let find = arr[i];
            let re = new RegExp(find,'g');
            text = text.replace(re,'');
        }
        return text;
}

document.writeln(delSym("hello world", ['l', 'd']));
