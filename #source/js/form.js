let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validation(event.currentTarget)) {
        alert("Success");
    }
});

function validation(form) {
    const createErrorElement = (input, text) => {
        const parentInput = input.parentNode;
        parentInput.classList.add("form__input_error");

        const elementError = document.createElement("p");
        elementError.classList.add("error-text");
        elementError.textContent = text;
        parentInput.append(elementError);
    }

    const removeErrorElement = (input) => {
        const parentInput = input.parentNode;
    
        if (parentInput.classList.contains("form__input_error")) {
            parentInput.classList.remove("form__input_error")
            parentInput.querySelector(".error-text").remove();
        }
        parentInput.querySelectorAll(".error-text")
    }

    let result = true;
    let inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        removeErrorElement(input);
        
        if (!input.value) {
            createErrorElement(input, "Empty field!");
            result = false;
        }
    });

    return result;
}