const inputValid = () => {
  const selectForm = document.querySelector(".calc-item.calc-type");
  const inputsValid = document.querySelectorAll("input[id]");
  const inputSquare = document.querySelector(".calc-item.calc-square");
  const inputCalc = document.querySelector(".calc-item.calc-count");
  const inputCalcDay = document.querySelector(".calc-item.calc-day");

  inputsValid.forEach((input) => {
    const validInput = (e) => {
      if (e.target.name === "user_name" || e.target.name === "user_message") {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]+/g, "");
      } else if (e.target.name === "user_email") {
        e.target.value = e.target.value.replace(/[^-a-zA-Z@_.!~*']/g, "");
      } else if (e.target.name === "user_phone") {
        e.target.value = e.target.value.replace(/[^-0-9()]/g, "");
      }
    };

    input.addEventListener("input", validInput);
  });

  const cleanInput = (value) => {
    if (value === "1" || value === "2" || value === "3") {
      inputSquare.value = "";
      inputCalc.value = "";
      inputCalcDay.value = "";
    }
  };

  inputSquare.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/^\D/g, "");
  });
  inputCalc.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/^\D/g, "");
  });
  inputCalcDay.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/^\D/g, "");
  });

  selectForm.addEventListener("change", (e) => {
    cleanInput(e.target.value);
  });
};

export default inputValid;
