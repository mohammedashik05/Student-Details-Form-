const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScuiyHi7L8DMj2RgyF39643saKaO2ZauobRB-jU51gAxBrF_Q/formResponse";

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("entry.2005620554", document.getElementById("name").value);         // Full Name
  formData.append("entry.1045781291", document.getElementById("roll").value);         // Roll Number
  formData.append("entry.1065046570", document.getElementById("email").value);        // Email
  formData.append("entry.1166974658", document.getElementById("department").value);   // Department
  formData.append("entry.839337160", document.getElementById("year").value);          // Year of Study

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(() => {
    document.getElementById("responseMsg").textContent = "✅ Form submitted successfully!";
    document.getElementById("studentForm").reset();
  })
  .catch(() => {
    document.getElementById("responseMsg").textContent = "❌ Submission failed.";
  });
});
