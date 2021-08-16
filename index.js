// Your code here

function mapToNegativize(sourceArray){
    const newArr =[];

    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] - (sourceArray[i]*2));
    }
    return newArr;
}

function mapToNoChange(sourceArray){
    const newArr =[];

    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i]);
    }

    return newArr;
}
function mapToDouble(sourceArray){
    const newArr =[];

    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] *2);
    }
    return newArr;
}
function mapToSquare(sourceArray){
    const newArr =[];

    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] **2);
    }
    return newArr;
}


function reduceToTotal(sourceArray, startingPoint =0){
    let returnVal = startingPoint;

    for(let i = 0; i < sourceArray.length; i++){
        returnVal += sourceArray[i];
    }
    return returnVal;
}


function reduceToAllTrue(sourceArray){
    let returnVal  = true;

    for(let i = 0; i < sourceArray.length; i++){
        if (!!!sourceArray[i] ){
            returnVal  = false
            return returnVal;
        }
    }
    return returnVal;
}

function reduceToAnyTrue(sourceArray){
    let returnVal  = false;

    for(let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] ){
            returnVal  = true;
            return returnVal;
        }
    }
    return returnVal;
}