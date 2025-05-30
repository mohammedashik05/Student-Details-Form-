const apiUrl = "https://script.google.com/macros/s/AKfycbwIloeRXxrXLyXBmONP1O2oI8DrYQTODNewojzvBB0MuSB_381QmGnBTFrqs6SOsYn_Nw/exec";

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("name").value,
    rollNumber: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    department: document.getElementById("department").value,
    yearOfStudy: document.getElementById("year").value
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(response => {
    if (response.status === "success") {
      document.getElementById("responseMsg").textContent = "✅ Form submitted successfully!";
      document.getElementById("studentForm").reset();
    } else {
      document.getElementById("responseMsg").textContent = "❌ Submission failed: " + response.message;
    }
  })
  .catch(err => {
    console.error("Submission failed", err);
    document.getElementById("responseMsg").textContent = "❌ Network or server error.";
  });
});
