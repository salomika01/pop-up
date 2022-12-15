const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-btn]');
const overlay =document.getElementById('overlay');

openModalBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
    const modal = document.querySelector(btn.dataset.modalTarget)    
    openModal(modal)
   
})
})


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  


closeModalBtn.forEach(btn => {
    btn.addEventListener('click',() =>{
    const modal = btn.closest('.modal')
    closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}




