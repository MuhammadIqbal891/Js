const form =document.querySelector ("form");

form.addEventListener("submit",function (e){
    e.preventDefault();

   const height= parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#result");

if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML = "number main height dal bharwy"
}
else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML = "number main weight dal bharwy"
}
else{
    (weight / ((height*weight))/ 10000). toFixed(2);

    result.innerHTML = <span>${bmi}</span>
}

});