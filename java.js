const allCross = document.querySelectorAll('.visiblepannel img');

console.log(allCross);

allCross.forEach(elemet=>{
    elemet.addEventListener('click', function(){
       
        if(this.src.includes('croix')){
            this.src = 'https://c1.klipartz.com/pngpicture/495/70/sticker-png-address-logo-email-advancefee-scam-black-white-m-email-address-company-business-customer.png';
        } else if (this.src.includes('minus')){
            this.src="C:\Users\Eléana\Documents\club avenir\site web\trait.png";
        }
    })
})
