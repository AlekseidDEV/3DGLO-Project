import { animate } from "./helper";
const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCcount = document.querySelector(".calc-count");
  const calcCday = document.querySelector(".calc-day");
  const totulSum = document.getElementById("total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;

    let calcCcountValue = 1;
    let calcCdayValue = 1;

    if (calcCcount.value > 1) {
      calcCcountValue += calcCcount.value / 10;
    }

    if (calcCday.value < 5 && calcCday.value) {
      calcCdayValue = 2;
    } else if (calcCday.value < 10 && calcCday.value) {
      calcCdayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price *
        calcTypeValue *
        calcSquareValue *
        calcCcountValue *
        calcCdayValue;

        animate({
          duration: 300, 
          timing(timeFraction){
            return timeFraction
          },
          draw(progress){
            totulSum.textContent = Math.floor(progress * totalValue)
          }
        })
    } else {
      totalValue = 0;
    }
  };

  calcBlock.addEventListener("change", countCalc);
};

export default calc;
