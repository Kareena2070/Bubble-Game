
function makeBubble(){
let cutter = "";
for(let i =0; i<=229; i++){
    let num = Math.floor(Math.random()*10)
    cutter += `<div class="bubble">${num}</div>`
}
document.querySelector(".panelB").innerHTML = cutter;
}
makeBubble();

let time = 60;
function timer(){
    let timeInterval = setInterval(()=>{
        if(time>0){
            time--;
            document.querySelector("#timer").textContent = time
        }else{
            clearInterval(timeInterval)
            document.querySelector(".panelB").innerHTML = `
                <h1>Game Over</h1>
                <button id="restart">Restart</button>
            `;
        }
    }, 1000)

}
timer()


let hitNumber = 0;
function hitNum(){
    hitNumber = Math.floor(Math.random()*10)
    document.querySelector("#hitBubble").textContent = hitNumber
}
hitNum()

let score = 0;
function increseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score
}


document.querySelector(".panelB")
.addEventListener("click",function(dets){
    let clickNum = Number(dets.target.innerHTML)
    console.log(clickNum)
    if(clickNum === hitNumber){
        increseScore()
        makeBubble()
        hitNum()
    }
})



// Restart the game
document.addEventListener("click", function(e){
    if(e.target.id === "restart"){
        time = 60;
        score = 0;

        document.querySelector("#timer").textContent = time;
        document.querySelector("#scoreVal").textContent = score;

        makeBubble();
        hitNum();
        timer();
    }
});
