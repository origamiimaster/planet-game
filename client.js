function init(){
    let canvas = document.getElementById("canvas")
    canvas.height = window.innerHeight - 0
    canvas.width = window.innerWidth - 200
    window.addEventListener('resize',(e)=>{
        canvas.height = window.innerHeight - 0
        canvas.width = window.innerWidth - 200
    })
    
}
init()