let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#Reset")
let newbtn = document.querySelector("#new")
let msgcontainer = document.querySelector(".message")
let para = document.querySelector("#msg")


let turno = true;
const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if (turno === true){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText= "X";
            turno = true;
        }
        box.disabled = true ;
        checkwinner ();
    });
});


const showwinner = (winner) =>{
        msg.innerText = `Congratulation Winner is : ${winner}`
        m
}

const checkwinner = () =>{
    for (pattern of win){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner" , pos1)

                showwinner(pos1);
            }
        }
    }
};


