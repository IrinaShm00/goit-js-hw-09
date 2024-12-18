const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageTextarea = form.querySelector("textarea[name='message']");
function updateFormData(event) {
  const { name, value } = event.target;
  
  formData[name] = value.trim(); 
  localStorage.setItem("feedback-form-state", JSON.stringify(formData)); // хранилище 
}

form.addEventListener("input", updateFormData);
document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("feedback-form-state");
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); //? не уверенна

  // если пустое поле 
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  
  console.log(formData);

  
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  form.reset();
});