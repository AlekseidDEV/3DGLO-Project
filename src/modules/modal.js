const modal = () => {
    const popupBtn = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const btnPopupClose = modal.querySelector(".popup-close");

    let animateModal;
    let count = -100;

    const openModalWindow = () => {
        count++;
        animateModal = requestAnimationFrame(openModalWindow);

        if (count <= 0 && innerWidth >= 768) {
            modal.style.transform = `translateX(${count * 15}px)`;
        } else {
            cancelAnimationFrame(animateModal);
            count = -100;
        }
    };

    const closeModal = e => {
        if (e.target.className === "popup-close") {
            modal.style.transform = "translateX(-100%)";
        } else if (e.target.className === "popup") {
            modal.style.transform = "translateX(-100%)";
        }
    };

    popupBtn.forEach(button => {
        button.addEventListener("click", openModalWindow);
    });

    btnPopupClose.addEventListener("click", closeModal);

    modal.addEventListener("click", closeModal);
};

export default modal;
