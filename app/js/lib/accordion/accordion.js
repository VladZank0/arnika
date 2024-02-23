(function(){
    let btn = document.querySelectorAll('.accordion-btn');

    btn.forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let content =  event.target.nextElementSibling;
            
            if(content.style.maxHeight){
                event.target.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;
            }else{
                event.target.classList.add('accordion-btn_active');
                content.style.maxHeight = content.scrollHeight + "px";  
                e.classList.add('accordion-btn_active');
            }   
        })
    })
}())