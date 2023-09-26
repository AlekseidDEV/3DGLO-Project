const inputValid = () => {
    const inputs = document.querySelectorAll("input");
    const inputPhone = document.querySelectorAll('input[type="tel"]');

    const regExpFunc = (value, nameInput) => {
        const treatment = value.replace(/((^[ \s-]+|[ \s-]+$))/g, "");
        const trim = treatment.replace(/[ ]+/g, " ");
        const upperCase = trim.replace(/( |^)[а-я]/g, (x) => {
            return x.toUpperCase();
        });

        let processVal;

        if (nameInput === "user_name") {
            processVal = upperCase;
        } else {
            processVal = trim;
        }

        return processVal;
    };

    const delLetterError = (val, nameInput) => {
        let deltextVal = val;

        if (nameInput === "user_name") {
            deltextVal = val.replace(/([^а-яА-Я\s-]+)/g, "");
        } else if (nameInput === "user_email") {
            deltextVal = val.replace(/[^-a-zA-Z0-9@_.!~*']/g, "");
        } else if (nameInput === "user_phone") {
            deltextVal = val.replace(/[^-_+0-9()\s]/g, "");
        } else if (nameInput === "user_message") {
            deltextVal = val.replace(/[^-а-яА-Я0-9.,!?\s-]+/g, "");
        }

        return deltextVal;
    };

    const ValueTest = (value, nameInput, elem) => {
        const inputId = document.getElementById(elem.id);
        const textError = document.querySelector(`p[id=${elem.id}]`);

        textError.textContent = "*Не корректные данные";

        const regExpName = /([^а-яА-Я\s-]+)/g;
        const regExpEmail = /[^-a-zA-Z0-9@_.!~*']/g;
        const regExpPhone = /[^-_+0-9()\s]/g;
        const regExpMesage = /[^-а-яА-Я0-9.,!?\s-]+/g;

        let result;
        let totalVal = value;

        if (nameInput === "user_name") {
            result = regExpName.test(value);
        } else if (nameInput === "user_email") {
            result = regExpEmail.test(value);
        } else if (nameInput === "user_phone") {
            result = regExpPhone.test(value);
        } else if (nameInput === "user_message") {
            result = regExpMesage.test(value);
        }

        if (result === true) {
            inputId.classList.add("error_form");
            textError.style.display = "block";
            totalVal = delLetterError(value, nameInput);
        } else if (result === false && elem.value !== "") {
            textError.style.display = "none";
            elem.classList.remove("error_form");
            elem.classList.add("valid_form");
            totalVal = regExpFunc(value, nameInput);
        }
        return totalVal;
    };

    const maskPhone = (e) => {
        let val = e.target.value.replace(/[^-_+0-9()\s]/g, "");
        let codeRegion = val.match(/^\+7\s/);
        const codeSity = val.match(/\b(\d{3})+$/);
        const firstFreeNumber = val.match(/\)\s?\b(\d{3})$/);
        const firstDoubleNumb = val.match(/\b(\d{2})$/);

        console.log(codeSity);

        const maskOption = {
            keydel() {
                if (val.length <= 2) e.target.value = "+7 (";
            },

            keyup() {
                if (codeSity && (codeSity.index === 3 || codeSity.index === 4))
                    e.target.value = codeRegion + "(" + codeSity[1] + ")";
                if (firstFreeNumber && val.length >= 11) {
                    e.target.value =
                        val.slice(0, 8) + " " + firstFreeNumber[1] + "-";
                }
                if (firstDoubleNumb && firstDoubleNumb.index === 13) {
                    e.target.value =
                        val.slice(0, 13) + firstDoubleNumb[0] + "-";
                }
            },
        };

        if (e.key === "Backspace") {
            maskOption.keydel();
        } else {
            maskOption.keyup();
        }
    };

    inputs.forEach((elem) => {
        elem.addEventListener("blur", (e) => {
            if (e.target.name === "user_name") {
                e.target.value = ValueTest(e.target.value, e.target.name, elem);
            } else if (e.target.name === "user_message") {
                e.target.value = ValueTest(e.target.value, e.target.name, elem);
            } else if (e.target.name === "user_phone") {
                e.target.value = ValueTest(e.target.value, e.target.name, elem);
            } else if (e.target.name === "user_email") {
                e.target.value = ValueTest(e.target.value, e.target.name, elem);
            } else if (e.target.classList[0] === "calc-item") {
                e.target.value = regExpFunc(e.target.value).replace(/\D+/g, "");
            }
        });
    });

    inputPhone.forEach((input) => {
        input.addEventListener(
            "click",
            () => {
                input.value = "+7 ";
            },
            { once: true }
        );
        input.addEventListener("keydown", maskPhone);
    });
};

export default inputValid;
