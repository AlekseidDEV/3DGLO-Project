const inputValid = () => {
  const select = document.querySelector(".calc-item.calc-type");
  const inputSquare = document.querySelector(".calc-item.calc-square");
  const inputCalc = document.querySelector(".calc-item.calc-count");
  const inputCalcDay = document.querySelector(".calc-item.calc-day");

  const validInput = (e) => {
    const calcInput = e.target.classList[0];
    const userInfoInput = e.target.name;
    if (userInfoInput === "user_name" || userInfoInput === "user_message") {
      e.target.value = e.target.value.replace(/[^а-яА-Я\s-]+/g, "");
    } else if (userInfoInput === "user_email") {
      e.target.value = e.target.value.replace(/[^-a-zA-Z@_.!~*']/g, "");
    } else if (userInfoInput === "user_phone") {
      e.target.value = e.target.value.replace(/[^-0-9()]/g, "");
    } else if (calcInput === "calc-item") {
      e.target.value = e.target.value.replace(/^\D/g, "");
    }
  };

  const cleanInput = (value) => {
    if (value === "1" || value === "2" || value === "3") {
      inputSquare.value = "";
      inputCalc.value = "";
      inputCalcDay.value = "";
    }
  };

  document.addEventListener("input", validInput);
  select.addEventListener("change", (e) => {
    if (e.target.nodeName === "SELECT") {
      cleanInput(e.target.value);
    }
  });
};

export default inputValid;
