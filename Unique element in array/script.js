let arr1 = [12,13,13,14,14,15,15,12,4,0];

let unnique ;
for (let i = 0 ; i < arr1.length ; i ++){
    if(arr1.indexOf(arr1[i]) === arr1.lastIndexOf (arr1[i])){
            unnique = arr1[i]
    }
}

console.log("Unique value is " + unnique);
