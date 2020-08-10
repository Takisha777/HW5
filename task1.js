// Задача 1:
// Написать функцию заполнения двумерного массива. Имя произвольное.
function arrUser(n,m) {
    let randomNumber, arr = [];
    for ( let i = 0; i < n; i++ ){
        arr[i] = [];
        for ( let j = 0; j < m; j++){
            randomNumber = Math.trunc(Math.random()*100);
            arr[i].push(randomNumber);
        }
        document.writeln(arr[i] + "<br>");
    }
}
arrUser(10,10);