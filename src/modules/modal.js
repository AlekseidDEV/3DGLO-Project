const modal = () => {
    const modal = document.querySelector(".popup");

    let animateModal;
    let count = -50;

    const openModalWindow = () => {
        count++;
        animateModal = requestAnimationFrame(openModalWindow);

        if (count <= 0 && innerWidth >= 768) {
            modal.style.transform = `translateX(${count * 2}%)`;
        } else {
            cancelAnimationFrame(animateModal);
            count = -50;
        }
    };

    const closeModal = () => {
        modal.style.transform = "translateX(-100%)";
    };

    document.addEventListener('click', (e) => {
        if(e.target.classList[2] === "popup-btn"){
            openModalWindow()
        } else if(e.target.className === 'popup-close' || e.target.className === 'popup'){
            closeModal()
        }
    })
};

export default modal;
