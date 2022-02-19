AFRAME.registerComponent("flying-birds",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`ring${i}`;
            var posX=(Math.random()*3000+(-1000));
            var posY=(Math.random()*2+(-1));
            var posZ=(Math.random()*3000+(-1000));
            var position={x:posX,y:posY,z:posZ}
            this.flyingBirds(id,position)
    }
},
flyingBirds:(id,position)=>{
    var terrainEL=document.querySelector("#terrain")

    var birdEL=document.createElement("a-entity")
    birdEL.setAttribute("id",id)
    birdEL.setAttribute("position",position)
    birdEL.setAttribute("scale",{x:500,y:500,z:500})
    birdEL.setAttribute("gltf-model","./flying_bird/scene.gltf")
    birdEL.setAttribute("animation-mixer",{})
    birdEL.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
    })
    birdEL.setAttribute("game-play",{elementId:`#${id}`})
    terrainEL.appendChild(birdEL)
}
})