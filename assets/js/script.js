/*Main Information*/
document.addEventListener("DOMContentLoaded",
  function () {
    let giFormElement = document.getElementById("gi-form");
    giFormElement.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      let giFormData = e.target;

      /*General Information*/
      const fname = giFormData.fName.value.trim();
      /*Get initial from first name*/
      const fnamei = fname ? fname.charAt(0).toUpperCase() : "";
      document.getElementById("fnamei").value = fnamei;

      const lname = giFormData.lName.value;
      const lnamesu = giFormData.lNameSu.value;
      let email = giFormData.email.value;
      let emailFbk = document.getElementById("emailFbk");


      //SSN
      let ssn = giFormData.ssn.value.replace(/\D/g, "");
      let ssnFbk = document.getElementById("ssnFbk");
      let cssn = giFormData.ssn.value.replace(/\D/g, "");
      let cssnFbk = document.getElementById("ssnFbk");


        function handleInput(inputElem, hiddenId) {
          let raw = document.getElementById(hiddenId).value;
          const lastChar = inputElem.value.slice(-1);

          // Only allow digits
          if (/\d/.test(lastChar) && raw.length < 9) {
            raw += lastChar;
          }

          document.getElementById(hiddenId).value = raw;

          // Build masked display
          let masked = '';
          if (raw.length <= 5) {
            masked = '*'.repeat(raw.length);
          } else {
            masked = '*'.repeat(5) + raw.slice(5);
          }

          // Format ***-**-1234
          if (masked.length > 5) {
            masked = masked.replace(/^(.{3})(.{2})(.{0,4})$/, '$1-$2-$3');
          }

          inputElem.value = masked;

          validateInputs();
        }

        function validateInputs() {
          const ssn = document.getElementById('ssnRaw').value;
          const cssn = document.getElementById('cssnRaw').value;

          if (ssn.length < 9) {
            ssnFbk = 'SSN must be 9 digits.';
            return;
          }

          if (cssn.length < 9) {
            cssnFbk .textContent = 'Confirm SSN must be 9 digits.';
            return;
          }

          if (ssn !== cssn) {
            cssnFbk .textContent = 'SSNs do not match.';
            return;
          }

          ssnFbk .textContent = 'SSNs match!';
        }

          

           












      

      /*Joint Information*/
      const sfname = giFormData.sfName.value.trim();
      /*Get initial from spouse first name*/
      const sfnamei = sfname ? sfname.charAt(0).toUpperCase() : "";
      document.getElementById("sfnamei").value = sfnamei;

      const slname = giFormData.slName.value;
      const slnamesu = giFormData.slNameSu.value;
      const sssn = giFormData.sSsn.value;
      const csssn = giFormData.csSsn.value;
      let sssnFbk = document.getElementById("sssnFbk");
      let csssnFbk = document.getElementById("csssnFbk");
      let semail = giFormData.sEmail.value;
      let sEmailFbk = document.getElementById("sEmailFbk");

      //Spouse SSN
      if (/^\d{9}$/.test(sssn)) {
        sssnFbk.innerText = ``;

        if (/^\d{9}$/.test(csssn)) {
          csssnFbk.innerText = ``;

          //To confirm Taxpayer SSN
          if (sssn !== csssn) {
            //code if ssn doesn't match
            csssnFbk.innerText = `SSN doesn't match`;
          }

        } else {
          csssnFbk.innerText = `9 digits SSN`;
        }

      } else {
        sssnFbk.innerText = `9 digits SSN`;
      }


      /*Mailing Address*/
      //If zipcode doesn't have 5 digits
      let zipcode = giFormData.zipCode.value;
      if (/^\d{5}$/.test(zipcode)) {
        zipcodeFbk.innerText = ``;
        console.log(zipcode);
      } else {
        zipcodeFbk.innerText = `5 digits zipcode`;
      }

      /*Phone Number*/
      let phone = giFormData.phone.value.replace(/\D/g, "");

      if (/^\d{10}$/.test(phone)) {
        phoneFbk.innerText = ``;

        document.getElementById("phone").addEventListener("input", function (e) {
          // Remove all non-digit characters from the input value
          let input = e.target.value.replace(/\D/g, "");

          // Limit to 10 digits
          input = input.substring(0, 10);

          let formattedInput = "";
          if (input.length > 0) {
            formattedInput += "(" + input.substring(0, 3);
          }
          if (input.length > 3) {
            formattedInput += ") " + input.substring(3, 6);
          }
          if (input.length >= 7) {
            formattedInput += "-" + input.substring(6, 10);
          }

          // Set the formatted value back to the input field
          e.target.value = formattedInput;

        });

        const rawPhone = phone;
        const formattedPhone = `(${rawPhone.slice(0, 3)}) ${rawPhone.slice(3, 6)}-${rawPhone.slice(6)}`;
        document.getElementById("phone").value = formattedPhone;

      } else {
        //Phone must have 10 digits
        phoneFbk.innerText = `Must be 10 digits`;
      }

      /*Spouse Phone Number*/
      let sphone = giFormData.sPhone.value.replace(/\D/g, "");

      if (/^\d{10}$/.test(sphone)) {
        sphoneFbk.innerText = ``;

        document.getElementById("sphone").addEventListener("input", function (e) {
          // Remove all non-digit characters from the input value
          let input = e.target.value.replace(/\D/g, "");

          // Limit to 10 digits
          input = input.substring(0, 10);

          let sformattedInput = "";
          if (input.length > 0) {
            sformattedInput += "(" + input.substring(0, 3);
          }
          if (input.length > 3) {
            sformattedInput += ") " + input.substring(3, 6);
          }
          if (input.length >= 7) {
            sformattedInput += "-" + input.substring(6, 10);
          }

          // Set the formatted value back to the input field
          e.target.value = sformattedInput;

        });

        const srawPhone = sphone;
        const sformattedPhone = `(${srawPhone.slice(0, 3)}) ${srawPhone.slice(3, 6)}-${srawPhone.slice(6)}`;
        document.getElementById("sphone").value = sformattedPhone;

      } else {
        //Phone must have 10 digits
        sphoneFbk.innerText = `Must be 10 digits`;
      }




      /*Birth Date*/




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