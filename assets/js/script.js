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
      const ssn = giFormData.ssn.value.replace(/\D/g, "");
      let ssnFbk = document.getElementById("ssnFbk");
      const cssn = giFormData.ssn.value.replace(/\D/g, "");
      let cssnFbk = document.getElementById("cssnFbk");


      
      
      

      
          
            const form = document.getElementById('gi-form');
            const ssnInput = document.getElementById('ssn');
            const cssnInput = document.getElementById('cssn');
      
            function getRawSSN(value) {
              return value.replace(/\D/g, '').slice(0, 9);
            }
      
            function maskSSN(raw) {
              return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
            }
      
            ssnInput.addEventListener('focus', () => {
              ssnInput.value = getRawSSN(ssnInput.dataset.raw || '');
            });
      
            ssnInput.addEventListener('input', () => {
              const raw = getRawSSN(ssnInput.value);
              ssnInput.dataset.raw = raw;
              ssnInput.value = raw;
            });
      
            ssnInput.addEventListener('blur', () => {
              const raw = getRawSSN(ssnInput.dataset.raw || '');
              ssnInput.value = maskSSN(raw);
            });
      
            cssnInput.addEventListener('focus', () => {
              cssnInput.value = getRawSSN(cssnInput.dataset.raw || '');
            });
      
            cssnInput.addEventListener('input', () => {
              const raw = getRawSSN(cssnInput.value);
              cssnInput.dataset.raw = raw;
              cssnInput.value = raw;
            });
      
            cssnInput.addEventListener('blur', () => {
              const raw = getRawSSN(cssnInput.dataset.raw || '');
              cssnInput.value = maskSSN(raw);
            });
      
            form.addEventListener('submit', (e) => {
              e.preventDefault();
      
              const ssnRaw = getRawSSN(ssnInput.dataset.raw || '');
              const cssnRaw = getRawSSN(cssnInput.dataset.raw || '');
      
              ssnFbk.innerText = '';
              cssnFbk.innerText = '';
              ssnFbk.className = '';
              cssnFbk.className = '';
      
              let valid = true;
      
              if (ssnRaw.length !== 9) {
                ssnFbk.innerText = 'SSN must be 9 digits.';
                ssnFbk.className = 'error';
                valid = false;
              }
      
              if (cssnRaw.length !== 9) {
                cssnFbk.innerText = 'Confirm SSN must be 9 digits.';
                cssnFbk.className = 'error';
                valid = false;
              }
      
              if (ssnRaw.length === 9 && cssnRaw.length === 9 && ssnRaw !== cssnRaw) {
                cssnFbk.innerText = 'SSN and confirmation do not match.';
                cssnFbk.className = 'error';
                valid = false;
              }
      
              if (valid) {
                cssnFbk.innerText = 'SSN successfully matched.';
                cssnFbk.className = 'success';
              }
      
              // Re-mask after validation
              ssnInput.value = maskSSN(ssnRaw);
              cssnInput.value = maskSSN(cssnRaw);
            });

      

      

      

      

      
      

      
      

          

           












      

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