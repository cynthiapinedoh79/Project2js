/*Main Information*/
document.addEventListener("DOMContentLoaded",
  function () {
    let myFormElement = document.getElementById("my-form");
    myFormElement.addEventListener("submit", handleSubmit);

    /*General Information*/
    function handleSubmit(e) {
      e.preventDefault();
      let myFormData = e.target;


      const fname = myFormData.fName.value.trim();
      /*Get initial from first name*/
      const fnamei = fname ? fname.charAt(0).toUpperCase() : "";
      document.getElementById("fnamei").value = fnamei;

      const lname = myFormData.lName.value;
      const lnamesu = myFormData.lNameSu.value;
      let email = myFormData.email.value;
      let emailFbk = document.getElementById("emailFbk");



      //SSN
      const ssn = myFormData.ssn.value.replace(/\D/g, "");
      const cssn = myFormData.cssn.value.replace(/\D/g, "");
      let ssnFbk = document.getElementById("ssnFbk");
      let cssnFbk = document.getElementById("cssnFbk");


      if (/^\d{9}$/.test(ssn)) {
        ssnFbk.innerText = '';
        ssnFbk.className = '';
      } else {
        ssnFbk.innerText = 'SSN must be 9 digits.';
        ssnFbk.className = 'error';
      }


      if (/^\d{9}$/.test(cssn)) {
        cssnFbk.innerText = ``;
        cssnFbk.className = '';
      } else {
        cssnFbk.innerText = 'SSN must be 9 digits.';
        cssnFbk.className = 'error';
      }

      const form = document.getElementById('my-form');
      const ssnInput = document.getElementById('ssn');
      const cssnInput = document.getElementById('cssn');

      function getRawSSN(value) {
        return value.replace(/\D/g, '').slice(0, 9);
      }

      function maskSSN(raw) {
        return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
      }

      function validateSSNFields(fromSubmit = false) {
        const ssnRaw = getRawSSN(ssnInput.dataset.raw || '');
        const cssnRaw = getRawSSN(cssnInput.dataset.raw || '');

        // Clear previous messages
        if (!fromSubmit) {
          ssnFbk.innerText = '';
          cssnFbk.innerText = '';
          ssnFbk.className = '';
          cssnFbk.className = '';
        }

        // Individual field validation
        if (ssnRaw.length > 0 && ssnRaw.length < 9) {
          ssnFbk.innerText = 'SSN must be 9 digits.';
          ssnFbk.className = 'error';
        }

        if (cssnRaw.length > 0 && cssnRaw.length < 9) {
          cssnFbk.innerText = 'Confirm SSN must be 9 digits.';
          cssnFbk.className = 'error';
        }

        // Check both are valid length
        if (ssnRaw.length === 9 && cssnRaw.length === 9) {
          if (ssnRaw === cssnRaw) {
            if (!fromSubmit) { // <- only set "Valid SSN" during typing, NOT after submit
              cssnFbk.innerText = 'Valid SSN';
              cssnFbk.className = 'success';
            }
          } else {
            cssnFbk.innerText = 'SSN and confirmation do not match.';
            cssnFbk.className = 'error';
          }


        } else if (cssnRaw.length === 9 && ssnRaw.length !== 9) {
          // Keep showing individual error if one is still incomplete
          cssnFbk.innerText = '';
          cssnFbk.className = '';
        } else if (ssnRaw.length === 9 && cssnRaw.length !== 9) {
          cssnFbk.innerText = '';
          cssnFbk.className = '';
        } else {
          // Neither field ready for comparison: clear compare message
          cssnFbk.innerText = '';
          cssnFbk.className = '';
        }
      }

      // Event listeners for SSN
      ssnInput.addEventListener('focus', () => {
        ssnInput.value = getRawSSN(ssnInput.dataset.raw || '');
      });

      ssnInput.addEventListener('input', () => {
        const raw = getRawSSN(ssnInput.value);
        ssnInput.dataset.raw = raw;
        ssnInput.value = raw;
        validateSSNFields();
      });

      ssnInput.addEventListener('blur', () => {
        const raw = getRawSSN(ssnInput.dataset.raw || '');
        ssnInput.value = maskSSN(raw);
      });

      // Event listeners for Confirm SSN
      cssnInput.addEventListener('focus', () => {
        cssnInput.value = getRawSSN(cssnInput.dataset.raw || '');
      });

      cssnInput.addEventListener('input', () => {
        const raw = getRawSSN(cssnInput.value);
        cssnInput.dataset.raw = raw;
        cssnInput.value = raw;
        validateSSNFields();
      });

      cssnInput.addEventListener('blur', () => {
        const raw = getRawSSN(cssnInput.dataset.raw || '');
        cssnInput.value = maskSSN(raw);
      });

      // Submit handler
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ssnRaw = getRawSSN(ssnInput.dataset.raw || '');
        const cssnRaw = getRawSSN(cssnInput.dataset.raw || '');

        // Clear feedback first
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
          cssnFbk.innerText = '❌ SSN and confirmation do not match.';
          cssnFbk.className = 'error';
          valid = false;
        }

        if (valid) {
          if (cssnFbk.innerText !== '✅ SSN successfully matched.') {
            cssnFbk.innerText = '✅ SSN successfully matched.';
            cssnFbk.className = 'success';
          }
        }

        // Show real-time errors after submit, if needed
        validateSSNFields(true);

        // Remask inputs
        ssnInput.value = maskSSN(ssnRaw);
        cssnInput.value = maskSSN(cssnRaw);
      });




      /*Joint Information*/
      const sfname = myFormData.sfName.value.trim();
      /*Get initial from spouse first name*/
      const sfnamei = sfname ? sfname.charAt(0).toUpperCase() : "";
      document.getElementById("sfnamei").value = sfnamei;

      const slname = myFormData.slName.value;
      const slnamesu = myFormData.slNameSu.value;
      let semail = myFormData.sEmail.value;
      let sEmailFbk = document.getElementById("sEmailFbk");




      //Spouse SSN

      const sssn = myFormData.sSsn.value.replace(/\D/g, "");
      const csssn = myFormData.csSsn.value.replace(/\D/g, "");
      // Spouse SSN Feedback Elements
      let sssnFbk = document.getElementById("sssnFbk");
      let csssnFbk = document.getElementById("csssnFbk");


      if (/^\d{9}$/.test(sssn)) {
        sssnFbk.innerText = ``;
      } else {
        sssnFbk.innerText = 'SSN must be 9 digits.';
        sssnFbk.className = 'error';
      }


      if (/^\d{9}$/.test(csssn)) {
        csssnFbk.innerText = ``;
      } else {
        csssnFbk.innerText = 'SSN must be 9 digits.';
        csssnFbk.className = 'error';
      }

      // Spouse SSN Input Elements
      const sssnInput = document.getElementById('sssn');
      const csssnInput = document.getElementById('csssn');

      // Utility Functions
      function getRawSSN(value) {
        return value.replace(/\D/g, '').slice(0, 9);
      }

      function maskSSN(raw) {
        return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
      }

      // Validation Function
      function validateSSSNFields(fromSubmit = false) {
        const sssnRaw = getRawSSN(sssnInput.dataset.raw || '');
        const csssnRaw = getRawSSN(csssnInput.dataset.raw || '');

        // Clear previous messages
        if (!fromSubmit) {
          sssnFbk.innerText = '';
          csssnFbk.innerText = '';
          sssnFbk.className = '';
          csssnFbk.className = '';
        }

        // Individual field validation
        if (sssnRaw.length > 0 && sssnRaw.length < 9) {
          sssnFbk.innerText = 'SSN must be 9 digits.';
          sssnFbk.className = 'error';
        }

        if (csssnRaw.length > 0 && csssnRaw.length < 9) {
          csssnFbk.innerText = 'Confirm SSN must be 9 digits.';
          csssnFbk.className = 'error';
        }

        // Check both are valid length
        if (sssnRaw.length === 9 && csssnRaw.length === 9) {
          if (sssnRaw === csssnRaw) {
            if (!fromSubmit) { // <- only set "Valid SSN" during typing, NOT after submit
              csssnFbk.innerText = 'Valid Spouse SSN';
              csssnFbk.className = 'success';
            }
          } else {
            csssnFbk.innerText = 'SSN and confirmation do not match.';
            csssnFbk.className = 'error';
          }
        } else if (csssnRaw.length === 9 && sssnRaw.length !== 9) {
          // Keep showing individual error if one is still incomplete
          csssnFbk.innerText = '';
          csssnFbk.className = '';
        } else if (sssnRaw.length === 9 && csssnRaw.length !== 9) {
          csssnFbk.innerText = '';
          csssnFbk.className = '';
        } else {
          // Neither field ready for comparison: clear compare message
          csssnFbk.innerText = '';
          csssnFbk.className = '';
        }

      }

      // Spouse SSN - Input Events
      sssnInput.addEventListener('focus', () => {
        sssnInput.value = getRawSSN(sssnInput.dataset.raw || '');
      });

      sssnInput.addEventListener('input', () => {
        const raw = getRawSSN(sssnInput.value);
        sssnInput.dataset.raw = raw;
        sssnInput.value = raw; // Ensures raw is visible during typing
        validateSSSNFields();
      });

      sssnInput.addEventListener('blur', () => {
        const raw = getRawSSN(sssnInput.dataset.raw || '');
        sssnInput.dataset.raw = raw;
        sssnInput.value = maskSSN(raw);
      });

      // Spouse Confirm SSN - Input Events
      csssnInput.addEventListener('focus', () => {
        csssnInput.value = getRawSSN(csssnInput.dataset.raw || '');
      });

      csssnInput.addEventListener('input', () => {
        const raw = getRawSSN(csssnInput.value);
        csssnInput.dataset.raw = raw;
        csssnInput.value = raw; // Ensures raw is visible during typing
        validateSSSNFields();
      });

      csssnInput.addEventListener('blur', () => {
        const raw = getRawSSN(csssnInput.dataset.raw || '');
        csssnInput.dataset.raw = raw;
        csssnInput.value = maskSSN(raw);
      });

      // Submit handler for Spouse SSNs
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission unless fully valid

        const sssnRaw = sssnInput.dataset.raw || '';
        const csssnRaw = csssnInput.dataset.raw || '';

        // Clear feedback
        sssnFbk.innerText = '';
        csssnFbk.innerText = '';
        sssnFbk.className = '';
        csssnFbk.className = '';

        let sValid = true;

        if (sssnRaw.length !== 9) {
          sssnFbk.innerText = 'SSN must be 9 digits.';
          sssnFbk.className = 'error';
          sValid = false;
        }

        if (csssnRaw.length !== 9) {
          csssnFbk.innerText = 'Confirm SSN must be 9 digits.';
          csssnFbk.className = 'error';
          sValid = false;
        }

        if (sssnRaw.length === 9 && csssnRaw.length === 9 && sssnRaw !== csssnRaw) {
          csssnFbk.innerText = '❌ SSN and confirmation do not match.';
          csssnFbk.className = 'error';
          sValid = false;
        }

        if (sValid) {
          if (csssnFbk.innerText !== '✅ SSN successfully matched.') {
            csssnFbk.innerText = '✅ SSN successfully matched.';
            csssnFbk.className = 'success';
          }
        }

        // Validate again after submit for real-time feedback
        validateSSSNFields(true);

        // Mask values after submit
        sssnInput.value = maskSSN(sssnRaw);
        csssnInput.value = maskSSN(csssnRaw);
      });



      /*Mailing Address*/
      //If zipcode doesn't have 5 digits
      const zipcodeFbk = document.getElementById("zipcodeFbk");

      const zipcode = myFormData.zipCode.value;
      if (/^\d{5}$/.test(zipcode)) {
        zipcodeFbk.innerText = ``;
        console.log(zipcode);
      } else {
        zipcodeFbk.innerText = `Zip Code must be 5 digits.`;
        zipcodeFbk.className = 'error';
      }

      const zipInput = document.getElementById("zipcode");


      zipInput.addEventListener("input", function (e) {
        const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
        e.target.value = input.substring(0, 5); // Limit to 5 digits

        if (/^\d{5}$/.test(input)) {
          zipcodeFbk.innerText = "Valid Zip Code";
          zipcodeFbk.className = 'success';
        } else {
          zipcodeFbk.innerText = "Zip Code must be 5 digits.";
          zipcodeFbk.className = 'error';
        }
      });

      // Example validation on form submit (optional)
      form.addEventListener("submit", function (e) {
        const zipcode = zipInput.value;
        if (!/^\d{5}$/.test(zipcode)) {
          e.preventDefault();
          zipcodeFbk.innerText = "Zip Code must be 5 digits.";
          zipcodeFbk.className = 'error';
        } else {
          zipcodeFbk.innerText = "Valid Zip Code";
          zipcodeFbk.className = 'success';
        }


      });



      /*Phone Number*/
      let phone = myFormData.phone.value.replace(/\D/g, "");
      const phoneInput = document.getElementById("phone");
      const phoneFbk = document.getElementById("phoneFbk");


      if (phone.length < 10) {
        phoneFbk.innerText = `Phone must be 10 digits. Currently: ${phone.length} digits.`;
        phoneFbk.className = "error";
      } else {
        phoneFbk.innerText = "";
        phoneFbk.className = "";
      }

      // Real-time validation
      phoneInput.addEventListener("input", function (e) {
        let input = e.target.value.replace(/\D/g, ""); // Only digits
        input = input.substring(0, 10); // Max 10 digits

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

        e.target.value = formattedInput;

        // Real-time feedback
        if (input.length < 10) {
          phoneFbk.innerText = `Phone must be 10 digits. Currently: ${input.length} digits.`;
          phoneFbk.className = "error";
        } else {
          phoneFbk.innerText = "Valid Phone Number";
          phoneFbk.className = "success";
        }
      });

      // Submit validation
      form.addEventListener("submit", function (e) {
        const input = phoneInput.value.replace(/\D/g, ""); // Always re-read latest value

        if (input.length < 10) {
          e.preventDefault(); // Stop form submission
          phoneFbk.innerText = `Phone must be 10 digits. Currently: ${input.length} digits.`;
          phoneFbk.className = "error";
        } else {
          phoneFbk.innerText = "Valid Phone Number";
          phoneFbk.className = "success";
          // Optional: format again in case user cleared the field
          let formattedInput = `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6, 10)}`;
          phoneInput.value = formattedInput;
        }
      });



      /*Spouse Phone Number*/
      let sphone = myFormData.sPhone.value.replace(/\D/g, "");
      const sphoneInput = document.getElementById("sphone");
      const sphoneFbk = document.getElementById("sphoneFbk");


      // Real-time validation
      sphoneInput.addEventListener("input", function (e) {
        let sInput = e.target.value.replace(/\D/g, ""); // Only digits
        sInput = sInput.substring(0, 10); // Max 10 digits

        let sFormattedInput = "";
        if (sInput.length > 0) {
          sFormattedInput += "(" + sInput.substring(0, 3);
        }
        if (sInput.length > 3) {
          sFormattedInput += ") " + sInput.substring(3, 6);
        }
        if (sInput.length >= 7) {
          sFormattedInput += "-" + sInput.substring(6, 10);
        }

        e.target.value = sFormattedInput;

        // Real-time feedback
        if (sInput.length < 10) {
          sphoneFbk.innerText = `Phone must be 10 digits. Currently: ${sInput.length} digits.`;
          sphoneFbk.className = "error";
        } else {
          sphoneFbk.innerText = "Valid Spouse Phone Number";
          sphoneFbk.className = "success";
        }
      });

      // Submit validation
      form.addEventListener("submit", function (e) {
        const sInput = sPhoneInput.value.replace(/\D/g, ""); // Always re-read latest value

        if (sInput.length < 10) {
          e.preventDefault(); // Stop form submission
          sphoneFbk.innerText = `Phone must be 10 digits. Currently: ${sInput.length} digits.`;
          sphoneFbk.className = "error";
        } else {
          sphoneFbk.innerText = "Valid Spouse Phone Number";
          sphoneFbk.className = "success";
          // Optional: format again in case user cleared the field
          let sFormattedInput = `(${sInput.substring(0, 3)}) ${sInput.substring(3, 6)}-${sInput.substring(6, 10)}`;
          sPhoneInput.value = sFormattedInput;
        }
      });



      /*Birth Date*/



    }

    /*Filing Status and Exemptions*/

            // References to the elements
      const exempYoursef = document.getElementById('exempYoursef');
      const exempSp = document.getElementById('exempSp');
      const nbxc = document.getElementById('nbxc');

      function updateNbxc() {
        let count = 0;
        if (exempYoursef.checked) count++;
        if (exempSp.checked) count++;
        document.getElementById("nbxc").value = count;
      }

      // Listen for changes on the checkboxes
      exempYoursef.addEventListener('change', updateNbxc);
      exempSp.addEventListener('change', updateNbxc);

      // Initialize value when page loads
      updateNbxc();






    /*To border 2px the required input fields after submit that weren't filled*/
    const form = document.getElementById('my-form');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');

  });































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
document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Prevent the default form submission
  const formData = new FormData(this);
  // Create a FormData object from the form
  fetch("/submit-data", {
      method: "POST",
      body: formData,
    })
    // Send the form data to the server
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    // Handle the response from the server
    .catch(error => console.error("Error:", error));
});