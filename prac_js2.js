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
    console.log()
    return newArr;
}

var array = [4,2,5,1,6,9];
another(array);