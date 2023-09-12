import { animate } from "./helper";

const modal = () => {
  const modal = document.querySelector(".popup");

  document.addEventListener("click", (e) => {
    if (e.target.classList[2] === "popup-btn") {
      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.transform = `translateX(${100 * progress - 100}%)`;
        },
      });
    } else if (
      e.target.className === "popup-close" ||
      e.target.className === "popup"
    ) {
      animate({
        duration: 300,
        timing(timeFraction) {
            return timeFraction
        },
        draw(progress) {
          modal.style.transform = `translateX(${100 * progress}%)`;
        },
      });
    }
  });
};

export default modal;
