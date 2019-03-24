var answer = Number(prompt('Угадай двузначное число и победи!'));
var result = Math.round((Math.random() * (99 - 10) + 10));
function f() {
    if (answer = result) {
        alert('Поздравляем! Вы угадали число!');
    } else if (answer < result) {
        alert('Ну побольше число нужно');
    } else if (answer > result) {
        alert('Переборщили');
    }
}



