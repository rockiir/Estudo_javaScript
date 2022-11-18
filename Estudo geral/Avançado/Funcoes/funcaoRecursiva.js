// função que chama ela mesmo.

function recursiva(max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}


recursiva(0);