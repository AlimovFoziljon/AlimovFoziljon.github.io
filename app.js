document.getElementById('contact').onclick = openContact
function openContact(){
    document.getElementById('modalContact')
        .style.display = 'flex'
}
document.getElementById('close-contact').onclick = ()=>{
    document.getElementById('modalContact')
        .style.display = 'none'
}
document.getElementById('mobileBtn').onclick = ()=>{
    document.getElementById('modalMobile')
        .style.display = 'flex'
}
document.getElementById('closeMobile').onclick = closeMobile
function closeMobile(){
    document.getElementById('modalMobile')
        .style.display = 'none'
}