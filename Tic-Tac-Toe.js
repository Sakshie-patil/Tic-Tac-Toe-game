let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let messages = document.querySelector(".msg-container");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");

let currval0 = true;
let count = 0;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const newGame = () => {
    currval0 = true;
    enableBox();
    messages.classList.add("hide");
};

const resetGame = () => {
    currval0 = true;
    enableBox();
    messages.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(currval0 == true) {
            box.style.backgroundColor= "yellow";
            box.style.color = " green";
            box.innerText = "O";
            currval0=false; 
        }
        else {
            box.style.backgroundColor = " pink";
            box.style.color = " green";
            box.innerText = "X";
            currval0=true;
        }
       
        box.disabled = true;
        count ++;
        let iswinner  = checkwinner();
        if(count === 9 && !iswinner) {
            isdraw();
        }
    });
    
});  

const isdraw= () => {
    msg.innerText= "Game was draw";
    messages.classList.remove("hide");
    disableBox();

};
 const disableBox = () => {
        for(let box of boxes) {
            box.disabled = true;
        }
 };

const enableBox = () => {
    count = 0;
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
        box.style ="";
    }
}; 


let showWinner = (winner) => {
  msg.innerText = `congratulations winner is ${winner}`;
    messages.classList.remove("hide");
    disableBox();
};

const checkwinner = () => {
    for(let pattern of winPattern) {
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText; 

    if(pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1==pos2 && pos3==pos2) {
           showWinner(pos1);
           return true;
        }
    }
    }
    return false;
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);
