const faq = document.querySelectorAll('.container');

faq.forEach(faqs =>{
    const icon = faqs.querySelector('.icon');
    const answer = faqs.querySelector('#Answer');

    faqs.addEventListener('click', ()=>{

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})