let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector(".reset");
let trun0=true;
const winpattrens =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
   console.log("box was clicked");
   if(trun0){
    box.innerText="0";
    trun0=false;
   }
   else{
    box.innerText="X";
    trun0=true;
   }
   box.disable=true;
   checkwinner();
   
    });


});
const checkwinner=() =>
{
for(let pattren of winpattrens){
    console.log(pattren[0],pattren[1],pattren[2]);
    let pos1val=boxes[pattren[0]].innerText;
    let pos2val=boxes[pattren[1]].innerText;
    let pos3val=boxes[pattren[2]].innerText;
    if(pos1val !=="" && pos2val!=="" && pos3val!==""){
        if(pos1val ==pos2val && pos2val== pos3val)
        console.log("winner",pos1val);
    }

}

}

