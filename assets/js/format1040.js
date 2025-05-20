/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const myFormData = e.target;

    // 1. Taxpayer Initial from First Name
    const fname = myFormData.fName.value.trim();
    document.getElementById("fnamei").value = fname ? fname.charAt(0).toUpperCase() : "";

    // 2. Spouse Initial from First Name
    const sfname = myFormData.sfName.value.trim();
    document.getElementById("sfnamei").value = sfname ? sfname.charAt(0).toUpperCase() : "";

    // --------------------------
    // SSN SECTION (Taxpayer)
    // --------------------------
    const ssnInput = document.getElementById('ssn');
    const cssnInput = document.getElementById('cssn');
    const ssnFbk = document.getElementById('ssnFbk');
    const cssnFbk = document.getElementById('cssnFbk');

    const getRaw = val => val.replace(/\D/g, '').slice(0, 9);
    const maskSSN = raw => raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;

    const validateSSNFields = (fromSubmit = false) => {
      const ssnRaw = getRaw(ssnInput.dataset.raw || '');
      const cssnRaw = getRaw(cssnInput.dataset.raw || '');

      if (!fromSubmit) {
        ssnFbk.innerText = "";
        cssnFbk.innerText = "";
        ssnFbk.className = "";
        cssnFbk.className = "";
      }

      // SSN
      if (ssnRaw.length === 9) {
        ssnFbk.innerText = "Valid SSN";
        ssnFbk.className = "success";
        ssnInput.classList.add("is-valid");
        ssnInput.classList.remove("is-invalid");
      } else if (ssnRaw.length > 0) {
        ssnFbk.innerText = "SSN must be 9 digits.";
        ssnFbk.className = "error";
        ssnInput.classList.add("is-invalid");
        ssnInput.classList.remove("is-valid");
      }

      // Confirm SSN
      if (cssnRaw.length === 9) {
        cssnFbk.innerText = "Valid Confirmation SSN";
        cssnFbk.className = "success";
        cssnInput.classList.add("is-valid");
        cssnInput.classList.remove("is-invalid");
      } else if (cssnRaw.length > 0) {
        cssnFbk.innerText = "Confirmation SSN must be 9 digits.";
        cssnFbk.className = "error";
        cssnInput.classList.add("is-invalid");
        cssnInput.classList.remove("is-valid");
      }

      if (ssnRaw.length === 9 && cssnRaw.length === 9 && ssnRaw !== cssnRaw) {
        cssnFbk.innerText = "❌ SSN and confirmation do not match.";
        cssnFbk.className = "error";
        cssnInput.classList.add("is-invalid");
        cssnInput.classList.remove("is-valid");
      }
    };

    ssnInput.addEventListener("focus", () => ssnInput.value = getRaw(ssnInput.dataset.raw || ""));
    ssnInput.addEventListener("input", () => {
      const raw = getRaw(ssnInput.value);
      ssnInput.dataset.raw = raw;
      ssnInput.value = raw;
      validateSSNFields();
    });
    ssnInput.addEventListener("blur", () => {
      const raw = getRaw(ssnInput.dataset.raw || "");
      ssnInput.value = maskSSN(raw);
    });

    cssnInput.addEventListener("focus", () => cssnInput.value = getRaw(cssnInput.dataset.raw || ""));
    cssnInput.addEventListener("input", () => {
      const raw = getRaw(cssnInput.value);
      cssnInput.dataset.raw = raw;
      cssnInput.value = raw;
      validateSSNFields();
    });
    cssnInput.addEventListener("blur", () => {
      const raw = getRaw(cssnInput.dataset.raw || "");
      cssnInput.value = maskSSN(raw);
    });

    // --------------------------
    // Spouse SSN Section
    // --------------------------
    const sssnInput = document.getElementById('sssn');
    const csssnInput = document.getElementById('csssn');
    const sssnFbk = document.getElementById('sssnFbk');
    const csssnFbk = document.getElementById('csssnFbk');

    const validateSpouseSSN = (fromSubmit = false) => {
      const sssnRaw = getRaw(sssnInput.dataset.raw || "");
      const csssnRaw = getRaw(csssnInput.dataset.raw || "");

      if (!fromSubmit) {
        sssnFbk.innerText = "";
        csssnFbk.innerText = "";
        sssnFbk.className = "";
        csssnFbk.className = "";
      }

      if (sssnRaw.length === 9) {
        sssnFbk.innerText = "Valid Spouse SSN";
        sssnFbk.className = "success";
        sssnInput.classList.add("is-valid");
        sssnInput.classList.remove("is-invalid");
      } else if (sssnRaw.length > 0) {
        sssnFbk.innerText = "SSN must be 9 digits.";
        sssnFbk.className = "error";
        sssnInput.classList.add("is-invalid");
        sssnInput.classList.remove("is-valid");
      }

      if (csssnRaw.length === 9) {
        csssnFbk.innerText = "Valid Confirmation SSN";
        csssnFbk.className = "success";
        csssnInput.classList.add("is-valid");
        csssnInput.classList.remove("is-invalid");
      } else if (csssnRaw.length > 0) {
        csssnFbk.innerText = "Confirm SSN must be 9 digits.";
        csssnFbk.className = "error";
        csssnInput.classList.add("is-invalid");
        csssnInput.classList.remove("is-valid");
      }

      if (sssnRaw.length === 9 && csssnRaw.length === 9 && sssnRaw !== csssnRaw) {
        csssnFbk.innerText = "❌ SSN and confirmation do not match.";
        csssnFbk.className = "error";
        csssnInput.classList.add("is-invalid");
        csssnInput.classList.remove("is-valid");
      }
    };

    sssnInput.addEventListener("focus", () => sssnInput.value = getRaw(sssnInput.dataset.raw || ""));
    sssnInput.addEventListener("input", () => {
      const raw = getRaw(sssnInput.value);
      sssnInput.dataset.raw = raw;
      sssnInput.value = raw;
      validateSpouseSSN();
    });
    sssnInput.addEventListener("blur", () => sssnInput.value = maskSSN(getRaw(sssnInput.dataset.raw || "")));

    csssnInput.addEventListener("focus", () => csssnInput.value = getRaw(csssnInput.dataset.raw || ""));
    csssnInput.addEventListener("input", () => {
      const raw = getRaw(csssnInput.value);
      csssnInput.dataset.raw = raw;
      csssnInput.value = raw;
      validateSpouseSSN();
    });
    csssnInput.addEventListener("blur", () => csssnInput.value = maskSSN(getRaw(csssnInput.dataset.raw || "")));

    // --------------------------
    // ZIP CODE Section
    // --------------------------
    const zipInput = document.getElementById("zipcode");
    const zipcodeFbk = document.getElementById("zipcodeFbk");

    zipInput.addEventListener("input", (e) => {
      const val = e.target.value.replace(/\D/g, '').slice(0, 5);
      zipInput.value = val;
      if (/^\d{5}$/.test(val)) {
        zipcodeFbk.innerText = "Valid Zip Code";
        zipcodeFbk.className = "success";
      } else {
        zipcodeFbk.innerText = "Zip Code must be 5 digits.";
        zipcodeFbk.className = "error";
      }
    });

    if (!/^\d{5}$/.test(zipInput.value)) {
      zipcodeFbk.innerText = "Zip Code must be 5 digits.";
      zipcodeFbk.className = "error";
    }

    // --------------------------
    // PHONE Section
    // --------------------------
    const phoneInput = document.getElementById("phone");
    const phoneFbk = document.getElementById("phoneFbk");

    phoneInput.addEventListener("input", function (e) {
      let input = e.target.value.replace(/\D/g, "").slice(0, 10);
      e.target.value = formatPhone(input);
      phoneFbk.innerText = input.length === 10 ? "Valid Phone Number" : `Phone must be 10 digits. Currently: ${input.length} digits.`;
      phoneFbk.className = input.length === 10 ? "success" : "error";
    });

    // Spouse Phone
    const sphoneInput = document.getElementById("sphone");
    const sphoneFbk = document.getElementById("sphoneFbk");

    sphoneInput.addEventListener("input", function (e) {
      let input = e.target.value.replace(/\D/g, "").slice(0, 10);
      e.target.value = formatPhone(input);
      sphoneFbk.innerText = input.length === 10 ? "Valid Phone Number" : `Phone must be 10 digits. Currently: ${input.length} digits.`;
      sphoneFbk.className = input.length === 10 ? "success" : "error";
    });

    function formatPhone(input) {
      return input.length === 10 ? `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}` : input;
    }

    // --------------------------
    // IMAGE PREVIEWS
    // --------------------------
    const previewHandler = (inputId, imgId) => {
      document.getElementById(inputId).addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (ev) {
            const img = document.getElementById(imgId);
            img.src = ev.target.result;
            img.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      });
    };

    previewHandler("ssnPhoto", "ssnPreview");
    previewHandler("idPhoto", "idPreview");

    // --------------------------
    // SUCCESS CARD
    // --------------------------
    const successCard = document.getElementById("successCard");

    form.classList.remove("was-validated");
    if (form.checkValidity()) {
      successCard.style.display = "block";
      setTimeout(() => {
        successCard.style.display = "none";
        form.reset();
        ssnFbk.innerText = "";
        cssnFbk.innerText = "";
        document.getElementById("ssnPreview").style.display = "none";
        document.getElementById("idPreview").style.display = "none";
      }, 5000);
    } else {
      form.classList.add("was-validated");
    }

    // Optional: Save form data
    const formData = new FormData(form);
    fetch("/submit-data", {
        method: "POST",
        body: formData,
      }).then(response => response.json())
      .then(data => console.log("Success:", data))
      .catch(error => console.error("Error:", error));
  }

  /*Taxpayer Information: Presidential Election Campaign*/
  form.addEventListener("submit", function (e) {
    const filingJoint3 = document.getElementById("filingJoint3");
    const filingJoint3Sp = document.getElementById("filingJoint3Sp");
    const filingJoint3Fbk = document.getElementById("filingJoint3Fbk");
    const pec = document.getElementById("pec");

    // Reset any previous messages or styles
    filingJoint3Fbk.innerText = "";
    filingJoint3Fbk.className = "";
    pec.classList.remove("is-invalid");

    // If neither box is checked, display error
    if (!filingJoint3.checked && !filingJoint3Sp.checked) {
      e.preventDefault();
      filingJoint3Fbk.innerText = "Please check at least one box for the Presidential Election Campaign.";
      filingJoint3Fbk.className = "error";
      pec.classList.add("is-invalid");
    }
  });


  // ----------------------------------------------------------------------------------------
  // Filing Status and Exemptions
  // -----------------------------------------------------------------------------------------

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

  // -----------------------------------------------------------------------------------------
  // If Filing Status is Married Filing Separately
  // -----------------------------------------------------------------------------------------

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
  //Finished---------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------
  // Head of Household: Elements
  // -----------------------------------------------------------------------------------------
  const hohRadio = document.getElementById("headOfHousehold");
  const hOHchildNameInput = document.getElementById("hOHchildName");
  const hOHchildNameFbk = document.getElementById("hOHchildNameFbk");
  const hOHchildSsnInput = document.getElementById("hOHchildSsn");
  const hOHchildSsnFbk = document.getElementById("hOHchildSsnFbk");
  const headOfHouseholdFbk = document.getElementById("headOfHouseholdFbk");

  // Utility Functions: Head of Household Child SSN -----------------------------------------
  function getRawHOHChildSsn(value) {
    return value.replace(/\D/g, '').slice(0, 9);
  }

  function maskHOHChildSsn(raw) {
    return raw.length === 9 ? '***-**-' + raw.slice(-4) : raw;
  }


  // Live Input Events for Child SSN ---------------------------------------------------------
  hOHchildSsnInput.addEventListener("focus", () => {
    hOHchildSsnInput.value = hOHchildSsnInput.dataset.raw || "";
  });

  hOHchildSsnInput.addEventListener("input", () => {
    const raw = getRawHOHChildSsn(hOHchildSsnInput.value);
    hOHchildSsnInput.dataset.raw = raw;
    hOHchildSsnInput.value = raw; // Show raw while typing
    validateHOHChildSsn(false); // Live feedback
  });

  hOHchildSsnInput.addEventListener("blur", () => {
    const raw = getRawHOHChildSsn(hOHchildSsnInput.dataset.raw || "");
    hOHchildSsnInput.dataset.raw = raw;
    hOHchildSsnInput.value = maskHOHChildSsn(raw); // Apply mask on blur
  });


  // Validation Function for Child SSN (optional: live) --------------------------------------
  function validateHOHChildSsn(fromSubmit = false) {
    const raw = getRawHOHChildSsn(hOHchildSsnInput.dataset.raw || "");
    hOHchildSsnFbk.innerText = "";
    hOHchildSsnFbk.className = "";

    if (!fromSubmit && raw.length === 0) return;

    if (raw.length === 9) {
      hOHchildSsnInput.classList.remove("is-invalid");
      hOHchildSsnInput.classList.add("is-valid");
      hOHchildSsnFbk.innerText = "Valid Child SSN";
      hOHchildSsnFbk.className = "success";
    } else {
      hOHchildSsnInput.classList.remove("is-valid");
      hOHchildSsnInput.classList.add("is-invalid");
      hOHchildSsnFbk.innerText = "Child SSN must be 9 digits.";
      hOHchildSsnFbk.className = "error";
    }
  }

  // -----------------------------------------------------------------------------------------
  // Full Form Submission Validation
  // -----------------------------------------------------------------------------------------
  form.addEventListener("submit", function (e) {
    const isHOH = hohRadio && hohRadio.checked;
    let hohValid = true;

    hOHchildNameFbk.innerText = "";
    hOHchildNameFbk.className = "";
    hOHchildSsnFbk.innerText = "";
    hOHchildSsnFbk.className = "";
    headOfHouseholdFbk.innerText = "";
    headOfHouseholdFbk.className = "";

    hOHchildNameInput.classList.remove("is-valid", "is-invalid");
    hOHchildSsnInput.classList.remove("is-valid", "is-invalid");

    if (isHOH) {
      // Validate Child Name
      if (!hOHchildNameInput.value.trim()) {
        hOHchildNameInput.classList.add("is-invalid");
        hOHchildNameFbk.innerText = "Child name is required.";
        hOHchildNameFbk.className = "error";
        hohValid = false;
      } else {
        hOHchildNameInput.classList.add("is-valid");
      }

      // Validate Child SSN (use raw!)
      const raw = getRawHOHChildSsn(hOHchildSsnInput.dataset.raw || "");
      if (raw.length !== 9) {
        hOHchildSsnInput.classList.add("is-invalid");
        hOHchildSsnFbk.innerText = "Child SSN must be 9 digits.";
        hOHchildSsnFbk.className = "error";
        hohValid = false;
      } else {
        hOHchildSsnInput.classList.add("is-valid");
        hOHchildSsnFbk.innerText = "Valid Child SSN";
        hOHchildSsnFbk.className = "success";
        hOHchildSsnInput.value = maskHOHChildSsn(raw);
      }

      if (!hohValid) {
        e.preventDefault();
        headOfHouseholdFbk.innerText = "Please complete the child's name and SSN.";
        headOfHouseholdFbk.className = "error";
      }
    }
  });

  // Finished ---------------------------------------------------------------------------



  // -----------------------------------------------------------------------------------------
  // Elements: Qualifying Surviving Spouse (with Qualifying Child)
  // -----------------------------------------------------------------------------------------
  const qualifyingSurvSpRadio = document.getElementById("qualifyingSurvSp");
  const ysdInput = document.getElementById("ysd");
  const sdchndchildNameInput = document.getElementById("sdchnd-name");
  const sdchndchildSsnInput = document.getElementById("sdchnd-ssn");

  const ysdFbk = document.getElementById("ysdFbk");
  const sdchndNameFbk = document.getElementById("sdchndNameFbk");
  const sdchndSsnFbk = document.getElementById("sdchndSsnFbk");


  // Utility Functions for SSN ---------------------------------------------------------------
  function getRawSdChildSsn(value) {
    return value.replace(/\D/g, "").slice(0, 9);
  }

  function maskSdChildSsn(raw) {
    return raw.length === 9 ? "***-**-" + raw.slice(-4) : raw;
  }


  // Live Input Events for SSN ----------------------------------------------------------------
  sdchndchildSsnInput.addEventListener("focus", () => {
    sdchndchildSsnInput.value = sdchndchildSsnInput.dataset.raw || "";
  });

  sdchndchildSsnInput.addEventListener("input", () => {
    const raw = getRawSdChildSsn(sdchndchildSsnInput.value);
    sdchndchildSsnInput.dataset.raw = raw;
    sdchndchildSsnInput.value = raw;
    validateSdChildSsn(false); // Live feedback
  });

  sdchndchildSsnInput.addEventListener("blur", () => {
    const raw = getRawSdChildSsn(sdchndchildSsnInput.dataset.raw || "");
    sdchndchildSsnInput.dataset.raw = raw;
    sdchndchildSsnInput.value = maskSdChildSsn(raw);
  });

  // Validation Function for QSS Child SSN ----------------------------------------------------
  function validateSdChildSsn(fromSubmit = false) {
    const raw = getRawSdChildSsn(sdchndchildSsnInput.dataset.raw || "");
    sdchndSsnFbk.innerText = "";
    sdchndSsnFbk.className = "";

    if (!fromSubmit && raw.length === 0) return;

    if (raw.length === 9) {
      sdchndchildSsnInput.classList.remove("is-invalid");
      sdchndchildSsnInput.classList.add("is-valid");
      sdchndSsnFbk.innerText = "Valid Child SSN";
      sdchndSsnFbk.className = "success";
    } else {
      sdchndchildSsnInput.classList.remove("is-valid");
      sdchndchildSsnInput.classList.add("is-invalid");
      sdchndSsnFbk.innerText = "Child SSN must be 9 digits.";
      sdchndSsnFbk.className = "error";
    }
  }


  // Form Validation for Surviving Spouse Section --------------------------------------------
  form.addEventListener("submit", (e) => {
    const isSurvivingSpouse = qualifyingSurvSpRadio && qualifyingSurvSpRadio.checked;
    let valid = true;

    // Reset feedback and classes
    [ysdFbk, sdchndNameFbk, sdchndSsnFbk].forEach(fbk => {
      fbk.innerText = "";
      fbk.className = "";
    });

    [ysdInput, sdchndchildNameInput, sdchndchildSsnInput].forEach(input => {
      input.classList.remove("is-valid", "is-invalid");
    });

    if (isSurvivingSpouse) {
      // Validate Year Spouse Died (2022 or 2023)
      const year = ysdInput.value ? new Date(ysdInput.value).getFullYear() : null;
      if (!ysdInput.value || ![2022, 2023].includes(year)) {
        ysdInput.classList.add("is-invalid");
        ysdFbk.innerText = "Please enter the year your spouse died (2022 or 2023).";
        ysdFbk.className = "error";
        valid = false;
      } else {
        ysdInput.classList.add("is-valid");
      }

      // Validate Child Name
      if (!sdchndchildNameInput.value.trim()) {
        sdchndchildNameInput.classList.add("is-invalid");
        sdchndNameFbk.innerText = "Child's name is required.";
        sdchndNameFbk.className = "error";
        valid = false;
      } else {
        sdchndchildNameInput.classList.add("is-valid");
      }

      // Validate Child SSN
      const raw = getRawSdChildSsn(sdchndchildSsnInput.dataset.raw || "");
      if (raw.length !== 9) {
        sdchndchildSsnInput.classList.add("is-invalid");
        sdchndSsnFbk.innerText = "Child SSN must be 9 digits.";
        sdchndSsnFbk.className = "error";
        valid = false;
      } else {
        sdchndchildSsnInput.classList.add("is-valid");
        sdchndSsnFbk.innerText = "Valid Child SSN";
        sdchndSsnFbk.className = "success";
        sdchndchildSsnInput.value = maskSdChildSsn(raw);
      }

      if (!valid) {
        e.preventDefault();
      }
    }
  });




  // -----------------------------------------------------------------------------------------
  // Exemptions
  // -----------------------------------------------------------------------------------------

  const exempYourself = document.getElementById("exempYoursef"); // fixed typo
  const exempSpouse = document.getElementById("exempSpouse");
  const exempFbk = document.getElementById("exempFbk");
  const exempTotal = document.getElementById("exempTotal");

  function updateExemptions() {
    const isexempYourself = exempYourself.checked;
    const isexempSpouse = exempSpouse.checked;
    const count = [isexempYourself, isexempSpouse].filter(Boolean).length;
    exempTotal.value = count;
  }

  exempYourself.addEventListener("change", updateExemptions);
  exempSpouse.addEventListener("change", updateExemptions);

  // Filing Status 4 – Nonresident Alien Spouse ----------------------------------------------

  const checkboxC = document.getElementById("fS4nonrSp");
  const s4sfname = document.getElementById("s4sfname");
  const s4slname = document.getElementById("s4slname");
  const s4sssnInput = document.getElementById("s4sssn");

  const chks4Fbk = document.getElementById("chks4Fbk");
  const s4sfnameFbk = document.getElementById("s4sfnameFbk");
  const s4slnameFbk = document.getElementById("s4slnameFbk");
  const s4sssnFbk = document.getElementById("s4sssnFbk");

  function getRawS4sssn(value) {
    return value.replace(/\D/g, "").slice(0, 9);
  }

  function maskS4sssn(raw) {
    return raw.length === 9 ? "***-**-" + raw.slice(-4) : raw;
  }

  s4sssnInput.addEventListener("focus", () => {
    s4sssnInput.value = s4sssnInput.dataset.raw || "";
  });

  s4sssnInput.addEventListener("input", () => {
    const raw = getRawS4sssn(s4sssnInput.value);
    s4sssnInput.dataset.raw = raw;
    s4sssnInput.value = raw;
    validateS4sssn(false);
  });

  s4sssnInput.addEventListener("blur", () => {
    const raw = getRawS4sssn(s4sssnInput.dataset.raw || s4sssnInput.value || "");
    s4sssnInput.dataset.raw = raw;
    s4sssnInput.value = maskS4sssn(raw);
  });

  function validateS4sssn(fromSubmit = false) {
    const raw = getRawS4sssn(s4sssnInput.dataset.raw || s4sssnInput.value || "");
    s4sssnFbk.innerText = "";
    s4sssnFbk.className = "";

    if (!fromSubmit && raw.length === 0) return;

    if (raw.length === 9) {
      s4sssnInput.classList.remove("is-invalid");
      s4sssnInput.classList.add("is-valid");
      s4sssnFbk.innerText = "Valid SSN";
      s4sssnFbk.className = "success";
    } else {
      s4sssnInput.classList.remove("is-valid");
      s4sssnInput.classList.add("is-invalid");
      s4sssnFbk.innerText = "SSN must be 9 digits.";
      s4sssnFbk.className = "error";
    }
  }


  // Combined Submit Handler ----------------------------------------------------------------

  form.addEventListener("submit", function (e) {
    // ----- Update Exemptions Count -----
    updateExemptions();
    if (parseInt(exempTotal.value) === 0) {
      e.preventDefault();
      exempFbk.innerText = "Please check at least one exemption (yourself or spouse).";
      exempFbk.className = "error";
    }

    // ----- Validate Nonresident Alien Spouse Fields -----
    const isChecked = checkboxC && checkboxC.checked;
    let valid = true;

    [s4sfnameFbk, s4slnameFbk, s4sssnFbk].forEach(fbk => {
      fbk.innerText = "";
      fbk.className = "";
    });

    [s4sfname, s4slname, s4sssnInput].forEach(input =>
      input.classList.remove("is-valid", "is-invalid")
    );

    chks4Fbk.innerText = "";
    chks4Fbk.className = "";

    if (isChecked) {
      // Validate First Name
      if (!s4sfname.value.trim()) {
        s4sfname.classList.add("is-invalid");
        s4sfnameFbk.innerText = "First name is required.";
        s4sfnameFbk.className = "error";
        valid = false;
      } else {
        s4sfname.classList.add("is-valid");
      }

      // Validate Last Name
      if (!s4slname.value.trim()) {
        s4slname.classList.add("is-invalid");
        s4slnameFbk.innerText = "Last name is required.";
        s4slnameFbk.className = "error";
        valid = false;
      } else {
        s4slname.classList.add("is-valid");
      }

      // Validate SSN
      const raw = getRawS4sssn(s4sssnInput.dataset.raw || s4sssnInput.value || "");
      if (raw.length !== 9) {
        s4sssnInput.classList.add("is-invalid");
        s4sssnFbk.innerText = "SSN must be 9 digits.";
        s4sssnFbk.className = "error";
        valid = false;
      } else {
        s4sssnInput.classList.add("is-valid");
        s4sssnFbk.innerText = "Valid SSN";
        s4sssnFbk.className = "success";
        s4sssnInput.value = maskS4sssn(raw);
      }

      if (!valid) {
        e.preventDefault();
        chks4Fbk.innerText =
          "Please complete all required fields for your nonresident alien spouse.";
        chks4Fbk.className = "error";
      }
    }
  });







});