const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const btnPopupClose = modal.querySelector(".popup-close");

  const stopScreenAnimate = modal.clientWidth;

  let animateModal;
  let count = -100;

  const openModalWindow = () => {
    count++;
    animateModal = requestAnimationFrame(openModalWindow);

    if (count <= 0) {
      modal.style.transform = `translateX(${count * 15}px)`;
    } else {
      cancelAnimationFrame(animateModal);
    }
  };

  popupBtn.forEach((button) => {
    button.addEventListener("click", openModalWindow);
  });

  const closeModal = () => {
    console.log("закрытие");
  };

  btnPopupClose.addEventListener("click", closeModal);

  //   modal.addEventListener("click", (e) => {
  //     if (e.target.className === "popup") openModalWindow();
  //   });
};

export default modal;
