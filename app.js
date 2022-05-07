document.getElementById('contact').onclick = openContact
function openContact(){
    document.getElementById('modalContact')
        .style.display = 'flex'
}
document.getElementById('close-contact').onclick = ()=>{
    document.getElementById('modalContact')
        .style.display = 'none'
}
document.getElementById("fw").onclick = modalFw
function modalFw(){
    document.getElementById('modalFw')
        .style.display = 'flex'
}
document.getElementById('closeFw').onclick = ()=>{
    document.getElementById('modalFw')
        .style.display = 'none'
}
function hamburgerHandler(menuPosition){
    document
        .querySelector('.mobile-nav')
        .style
        .right = menuPosition + 'px'
}
document
    .getElementById('mobileBtn')
    .onclick = ()=> hamburgerHandler(0)

    function closeMobile(){
        setTimeout(()=>{hamburgerHandler(-400)}, 1000)
        
    }

document.getElementById('mobile-contact').onclick = openContact