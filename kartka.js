import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka" , "backgr.png")
loadSprite("chmurka" , "chm.png")
loadSound("muzyka","muzyczka.mp3")

add([
    sprite("kartka")
])

const chmurka = add([
    sprite("chmurka"),
    pos(0,200),
    
])

let wprawo = true

onUpdate( ()=>{
    if(wprawo && chmurka.pos.x < 600)
    chmurka.pos.x++

    else if (!wprawo && chmurka.pos.x > 50)
    chmurka.pos.x--

    else wprawo ^= true
}
)

onMouseRelease(()=>play("muzyka"))
