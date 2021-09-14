document.addEventListener("DOMContentLoaded",e=>{
    scrollButton(".toscroll");
    document.addEventListener("click",(e)=>{
        //console.log(e)
        if(e.target.matches('#ocultar *')){
            console.log("ocultarrr")
            console.log(e.target)
            togleview(".menu")
        }
        if(e.target.matches('.menu *')){
            document.querySelector('.menu').classList.remove("is-active")
            document.querySelector('.arriba').classList.add("none")
            document.querySelector('.abajo').classList.remove("none")
        }
    })
    
})

function togleview(clase){
    let ban=document.querySelector(clase).classList.toggle("is-active")
    if(ban){
        document.querySelector(clase).classList.add("is-active")
        document.querySelector('.abajo').classList.add("none")
        document.querySelector('.arriba').classList.remove("none")
        
    }else{
        document.querySelector(clase).classList.remove("is-active")
        document.querySelector('.arriba').classList.add("none")
        document.querySelector('.abajo').classList.remove("none")
    }
    
}
function scrollButton(btn){
    const $scrollBtn=document.querySelector(btn);

    document.addEventListener ("scroll", e=>{
        let scrollTop=document.documentElement.scrollTop;
        if(scrollTop>600)
        {
            $scrollBtn.classList.remove("vieworhidd");
        }else{
            $scrollBtn.classList.add("vieworhidd");
            
        }
    });
    window.addEventListener ("click", e=>{
        if(e.target.matches(btn)){
            window.scrollTo({behavior:"smooth",top:0});
        }
    })
}