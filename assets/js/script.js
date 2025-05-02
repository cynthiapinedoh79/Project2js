/*Main Information*/
document.addEventListener("DOMContentLoaded",
function(){
  let giFormElement=document.getElementById("gi-form");
  giFormElement.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      let giFormData = e.target;

      /*General Information*/
      const fname = giFormData.fName.value.trim();
      const lname = giFormData.lName.value;
      const lnamesu = giFormData.lNameSu.value;
      const ssn = giFormData.ssn.value;
      let ssnFbk = document.getElementById ("ssnFbk");
      let email = giFormData.email.value;
      let emailFbk = document.getElementById ("emailFbk");



      if (ssn.toString().lenght !== 9){
        //code if snn doesn't have 9 digits
        ssnFbk.innerText =`${fname} your SSN should be 9 digits`
      }

      function isValidEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      if (!isValidEmail(email)){
        emailFbk.innerText =`Invalid email`
      }


      /*Joint Information*/
      const sfname = giFormData.sfName.value;
      const sfnamei = giFormData.fNameI.value;
      const slname = giFormData.lName.value;
      let slnamesu = giFormData.lNameSu.value;
      const sssn = giFormData.sSsn.value;
      let sssnFbk = document.getElementById ("sSsnFbk");
      let semail = giFormData.sEmail.value;
      let sEmailFbk = document.getElementById ("sEmailFbk");

      if (ssn.toString().lenght !== 2){
        //code if snn doesn't have 2 letters
        sfnameFbk.innerText =`Name must contain at least 2 letters`
      }

      if (sssn.toString().lenght !== 9){
        //code if snn doesn't have 9 digits
        ssnFbk.innerText =`${sfname} your SSN should be 9 digits`
      }

      function isValidSEmail(semail){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(semail);
      }
      if (!isValidSEmail(semail)){
        semailFbk.innerText =`Invalid email`
      } 

      /*Mailing Address*/
      let zipcode = giFormData.zipCode.value;
      if (zipcode.toString().lenght !== 5){
        //code if snn doesn't have 5 digits
        zipcodeFbk.innerText =`Zip Code must have 5 digits`
      }

      /*Phone Number*/
      let phone = giFormData.phone.value;
      if (phone.toString().lenght !== 10){
        //Phone must have 10 digits
        phoneFbk.innerText =`Phone number must have 5 digits`
      }

      let sphone = giFormData.phone.value;
      if (sphone.toString().lenght !== 10){
        //Phone must have 10 digits
        sphoneFbk.innerText =`Phone number must have 5 digits`
      }

      /*Birth Date*/
      function isYoungerThan18(dob){

        const tdob = new Date (dob);
        const today = new Date ();

        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();

        if(age < 18 || (age ===18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff <= 0)))
        )
          {
            return true;
          }
          return false
      }
  
      if (isYoungerThan18(dob)) {
        dobFbk.innerText =`${fname} you are not older than 18`
      }

    }











  }
);





























/*Attach SSN to the form*/
const ssnPhotoInput = document.getElementById("ssnPhoto");
const ssnPreviewImage = document.getElementById("ssnPreview");

ssnPhotoInput.addEventListener("change", function (event) {
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
});

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
});

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

