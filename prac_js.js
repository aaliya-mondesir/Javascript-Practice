function numbers(){
    var array = [];
    for(var i=1; i<=255; i++){
        array.push(i); 
    }
    return array;
}

//2
function evenThousand(){
    var sum = 0;
    for(var i=1; i<=1000; i++){
        if (i%2 == 0){
            sum = sum + i;
        }
    }
    return sum;
}
evenThousand()

//3
function oddFiveThousand(){
    var sum = 0;
    for(var i = 1; i<=10; i++){
        if (i%2 == 1){
            sum += 1;
        }
    }
}




