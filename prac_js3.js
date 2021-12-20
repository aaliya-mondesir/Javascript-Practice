//1
function sigma(num){
    var sum = 0;
    for(var i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}

sigma(5);

//2
function factorial(num){
    var prod = 1;
    for(var i=1; i<=num; i++){
        prod = prod * i;
    }
    return prod;
}

factorial(4)

//3 HELP
function fibonacci(num){
    
}

//4
function secToLast(arr){
    if (arr.length <2){
        return null;
    }
    return arr[arr.length-2];
}

var array = [1];
secToLast(array);

//5
function fromTheEnd(arr,num){
    if (arr.length < num){
        return null;
    }
    return arr[arr.length-num];
}

var array = [2,5,6,3,78,9];
fromTheEnd(array,7);

//6 HELP
function secLargest(arr){
    var max = 0;
    var sec = 0;
    for(var i=0; i<arr.length; i++){
        if (max == 0){
            max = arr[i];
            sec = arr[i];
        }

        else if(arr[i] > max){
            sec = max;
            max = arr[i]
        }

        else if(arr[i]>sec && arr[i] < max){
            sec = arr[i];
        }
        return sec;
    }
}

//7
function doubleTrouble(arr){
    for(var i=0; i<arr.length; i++){
        arr.splice(arr[i+1],0,arr[i])
    }
    return arr;
}

var array = ["hey",5,"you",4];
doubleTrouble(array);