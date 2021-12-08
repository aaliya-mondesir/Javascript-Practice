//1
function biggie(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = 'big';
        }
    }
    return arr;
}

var array = [-1,2,-3,4];
biggie(array);

//2
function lowHigh(arr){
    var low = 0;
    var high = 0;
    for(var i=0; i<arr.length; i++){
        if(low == 0){
            low = arr[i]; 
        }

        else if(low<arr[i]){
            low = arr[i];
        }

        if(high == 0){
            high = arr[i]; 
        }

        else if(high>arr[i]){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

var array = [4,3,8,2,5];
lowHigh(array);

//3
function another(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 1){
            newArr.push(arr[i])
        }
    }
    console.log(arr[arr.length-2])
    return newArr[0];
}

var array = [4,2,5,1,6,9];
another(array);

//4
function double(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr;
}

var array = [2,5,6];
double(array);

//5
function positives(arr){
    var counter = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            counter++;
        }
    }
    arr[arr.length - 1] = counter;
    return arr;
}

var array = [-1,2,-3,-5,-6,8,9];
positives(array);

//6
function evenOdd(arr){
    for(var i=0; i<arr.length; i++){
        
        if((arr[i]%2 == 1 )&& (arr[i+1]%2 == 1) && (arr[i+2] == 1)){
            console.log("That's Odd!")
        }
    }
    return arr;
}

var array = [3,5,7];
evenOdd(array);

//7