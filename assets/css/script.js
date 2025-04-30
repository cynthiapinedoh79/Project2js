





































/*Attach SSN to the form*/
const ssnPhotoInput = document.getElementById("ssnPhoto");
const ssnPreviewImage = document.getElementById("ssnPreview");

nssPhotoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  /*Get the selected file*/
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      ssnPreviewImage.src = e.target.result;
    };
    ssnPreviewImage.style.display = "block";
    //Show the image preview
    reader.readAsDataURL(file);
    //Read the file as a data URL (base64)
  }
}
);

/*Attach ID to the form*/
const idPhotoInput = document.getElementById("idPhoto");
const idPreviewImage = document.getElementById("idPreview");

idPhotoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  /*Get the selected file*/
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      idPreviewImage.src = e.target.result;
    };
    idPreviewImage.style.display = "block";
    //Show the image preview
    reader.readAsDataURL(file);
    //Read the file as a data URL (base64)
  }
}
);

/*Save forms*/
document.getElementById("gi-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Prevent the default form submission
  const giData = new giData(this);
  // Create a FormData object from the form
  fetch("/submit-data", {
    method: "POST",
    body: giData,
  })
    // Send the form data to the server
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    // Handle the response from the server
    .catch(error => console.error("Error:", error));
});

document.getElementById("tpi-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Prevent the default form submission
  const tpiData = new tpiData(this);
  // Create a FormData object from the form
  fetch("/submit-data", {
    method: "POST",
    body: tpiData,
  })
    // Send the form data to the server
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    // Handle the response from the server
    .catch(error => console.error("Error:", error));
});

document.getElementById("fsae").addEventListener("submit", function (event) {
  event.preventDefault();
  // Prevent the default form submission
  const fsaeData = new fsaeData(this);
  // Create a FormData object from the form
  fetch("/submit-data", {
    method: "POST",
    body: fsaeData,
  })
    // Send the form data to the server
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    // Handle the response from the server
    .catch(error => console.error("Error:", error));
});

