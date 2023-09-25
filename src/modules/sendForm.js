const sendForm = ({ formId, someElem }) => {
    const formBlock = document.getElementById(formId);
    const downloadRequest = `<img src="./images/preloader.gif" alt="gif">`;
    const succesRequest = "Данные успешно отправлены!";
    const errorRequest = "Ошибка отправки формы!";

    const preloader = document.createElement("div");
    formBlock.append(preloader);

    const sendFormServ = data => fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(r => r.json());

    const validate = inputs => {
        let succes = true;
        inputs.forEach(input => {
            if (input.value === "") {
                succes = false;
            }
        });

        return succes;
    };

    const dataPreporation = () => {
        const formElements = formBlock.querySelectorAll("input");
        const popupContent = document.querySelector('.popup-content')
        
        preloader.innerHTML = downloadRequest;
        preloader.style.marginTop = '20px'
        preloader.style.marginBottom = '20px'
        popupContent.style.height = '450px'

        const formData = new FormData(formBlock);
        const formBody = {};

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendFormServ(formBody)
                .then(() => {
                    preloader.textContent = succesRequest;
                    preloader.style.color = 'white';
                    preloader.style.zIndex = '1';
                    setTimeout(() => {
                        formBlock.removeChild(preloader);
                        popupContent.style.height = '382px'
                    }, 3000);
                })
                .then(() => {
                    formElements.forEach(input => {
                        input.value = "";
                    });
                })
                .catch(() => {
                    preloader.textContent = errorRequest;
                });
        } else {
            alert("заполните все поля!");
        }
    };

    dataPreporation();
};

export default sendForm;
