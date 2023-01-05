const openModal = document.getElementById('openModal')

const wrapper = document.querySelector('.modal-wrapper')

openModal.onclick = function () {
    wrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function (e) {
    const keyEsc = e.key === 'Escape'

    if (keyEsc && !wrapper.classList.contains('invisible')) {
        wrapper.classList.add('invisible')
    }

})