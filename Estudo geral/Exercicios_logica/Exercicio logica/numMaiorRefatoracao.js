//Refatoração    
function max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(1,2))


//refatorando o codigo  

function max1(x, y ) {
return x > y ? x: y;
}
console.log(max1(1,2))

//refatorando a refatoraçã 


const max2 = (x, y) =>  x>y? x:y;
console.log(max2(1,2))




