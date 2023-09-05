const inputValid = () => {
  const inputs = document.querySelectorAll("input");

  const getRegExp = (value) => {
    const treatment = value.replace(/((^[ \s-]+|[ \s-]+$))/g, "");
    const trim = treatment.replace(/[ ]+/g, " ");
    const upperCase = trim.replace(/( |^)[а-я]/g, (x) => {
      return x.toUpperCase();
    });

    return { treatment, trim, upperCase };
  };
  inputs.forEach((elem) => {
    elem.addEventListener("blur", (e) => {
      if (e.target.name === "user_name") {
        e.target.value = getRegExp(e.target.value).upperCase.replace(
          /([^а-яА-Я\s-]+)/g, "");
      } else if (e.target.name === "user_message") {
        e.target.value = getRegExp(e.target.value).trim.replace(
          /[^-а-яА-Я0-9.,!?\s-]+/g, "");
      } else if (e.target.name === "user_phone") {
        e.target.value = getRegExp(e.target.value).trim.replace(
          /[^-0-9()]/g, "");
      } else if (e.target.name === "user_email") {
        e.target.value = getRegExp(e.target.value).trim.replace(
          /[^-a-zA-Z0-9@_.!~*']/g, "");
      } else if (e.target.classList[0] === "calc-item") {
        e.target.value = getRegExp(e.target.value).trim.replace(/\D+/g, "");
      }
    });
  });
};

export default inputValid;
