const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const btnPopupClose = modal.querySelector(".popup-close");

  const openModalWindow = () => {
    if (!modal.style.display) {
      modal.style.display = "block";
    } else {
      modal.style.display = "";
    }
  };

  popupBtn.forEach((button) => {
    button.addEventListener("click", openModalWindow);
  });

  btnPopupClose.addEventListener("click", openModalWindow);

  modal.addEventListener("click", (e) => {
    if (e.target.className === "popup") openModalWindow();
  });
};

export default modal;
