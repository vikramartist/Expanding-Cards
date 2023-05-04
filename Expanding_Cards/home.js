const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeClasses();
        panel.classList.add('active');
    })
})

function removeClasses(){
    panels.forEach(p=>{
        p.classList.remove('active')
    })
}