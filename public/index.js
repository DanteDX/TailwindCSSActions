const hideButton = document.querySelector('#hideButton');
const hiddenContent = document.querySelector('#hiddenContent');

hideButton.addEventListener('click',() =>{
    if(hiddenContent.classList.contains('hidden')){
        hiddenContent.classList.remove('hidden');
    }else{
        hiddenContent.classList.add('hidden');
    }
});