/* jshint esversion: 6 */


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
      function getRawSSSN(value) {
        return value.replace(/\D/g, '').slice(0, 9);
      }

      function maskSSSN(raw) {
        return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
      }

      // Validation Function
      function validateSSSNFields(fromSubmit = false) {
        const sssnRaw = getRawSSSN(sssnInput.dataset.raw || '');
        const csssnRaw = getRawSSSN(csssnInput.dataset.raw || '');

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
        sssnInput.value = getRawSSSN(sssnInput.dataset.raw || '');
      });

      sssnInput.addEventListener('input', () => {
        const raw = getRawSSSN(sssnInput.value);
        sssnInput.dataset.raw = raw;
        sssnInput.value = raw; // Ensures raw is visible during typing
        validateSSSNFields();
      });

      sssnInput.addEventListener('blur', () => {
        const raw = getRawSSSN(sssnInput.dataset.raw || '');
        sssnInput.dataset.raw = raw;
        sssnInput.value = maskSSN(raw);
      });

      // Spouse Confirm SSN - Input Events
      csssnInput.addEventListener('focus', () => {
        csssnInput.value = getRawSSSN(csssnInput.dataset.raw || '');
      });

      csssnInput.addEventListener('input', () => {
        const raw = getRawSSN(csssnInput.value);
        csssnInput.dataset.raw = raw;
        csssnInput.value = raw; // Ensures raw is visible during typing
        validateSSSNFields();
      });

      csssnInput.addEventListener('blur', () => {
        const raw = getRawSSSN(csssnInput.dataset.raw || '');
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
        sssnInput.value = maskSSSN(sssnRaw);
        csssnInput.value = maskSSSN(csssnRaw);
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
      let sphone = myFormData.phone.value.replace(/\D/g, "");
      const sphoneInput = document.getElementById("sphone");
      const sphoneFbk = document.getElementById("sphoneFbk");


      if (phone.length < 10) {
        sphoneFbk.innerText = `Phone must be 10 digits. Currently: ${sphone.length} digits.`;
        sphoneFbk.className = "error";
      } else {
        sphoneFbk.innerText = "";
        sphoneFbk.className = "";
      }

      // Real-time validation
      sphoneInput.addEventListener("input", function (e) {
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
          sphoneFbk.innerText = `Phone must be 10 digits. Currently: ${input.length} digits.`;
          sphoneFbk.className = "error";
        } else {
          sphoneFbk.innerText = "Valid Phone Number";
          sphoneFbk.className = "success";
        }
      });

      // Submit validation
      form.addEventListener("submit", function (e) {
        const input = sphoneInput.value.replace(/\D/g, ""); // Always re-read latest value

        if (input.length < 10) {
          e.preventDefault(); // Stop form submission
          sphoneFbk.innerText = `Phone must be 10 digits. Currently: ${input.length} digits.`;
          sphoneFbk.className = "error";
        } else {
          sphoneFbk.innerText = "Valid Phone Number";
          sphoneFbk.className = "success";
          // Optional: format again in case user cleared the field
          let formattedInput = `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6, 10)}`;
          sphoneInput.value = formattedInput;
        }
      });



      /*Birth Date*/



    }
    /*Taxpayer Information*/


    /*Presidential Election Campain*/
    document.getElementById("my-form").addEventListener("submit", function (e) {
      const filingJoint3 = document.getElementById("filingJoint3");
      const filingJoint3Sp = document.getElementById("filingJoint3Sp");
      const filingJoint3Fbk = document.getElementById("filingJoint3Fbk");
      const pec = document.getElementById("pec");

      // Clear previous state
      filingJoint3Fbk.innerText = "";
      filingJoint3Fbk.className = "";
      pec.classList.remove("is-invalid");

       // Validation
      if (!filingJoint3.checked && !filingJoint3Sp.checked) {
        e.preventDefault();
        filingJoint3Fbk.innerText = "Please check at least one box for the Presidential Election Campaign.";
        filingJoint3Fbk.className = "error";
        pec.classList.add("is-invalid");
      }
    });




    /*Filing Status and Exemptions*/
    /*If Filing Status is not selected*/
    document.getElementById("my-form").addEventListener("submit", function (e) {
      const selectedStatus = document.querySelector('input[name="filingStatus"]:checked');

      const filingStatusFbk = document.getElementById("filingStatusFbk");
      filingStatusFbk.innerText = "";
      filingStatusFbk.className = "";

      if (!selectedStatus) {
        e.preventDefault();
        filingStatusFbk.innerText = "Please select a Filing Status.";
        filingStatusFbk.className = "error";
      }
    });



    /*If Filing Status is Married Filing Separately*/

    /*Required inputs if Filing Status is Married Filing Separately is Checked*/
    document.getElementById("my-form").addEventListener("submit", function (e) {
      const filingStatus = document.querySelector('input[name="filingStatus"]:checked');
      const isSeparate = filingStatus && filingStatus.value === "separate";



      // Spouse Info fields
      const separatelyspfname = document.getElementById("separatelyspfname");
      const separatelysplname = document.getElementById("separatelysplname");
      const separatelyspssn = document.getElementById("separatelyspssn");

      const marriedFSeparatelyFbk = document.getElementById("marriedFSeparatelyFbk");
      marriedFSeparatelyFbk.innerText = "";
      marriedFSeparatelyFbk.className = "";

      // Set required if filing separately
      if (isSeparate) {
        let valid = true;

        if (!separatelyspfname.value.trim()) {
          separatelyspfname.classList.add("is-invalid");
          separatelyspfname.classList.remove("is-valid");
          valid = false;
        } else {
          separatelyspfname.classList.remove("is-invalid");
          separatelyspfname.classList.add("is-valid");
        }

        if (!separatelysplname.value.trim()) {
          separatelysplname.classList.add("is-invalid");
          separatelysplname.classList.remove("is-valid");
          valid = false;
        } else {
          separatelysplname.classList.remove("is-invalid");
          separatelysplname.classList.add("is-valid");
        }

        if (!/^\d{9}$/.test(separatelyspssn.value)) {
          separatelyspssn.classList.add("is-invalid");
          separatelyspssn.classList.remove("is-valid"); // <-- in case it was previously valid
          valid = false;
          valid = false;
        } else {
          separatelyspssn.classList.remove("is-invalid"); // <-- this line fixes the issue
          separatelyspssn.classList.add("is-valid"); // <-- this line applies the green/valid styling
          separatelyspssnFbk.innerText = 'Valid Spouse SSN';
          separatelyspssnFbk.className = 'success';
        }


        if (!valid) {
          e.preventDefault();

          marriedFSeparatelyFbk.innerText = "Please fill in all required spouse fields for 'Married filing separately'.";
          marriedFSeparatelyFbk.className = "error";
        }
      }
    });

    // Spouse SSN for Married Filing Separately
    //---------------------------------------------------------------------------
    // Spouse SSN Input & Feedback Elements
    const form = document.getElementById("my-form");
    const separatelyspssnInput = document.getElementById('separatelyspssn');
    const separatelyspssnFbk = document.getElementById("separatelyspssnFbk");

    // Utility Functions
    function getRawSeparatelyspssn(value) {
      return value.replace(/\D/g, '').slice(0, 9);
    }

    function maskSeparatelyspssn(raw) {
      return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
    }

    // Validation Function
    function validateSeparatelyspssnFields(fromSubmit = false) {
      const separatelyspssnRaw = getRawSeparatelyspssn(separatelyspssnInput.dataset.raw || '');

      // Clear previous messages if not submitting
      if (!fromSubmit) {
        separatelyspssnFbk.innerText = '';
        separatelyspssnFbk.className = '';
      }

      // Show error if incomplete SSN
      if (separatelyspssnRaw.length === 9) {
        separatelyspssnFbk.innerText = 'Valid Spouse SSN';
        separatelyspssnFbk.className = 'success';
      } else if (separatelyspssnRaw.length > 0 && separatelyspssnRaw.length < 9) {
        separatelyspssnFbk.innerText = 'Spouse SSN must be 9 digits.';
        separatelyspssnFbk.className = 'error';
      }

    }

    // Input Events
    separatelyspssnInput.addEventListener('focus', () => {
      separatelyspssnInput.value = separatelyspssnInput.dataset.raw || '';
    });

    separatelyspssnInput.addEventListener('input', () => {
      const raw = getRawSeparatelyspssn(separatelyspssnInput.value);
      separatelyspssnInput.dataset.raw = raw;
      separatelyspssnInput.value = raw; // Show raw input while typing
      validateSeparatelyspssnFields();
    });

    separatelyspssnInput.addEventListener('blur', () => {
      const raw = getRawSeparatelyspssn(separatelyspssnInput.dataset.raw || '');
      separatelyspssnInput.dataset.raw = raw;
      separatelyspssnInput.value = maskSeparatelyspssn(raw);
    });

    // Submit Handler
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission until validated

      const filingStatus = document.querySelector('input[name="filingStatus"]:checked');
      const isSeparate = filingStatus && filingStatus.value === "separate";

      let separatelyValid = true;

      // Clear previous feedback
      separatelyspssnFbk.innerText = '';
      separatelyspssnFbk.className = '';

      if (isSeparate) {
        const separatelyspssnRaw = separatelyspssnInput.dataset.raw || '';

        if (separatelyspssnRaw.length !== 9) {
          separatelyspssnInput.classList.add("is-invalid");
          separatelyspssnInput.classList.remove("is-valid");
          separatelyspssnFbk.innerText = 'Spouse SSN must be 9 digits.';
          separatelyspssnFbk.className = 'error';
          separatelyValid = false;
        } else {
          separatelyspssnInput.classList.remove("is-invalid");
          separatelyspssnInput.classList.add("is-valid");
          separatelyspssnFbk.innerText = 'Valid Spouse SSN';
          separatelyspssnFbk.className = 'success';
        }
        




        validateSeparatelyspssnFields(true);
        separatelyspssnInput.value = maskSeparatelyspssn(separatelyspssnRaw);

        // Mask values after submit
        separatelyspssnInput.value = maskSeparatelyspssn(separatelyspssnRaw);
      }


    });























    //---------------------------------------------------------------------------


    /*Exemptions*/
    document.getElementById("my-form").addEventListener("submit", function (e) {
      const exempYoursef = document.getElementById("exempYoursef");
      const exempSp = document.getElementById("exempSp");

      const exempFbk = document.getElementById("exempFbk");
      exempFbk.innerText = "";
      exempFbk.className = "";

      if (!exempYoursef.checked && !exempSp.checked) {
        e.preventDefault();

        exempFbk.innerText = "Please check at least one box for exemptions.";
        exempFbk.className = "error";
      }
    });

    /*Check If (c)
    If You are using filing status 4 and claiminng nonresident alien spouse*/
    document.getElementById("my-form").addEventListener("submit", function (e) {
      const checkboxC = document.getElementById("fS4nonrSp");
      const s4sfname = document.getElementById("s4sfname");
      const s4slname = document.getElementById("s4slname");
      const s4sssn = document.getElementById("s4sssn");

      const chks4Fbk = document.getElementById("chks4Fbk");
      chks4Fbk.innerText = "";
      chks4Fbk.className = "";

      let valid = true;

      if (checkboxC.checked) {
        // Check if required spouse fields are filled
        if (!s4sfname.value.trim()) {
          s4sfname.classList.add("is-invalid");
          valid = false;
        } else {
          s4sfname.classList.remove("is-invalid");
        }

        if (!s4slname.value.trim()) {
          s4slname.classList.add("is-invalid");
          valid = false;
        } else {
          s4slname.classList.remove("is-invalid");
        }

        if (!/^\d{9}$/.test(s4sssn.value)) {
          s4sssn.classList.add("is-invalid");
          valid = false;
        } else {
          s4sssn.classList.remove("is-invalid");
        }

        if (!valid) {
          e.preventDefault();
          chks4Fbk.innerText = "Please fill in all required spouse info for status 4 with nonresident spouse.";
          chks4Fbk.className = "error";
        }
      } else {
        // Clean up if unchecked
        s4sfname.classList.remove("is-invalid");
        s4slname.classList.remove("is-invalid");
        s4sssn.classList.remove("is-invalid");
      }
    });
















    // References to the elements
    const exempYoursef = document.getElementById('exempYoursef');
    const exempSp = document.getElementById('exempSp');

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

    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');

    });




    document.getElementById("my-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from submitting

      const form = event.target;
      const isValid = form.checkValidity();

      if (!isValid) {
        form.classList.add("was-validated"); // Show validation styles
        return;
      }

      // If form is valid
      form.classList.remove("was-validated");
      form.reset(); // Clears all native input fields inside the form

      // Manually clear custom or JS-set fields if needed
      document.getElementById("ssnFbk").innerText = "";
      document.getElementById("cssnFbk").innerText = "";
      document.getElementById("ssnPreview").style.display = "none";
      document.getElementById("idPreview").style.display = "none";

      // Show the success message card
      const successCard = document.getElementById("successCard");
      successCard.style.display = "block";

      // Auto-hide the success message and allow refilling
      setTimeout(() => {
        successCard.style.display = "none";
      }, 3000);
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