const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const btnPopupClose = modal.querySelector(".popup-close");

  const closePositionModal = modal.getBoundingClientRect().left
  let animateModal
  let count = closePositionModal

  const openModalWindow = () => {
    count++
        animateModal = requestAnimationFrame(openModalWindow)

        if(count <= 0){
            modal.style.transform = `translate(${count}px)` 
        } else {
            cancelAnimationFrame(animateModal)
        }
  };

  popupBtn.forEach((button) => {
    button.addEventListener("click", openModalWindow);
  });

  
//   btnPopupClose.addEventListener("click", openModalWindow);

//   modal.addEventListener("click", (e) => {
//     if (e.target.className === "popup") openModalWindow();
//   });
};

export default modal;
