AFRAME.registerComponent("game-play",{
schema:{
elementId:{type:"string",default:"#ring1"}
},
init:function(){
    var duration=120
    var timerEl=document.querySelector("#timer")
    this.startTimer(duration,timerEl)
},
startTimer:function(duration,timerEl){
    var minutes;
    var seconds;
    setInterval(()=>{
        if (duration>0){
            minutes=parseInt(duration/60)
            seconds=parseInt(duration%60)
            if(minutes<10){
                minutes+="0"
            }
            if(seconds<10){
                seconds+="0"
            }
            timerEl.setAttribute("text",{value:minutes+":"+seconds})
            duration-=1
        }
        else{
            this.gameOver()
        }
    },1000)
},
gameOver:function(){
    var planeEl=document.querySelector("#plane_model")
    var element=document.querySelector("game-over-text")
    element.setAttribute("visible",true)
    planeEl.setAttribute("dynamic-body",{mass:1})
},
updateTargets:function(){
    var element=document.querySelector("#targets")
    var count=element.getAttribute("text").value
    var currentTargets=parseInt(count)
    currentTargets-=1
    element.setAttribute("text",{value:currentTargets})
},
updateScore:function(){
    var element=document.querySelector("#score")
    var count=element.getAttribute("text").value
    var currentScore=parseInt(count)
    currentScore+=50
    element.setAttribute("text",{value:currentScore})
},
isCollided:function(elementId){
    const element=document.querySelector(elementId)
    element.addEventListener("collide",e=>{
        if (elementId.includes("#ring")){
            console.log(elementId+" collision")
            element.setAttribute("visible",false)
            this.updateScore()
            this.updateTargets()
        }
        else if ( elementId.includes("#hurdle")){
            console.log(elementId+" collision")
            this.gameOver()
        }
    })
},
update:function(){
    this.isCollided(this.data.elementId)

}
})