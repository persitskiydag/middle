const modal = () => {
    const buttons = document.querySelectorAll('.btn-block')
    const modal = document.querySelector('.header-modal')
    const closeBtn = modal.querySelector('.header-modal__close')
    const ovelray = document.querySelector('.overlay')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            ovelray.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        ovelray.style.display = 'none'
    })
}

export default modal