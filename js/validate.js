function validatePassword() {
    const password = document.querySelector("[name='password']").value;
    const confirmation = document.querySelector("[name='confirmation']").value;

    if (password !== confirmation) {
        document.querySelectorAll(".alert").forEach((alert) => {
            alert.remove();
        })
        const alert = document.createElement('div');
        alert.textContent = "*Password and confirmation must match.";
        alert.classList.add("alert");

        document.querySelector("[name='confirmation']").parentElement.appendChild(alert);
    } else {
        document.querySelectorAll(".alert").forEach((alert) => {
            alert.remove();
        })
    }
}

document.querySelector("[name='confirmation']").addEventListener("input", validatePassword)
document.querySelector("[name='password']").addEventListener("input", validatePassword)

