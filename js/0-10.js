var i=0;
do {
    if(i%2 !== 0) {
        console.log(i+'- нечетное число');
    }
    else if (i!==0 && i%2===0) {
        console.log(i+'- четное число');
    }
    else {
        console.log(i+'- это ноль');
    }
    i++;
} while (i<11);




