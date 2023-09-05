const inputValid = () => {
  const inputs = document.querySelectorAll("input");
  const select = document.querySelector(".calc-item.calc-type");
  const inputSquare = document.querySelector(".calc-item.calc-square");
  const inputCalc = document.querySelector(".calc-item.calc-count");
  const inputCalcDay = document.querySelector(".calc-item.calc-day");

  inputs.forEach((elem) => {
    elem.addEventListener("blur", (e, treatment, trim, upperCase) => {
      treatment = e.target.value.replace(/((^[ \s-]+|[ \s-]+$))/g, "");
      trim = treatment.replace(/[ ]+/g, " ");
      upperCase = trim.replace(/( |^)[а-я]/g, (x) => {
        return x.toUpperCase();
      });

      if (e.target.name === "user_name") {
        e.target.value = upperCase.replace(/([^а-яА-Я\s-]+)/g, "");
      } else if (e.target.name === "user_message") {
        e.target.value = trim.replace(/[^а-яА-Я\s-]+/g, "");
      } else if (e.target.name === "user_phone") {
        e.target.value = trim.replace(/[^-0-9()]/g, "");
      } else if (e.target.name === "user_email") {
        e.target.value = trim.replace(/[^-a-zA-Z@_.!~*']/g, "");
      } else if (e.target.classList[0] === "calc-item") {
        e.target.value = trim.replace(/\D+/g, "");
      }
    });
  });

  const cleanInput = (value) => {
    if (value === "1" || value === "2" || value === "3") {
      inputSquare.value = "";
      inputCalc.value = "";
      inputCalcDay.value = "";
    }
  };

  select.addEventListener("change", (e) => {
    if (e.target.nodeName === "SELECT") {
      cleanInput(e.target.value);
    }
  });
};

export default inputValid;
