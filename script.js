'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);
console.log(btnCloseModal);


const openModal =  function(){
    console.log('button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');       

}; 


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
 };


 for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', openModal);
};


btnCloseModal.addEventListener('click', closeModal );

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        
            closeModal();
        
            
}

})




