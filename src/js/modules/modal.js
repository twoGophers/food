    function openModal(modalSelector, modalTimerId) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // или modal.classList.toggle('show');
        console.log(modalTimerId)
        if(modalTimerId) {
            clearInterval(modalTimerId);
        }
        clearInterval(modalTimerId);
    }


    //закрытие модалки
    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
        // или modal.classList.toggle('show');
    }

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    //появление модалки
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {closeModal};
export {openModal};