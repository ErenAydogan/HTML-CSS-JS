const accordion = document.querySelectorAll('.contentBx') ; 

accordion.forEach(acc => {
    acc.addEventListener('click', function(){
        this.classList.toggle('active'); 
    })
})