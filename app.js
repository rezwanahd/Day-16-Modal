// get elements

const button = document.getElementById('apply');
const modal = document.querySelector('.rz-modal');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const alert = document.querySelector('.rz-alert');
const keep = document.querySelector('#keep');
const discard = document.getElementById('discard');

button.addEventListener('click', function(){
    
    modal.classList.add('active');
    
     
})

close.addEventListener('click', function(){
    
    modal.classList.remove('active');
     
})

modal.addEventListener('click', function(e){
    
    if(e.target == this){

        modal.classList.remove('active');

    }
  
})

close.addEventListener('click', function() {

    alert.classList.add('active');
    modal.classList.add('active');
    
})

keep.addEventListener('click', function () {
  
    alert.classList.remove('active');
})

keep.addEventListener('click', function () {
  
    alert.classList.remove('active');
})

discard.addEventListener('click', function () {
  
    alert.classList.remove('active');
    modal.classList.remove('active');
})