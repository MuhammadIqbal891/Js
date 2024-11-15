let number=prompt("Enter a number to present its table :");
let choice= prompt("Enter A for Ascending order and D for Descending order").toLocaleUpperCase();

if(choice === 'A'){

    for(let i = 1;i<=10;i++){
        console.log(number + "*" + i + "=" + number * i)
    }
}
else if(choice === 'D'){
        for (let i =1;i =>10;i--){
            console.log(number + "*" + i + "=" + number * i)
        }
}
else{
    console.log("enter Valid choice");
    
}


