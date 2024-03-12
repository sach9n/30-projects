const panel = document.querySelectorAll('.panel');

panel.forEach((image)=>{
  image.addEventListener('click',()=>{
    removeActiveClass();
    image.classList.add('active');
  })
})

function removeActiveClass(){
  panel.forEach(image =>{
    image.classList.remove('active');
  })
}