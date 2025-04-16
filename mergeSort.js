#!/usr/bin/env node

function mergeSort(a){
    
    if(a.length==1){
        return a;
    }
    else{
        const mid =a.length/2;
        const leftArray = mergeSort(a.slice(0,mid));
        const rightArray = mergeSort(a.slice(mid,a.length));

        let sortedArray = [];

        while(leftArray.length>0 && rightArray.length>0){
            if(leftArray[0]<=rightArray[0]){
                sortedArray.push(leftArray[0]);
                leftArray.shift();
            }
            else{
                sortedArray.push(rightArray[0]);
                rightArray.shift();
            }
        }
        while(leftArray.length>0){
            sortedArray.push(leftArray[0]);
                leftArray.shift();
        }
        while(rightArray.length>0){
            sortedArray.push(rightArray[0]);
                rightArray.shift();
        }
        return sortedArray;
    }
}

console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([105, 79, 100, 110]));