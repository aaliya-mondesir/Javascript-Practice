function numbers(){
    var array = [];
    for(var i=0; i<=255; i++){
        array.push(i); 
    }
    return array;
}

//2
function evenThousand(){
    var sum = 0;
    for(var i=0; i<=1000; i++){
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
    for(var i = 0; i<=10; i++){
        if (i%2 == 1){
            sum += i;
        }
    }
    return sum;
}

oddFiveThousand();

//4
function addArr(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];  
    }
    return sum;
}

var array = [1,2,3];
addArr(array);

//5
function arrMax(arr){
    var max=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var array = [3,2,4,9];
arrMax(array);

//6
function arrAvg(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
}
var array = [1,2,3,4,5]
arrAvg(array)

//7
function arrOdd(){
    var arr = []
    for(var i=0; i<51; i++){
        if(i%2 == 1){
            arr.push(i)
        }
    }
    return arr;
}

arrOdd();

//8
function greaterThanY(arr,y){
    var greaterThan = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i] > y){
            greaterThan++;
        }
    }
    return greaterThan;
}

var array = [1,8,3,5,7];
var y = 3;
greaterThanY(array,y);

//9
function square(arr){
    for(var i=0; i<arr.length; i++){
        var square = Math.pow(arr[i],2);
        arr[i] = square;
    }
    return arr;
}

var array = [1,2,5,4];
square(array);

//10
function negatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

var array = [1,-2,3,-1];
negatives(array);

//11
function minMaxAvg(arr){
    var sum = 0;
    var min = 0;
    var max = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
        if(min == 0){
            min = arr[i];
        }
        else if(min > arr[i]){
            min = arr[i]
        }

        if(max == 0){
            max = arr[i];
        }

        else if(max < arr[i]){
            max = arr[i];
        }
    }

    var avg = sum/arr.length;

    var newArr = [max, min, avg];
    return newArr;
}

var array = [2,3,-1,4,0];
minMaxAvg(array);

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}

var array = [4,2,3,5,8];
swap(array);

function numToStr(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

var array = [1,-2,3,-4];
numToStr(array);



