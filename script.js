const passInput       = document.querySelector(".pass-field input")
const eyeIcon         = document.querySelector(".pass-field i")
const requirementList = document.querySelectorAll(".requirements-list")

const requirementsList = [
    {regex: /^(?=.{8,})/, satisfied: false},
    {regex: /^(?=.*[0-9])/, satisfied: false},
    {regex: /^(?=.*[a-z])/, satisfied: false},
    {regex: /[^A-Za-z0-9]/, satisfied: false},
    {regex: /^(?=.*[A-Z])/, satisfied: false},
]

passInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value

    requirementsList.forEach((item, index) => {
        const isValid = item.regex.test(inputValue)
        item.satisfied = isValid

        const requirementItem = document.getElementsByClassName("requirements-list")[0].children[index]
        const iconElement = requirementItem.querySelector("i")

        if (isValid) {
            iconElement.className = "fa-solid fa-check"
        } else {
            iconElement.className = "fa-solid fa-circle"
        }
    });
});

eyeIcon.addEventListener("click", () => {
    passInput.type    = passInput.type == "password" ? "text" : "password"
    eyeIcon.className = `fa-solid fa-eye${passInput.type == "password" ? "" : "-slash"}`
})
