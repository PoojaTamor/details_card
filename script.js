
      // $(document).ready(function () {
      //   var current_fs, next_fs, previous_fs; // fieldsets
      //   var opacity;
      //   var current = 1;
      //   var steps = $("fieldset").length;
    
      //   setProgressBar(current);
    
      //   $(".next").click(function () {
      //     current_fs = $(this).parent();
      //     next_fs = $(this).parent().next();
    
      //     // Check if all required fields in the current fieldset are filled
      //     var isValid = true;
      //     current_fs.find("input[required], select[required]").each(function () {
      //       if (!$(this).val()) {
      //         $(this).addClass("is-invalid"); // Add invalid class for styling
      //         isValid = false;
      //       } else {
      //         $(this).removeClass("is-invalid"); // Remove invalid class
      //       }
      //     });
    
      //     if (!isValid) {
      //       Swal.fire({
      //         icon: "error",
      //         title: "Error",
      //         text: "Please fill in all required fields before proceeding.",
      //       });
      //       return false; // Prevent moving to the next fieldset
      //     }
    
      //     // Scroll to the top of the page
      //     window.scrollTo({ top: 0, behavior: "smooth" });
    
      //     // Add Class Active to progress bar
      //     $("#progressbar li")
      //       .eq($("fieldset").index(next_fs))
      //       .addClass("active");
    
      //     // Show the next fieldset
      //     next_fs.show();
      //     // Hide the current fieldset with style
      //     current_fs.animate(
      //       { opacity: 0 },
      //       {
      //         step: function (now) {
      //           // for making fieldset appear animation
      //           opacity = 1 - now;
    
      //           current_fs.css({
      //             display: "none",
      //             position: "relative",
      //           });
      //           next_fs.css({ opacity: opacity });
      //         },
      //         duration: 500,
      //       }
      //     );
      //     setProgressBar(++current);
      //   });
    
      //   $(".previous").click(function () {
      //     current_fs = $(this).parent();
      //     previous_fs = $(this).parent().prev();
    
      //     // Scroll to the top of the page
      //     window.scrollTo({ top: 0, behavior: "smooth" });
    
      //     // Remove class active from progress bar
      //     $("#progressbar li")
      //       .eq($("fieldset").index(current_fs))
      //       .removeClass("active");
    
      //     // Show the previous fieldset
      //     previous_fs.show();
    
      //     // Hide the current fieldset with style
      //     current_fs.animate(
      //       { opacity: 0 },
      //       {
      //         step: function (now) {
      //           // for making fieldset appear animation
      //           opacity = 1 - now;
    
      //           current_fs.css({
      //             display: "none",
      //             position: "relative",
      //           });
      //           previous_fs.css({ opacity: opacity });
      //         },
      //         duration: 500,
      //       }
      //     );
      //     setProgressBar(--current);
      //   });
    
      //   $(".submi-btn").click(function (event) {
      //     // Prevent form submission
      //     event.preventDefault();
    
      //     // Validate all required fields across the form
      //     var isValid = true;
      //     $("form")
      //       .find("input[required], select[required]")
      //       .each(function () {
      //         if (!$(this).val()) {
      //           $(this).addClass("is-invalid"); // Add invalid class for styling
      //           isValid = false;
      //         } else {
      //           $(this).removeClass("is-invalid"); // Remove invalid class
      //         }
      //       });
    
      //     if (!isValid) {
      //       Swal.fire({
      //         icon: "error",
      //         title: "Error",
      //         text: "Please fill in all required fields before submitting the form.",
      //       });
      //       return false; // Prevent form submission
      //     }
    
      //     // Show success notification using SweetAlert2
      //     Swal.fire({
      //       icon: "success",
      //       title: "Success",
      //       text: "Your form has been submitted successfully!",
      //     }).then(() => {
      //       // Scroll to the top of the page
      //       window.scrollTo({ top: 0, behavior: "smooth" });
    
      //       // Reset form fields
      //       $("form")[0].reset();
    
      //       current = 1; // Reset the current step
      //       setProgressBar(current); // Reset progress bar
    
      //       // Reset all fieldsets and progress bar
      //       $("fieldset").hide(); // Hide all fieldsets
      //       $("fieldset:first").show(); // Ensure the first fieldset remains visible
      //       $("fieldset:first").css("opacity", "1"); // Reset opacity
    
      //       // Reset progress bar steps
      //       $("#progressbar li").removeClass("active");
      //       $("#progressbar li:first").addClass("active"); // Set first progress bar step as active
      //     });
      //   });
    
      //   function setProgressBar(curStep) {
      //     var percent = parseFloat(100 / steps) * curStep;
      //     percent = percent.toFixed();
      //     $(".progress-bar").css("width", percent + "%");
      //   }
      // });
   
    //   =======================================othercode==============================

        
   // $(document).ready(function () {
        
   
   


  $(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      var isValid = true;
      current_fs.find("input[required], select[required]").each(function () {
        if (!$(this).val()) {
          $(this).addClass("is-invalid");
          isValid = false;
        } else {
          $(this).removeClass("is-invalid");
        }
      });

      if (!isValid) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill in all required fields before proceeding.",
        });
        return false;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });

      $("#progressbar li")
        .eq($("fieldset").index(next_fs))
        .addClass("active");

      next_fs.show();
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            opacity = 1 - now;
            current_fs.css({ display: "none", position: "relative" });
            next_fs.css({ opacity: opacity });
          },
          duration: 500,
        }
      );
      setProgressBar(++current);
    });

    $(".previous").click(function () {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      window.scrollTo({ top: 0, behavior: "smooth" });

      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      previous_fs.show();
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            opacity = 1 - now;
            current_fs.css({ display: "none", position: "relative" });
            previous_fs.css({ opacity: opacity });
          },
          duration: 500,
        }
      );
      setProgressBar(--current);
    });

    $(".submi-btn").click(function (event) {
      event.preventDefault();

      var isValid = true;
      $("form")
        .find("input[required], select[required]")
        .each(function () {
          if (!$(this).val()) {
            $(this).addClass("is-invalid");
            isValid = false;
          } else {
            $(this).removeClass("is-invalid");
          }
        });

      if (!isValid) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill in all required fields before submitting the form.",
        });
        return false;
      }

      // Send form via EmailJS
      emailjs
        .sendForm("service_wevjurc","template_sesvaac", "form", "-WovZf3jMK10jTEUb")
        .then(
          function () {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your form has been submitted successfully!",
}).then(() => {
  // 👇 Add this block here
  const form = document.getElementById("msform");
   const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
    .map(el => el.value)
    .join(', ');
console.log(form);
  let printHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Acknowledgment Slip</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f8f9fa;
      font-family: 'Arial', sans-serif;
    }

    .slip {
      background-color: #fff;
      max-width: 400px;
      margin: 50px auto;
      padding: 40px 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.08);
    }

    .reg-number {
      text-align: end;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .reg-number span {
      font-size: 25px;
      font-weight: bold;
    }

    .title {
      text-align: center;
      margin-bottom: 30px;
    }

    .title h6 {
      letter-spacing: 1px;
      font-size: 10px;
      margin: 0;
    }

    .title h4 {
       font-weight: bold;
    letter-spacing: 1px;
    font-size: 20px;
    }

    .info-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 2px;
    }

    .info-value {
      font-weight: 600;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-size: 12px;
    }

    .pickup {
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 20px;
    }

    .signature {
      font-size: 11px;
      text-align: center;
      margin-top: 40px;
    }

    .signature img {
      width: 60px;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <div class="slip">
    <div class="reg-number">Reg. No:<br><span>7829</span></div>

    <div class="title">
      <h6>ACKNOWLEDGMENT SLIP</h6>
      <h4>ORIGINAL COPY</h4>
    </div>

    <div>
      <div class="info-label">Customer Name</div>
      <div class="info-value">${form.fullName.value}</div>

      <div class="info-label">Make & Model</div>
      <div class="info-value">${form.Brand?.value || ""} ${form.Model?.value || ""} </div>

      <div class="info-label">Vehicle Number</div>
      <div class="info-value">${form.Car_Number?.value || ""}</div>

      <div class="info-label">Service Type</div>
      <div class="info-value">${selectedServices || ""}</div>

      <div class="info-label">Drop Location</div>
      <div class="info-value">${form.Store?.value || ""}</div>
<div class="d-flex  justify-content-between">
    <div>
          <div class="info-label">Pickup Date & Time</div>
      <div class="pickup">${form.dateInput?.value || ""} ,${form.timeInput?.value || ""}</div>
    </div>
      <div>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=HR92JF0033" alt="QR Code" class="qr-code" width="60px" height="60px">
</div>
</div>

    </div>

    <div class="signature">
      Signature & Acknowledgement<br>
      <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Signature_%28example%29.svg" alt="Signature"> -->
    </div>
  </div>
</body>
</html>

        `;



  const printWindow = window.open("", "_blank");
  printWindow.document.write(printHTML);
  printWindow.document.close();
  printWindow.onload = function () {
    printWindow.focus();
    printWindow.print();
  };

  // 👇 Reset form & show first fieldset
  window.scrollTo({ top: 0, behavior: "smooth" });
  $("form")[0].reset();
  current = 1;
  setProgressBar(current);
  $("fieldset").hide();
  $("fieldset:first").show().css("opacity", "1");
  $("#progressbar li").removeClass("active");
  $("#progressbar li:first").addClass("active");
});
          },
          function (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to send form. Please try again later.",
            });
            console.error("EmailJS Error:", error);
          }
        );
    });

    function setProgressBar(curStep) {
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar").css("width", percent + "%");
    }
  });


   
   function getIp(callback) {
    fetch('https://ipinfo.io?token=66e2f39b20a2bd', { 
      headers: { 'Accept': 'application/json' }
    })
      .then((resp) => resp.json())
      .catch(() => ({ country: 'us' }))
      .then((resp) => callback(resp.country));
  }

  const phoneInputField = document.querySelector("#phoneNumber");
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "in", // India will be pre-selected
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });




  
// ======================================================other==========================================
      flatpickr("#dateInput", {
        dateFormat: "d M Y", // Backend format
        altInput: true, // For a custom display
        altFormat: "d M Y", // Placeholder format
        defaultDate: "", // Start with empty input
        allowInput: true, // Allow manual typing
        placeholder: "27 Jan 2025", // Placeholder text
      });

      flatpickr("#timeInput", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K", // Backend format
        altInput: true, // For a custom display
        altFormat: "h:i K", // Placeholder format
        defaultDate: "", // Start with empty input
        allowInput: true, // Allow manual typing
        placeholder: "05:00 PM", // Placeholder text
      });
 


    //   ==================================================other===========================================


       
      // Define the store locations based on states
      const storeData = {
        "Delhi NCR": [
          "Ambience Mall",
          "Janakpuri",
          "Pacific Mall ,Subhash Nagar",
          "Promenade Mall",
        ],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Haryana: ["Gurugram"],
        Karnataka: ["Bengaluru"],
        "Madhya Pradesh": ["Indore"],
        Maharashtra: ["Nagpur"],
        Nagaland: ["Dimapur"],
        Punjab: ["Amritsar", "Mohali"],
        Rajasthan: ["Jaipur", "Udaipur"],
        "Uttar Pradesh": ["Agra", "Aligarh", "Lucknow", "Noida"],
        Uttarakhand: ["Rudrapur"],
        Telangana:["Hyderabad"]
      };

      const stateSelect = document.getElementById("State");
      const storeSelect = document.getElementById("Store");

      // Event listener for state selection
      stateSelect.addEventListener("change", function () {
        const selectedState = stateSelect.value;

        // Clear the store dropdown
        storeSelect.innerHTML = '<option value="">Select Store</option>';

        // Populate the store dropdown based on the selected state
        if (storeData[selectedState]) {
          storeData[selectedState].forEach((store) => {
            const option = document.createElement("option");
            option.value = store;
            option.textContent = store;
            storeSelect.appendChild(option);
          });
        }
      });
    

    //   ===================================other========================


    

  // Define models for each brand
  const modelData =  {
    "Audi": [
      "A3",
      "A3 Cabriolet",
      "A4",
      "A6",
      "A6 Matrix",
      "Q2",
      "Q3",
      "Q5",
      "Q7",
      "R8",
      "RS5",
      "RS6",
      "RS7 Sportback",
      "S5 Sportback",
      "TT",
    
    ],
    "BMW": [
      "2 Series Gran Coupe",
      "3 Series",
      "3 Series GT",
      "4 Series",
      "5 Series",
      "5 Series GT",
      "6 Series",
      "7 Series",
      "8 Series",
      "i8",
      "M3",
      "M5",
      "X1",
      "X3",
      "X4",
      "X5",
      "X6",
      "Z4"
    ],
    "Chevrolet": [
      "Aveo",
      "Aveo Old",
      "Aveo U-VA",
      "Beat",
      "Captiva",
      "Cruze",
      "Enjoy",
      "Forester",
      "Optra",
      "Optra Magnum",
      "Optra SRV",
      "Sail",
      "Sail Hatchback",
      "Sail U-VA",
      "Spark",
      "Tavera",
      "Trailblazer"
    ],
    "Citroen": [
      "Basalt",
      "C3",
      "C3 AIRCROSS",
      "C5 Aircross"
    ],
    "Datsun": [
      "GO",
      "Go Puls"
    ],
    "Ford": [
      "Classic",
      "Escort",
      "Fiesta",
      "Fiesta Classic",
      "Freestyle",
      "Fusion",
      "Ikon",
      "Mondeo",
      "Mustang"
    ],
    "Honda": [
      "Accord",
      "Amaze",
      "BR-V",
      "Brio",
      "City",
      "Civic",
      "Civic Hybrid",
      "CR-V",
      "Elevate",
      "Jazz",
      "Mobilio",
      "WR-V"
    ],
    "Hyundai": [
      "Accent",
      "Accent Viva",
      "Alcazar",
      "Aura",
      "Creta",
      "Creta N-Line",
      "Elantra",
      "Eon",
      "Exter",
      "Getz",
      "Getz Prime",
      "Grand i10",
      "Grand i10 Nios",
      "i10",
      "i20",
      "Neo Fluidic Elantra",
      "New Santro 1.1",
      "Santa Fe",
      "Santro",
      "Santro Xing",
      "Sonata",
      "Sonata Embera",
      "Terracan",
      "Tucson",
      "Venue",
      "Venue N-Line",
      "Xcent"
    ],
    "Jeep": [
      "Compass",
      "Meridian",
      "Wrangler"
    ],
    "Kia": [
      "Carens",
      "Carnival",
      "Seltos",
      "Sonet"
    ],
    "Land Rover": [
      "Discovery",
      "Discovery 3",
      "Discovery 4",
      "Discovery Sport",
      "Range Rover Evoque"
    ],
    "Mahindra": [
      "Alturas G4",
      "Armada",
      "Bolero",
      "Bolero Neo",
      "e20",
      "KUV100",
      "KUV100 NXT",
      "Marazzo",
      "Marshal",
      "NuvoSport",
      "Quanto",
      "REVAI",
      "Scorpio",
      "Scorpio Classic",
      "Scorpio Getaway",
      "Scorpio N",
      "Thar",
      "Thar Roxx",
      "TUV 300 PLUS",
      "TUV300",
      "Verito",
      "XUV 300",
      "XUV 300 TurboSport",
      "XUV 3XO",
      "XUV500",
      "XUV700",
      "Xylo"
    ],
    "Maruti Suzuki": [
      "1000",
      "800",
      "A-Star",
      "Alto",
      "Alto 800",
      "Baleno",
      "Brezza",
      "Celerio",
      "Celerio X",
      "Ciaz",
      "Dzire",
      "Eeco",
      "Esteem",
      "Estilo",
      "Fronx",
      "Grand Vitara",
      "Gypsy",
      "Ignis",
      "Invicto",
      "Jimny",
      "New Ertiga",
      "Omni",
      "Ritz",
      "S-Cross",
      "S-Presso",
      "Swift",
      "SX4",
      "Versa",
      "Wagon R",
      "XL6",
      "Zen",
      "Zen Estilo"
    ],
    "MG Motors": [
      "Astor",
      "Gloster",
      "Hector",
      "Hector Plus",
      "ZS EV"
    ],
    "Mercedes-Benz": [
      "A-Class",
      "AMG GT",
      "B-Class",
      "C-Class",
      "CLA",
      "E-Class",
      "E-Class Cabriolet",
      "GL",
      "GLA",
      "GLB",
      "GLC",
      "GLE",
      "GLE Coupe",
      "GLS",
      "ML-Class",
      "S-Coupe",
      "SL"
    ],
    "Nissan": [
      "350Z",
      "370Z",
      "Evalia",
      "Kicks",
      "Magnite",
      "Micra",
      "Micra Active",
      "Sunny",
      "Teana",
      "Terrano",
      "X-Trail"
    ],
    "Renault": [
      "Captur",
      "Duster",
      "Fluence",
      "Kiger",
      "Koleos",
      "Kwid",
      "Lodgy",
      "Logan",
      "Pulse",
      "Scala",
      "Triber"
    ],
    "Skoda": [
      "Fabia",
      "Fabia Scout",
      "Karoq",
      "Kodiaq",
      "Kushaq",
      "Laura",
      "Octavia",
      "Octavia Combi",
      "Rapid",
      "Slavia",
      "Superb",
      "Superb Old",
      "Yeti"
    ],
    "Tata": [
      "Altroz",
      "Aria",
      "Bolt",
      "Curvy",
      "Harrier",
      "Hexa",
      "Indica",
      "Indica V2",
      "Indica V2 Turbo",
      "Indica V2 Xeta",
      "Indica Vista",
      "Indica eV2",
      "Indicab",
      "Indigo",
      "Indigo CS",
      "Indigo XL",
      "Indigo eCS",
      "Indigo Marina",
      "Manza",
      "Movus",
      "Nano",
      "Nano GenX",
      "Nexon",
      "Nexon EV",
      "Nexon EV Max",
      "Nexon EV Prime",
      "Punch",
      "Safari",
      "Safari Storme",
      "Sierra",
      "Sumo",
      "Sumo Gold",
      "Sumo Grande",
      "Sumo Grande MK II",
      "Sumo Spacio",
      "Sumo Victa",
      "Tiago",
      "Tiago EV",
      "Tiago NRG",
      "Tigor",
      "Tigor EV",
      "Venture",
      "Vista Tech",
      "Xenon XT",
      "Zest"
    ],
    "Toyota": [
      "Alphard",
      "Camry",
      "Celica",
      "Corolla",
      "Corolla Altis",
      "Corona",
      "Etios",
      "Etios Cross",
      "Etios Liva",
      "Fortuner",
      "Glanza",
      "Hilux",
      "Innova",
      "Innova Crysta",
      "Innova Hycross",
      "Land Cruiser",
      "Land Cruiser Prado",
      "Prius",
      "Qualis",
      "Rumion",
      "Urban Cruiser",
      "Urban Cruiser Hyryder",
      "Urban Cruiser Taisor",
      "Yaris"
    ],
    "Volkswagen": [
      "1600",
      "Ameo",
      "Beetle",
      "Cross Polo",
      "Jetta",
      "Passat",
      "Phaeton",
      "Polo",
      "T-Roc",
      "Taigun",
      "Tiguan",
      "Tiguan AllSpace",
      "Touareg",
      "Virtus",
      "Vento"
    ]
  };
  

  const brandSelect = document.getElementById("Brand");
  const modelSelect = document.getElementById("Model");
  const otherModelInput = document.getElementById("OtherModel");

  // Event listener for brand selection
  brandSelect.addEventListener("change", function () {
    const selectedBrand = brandSelect.value;

    // Clear the model dropdown
    modelSelect.innerHTML = '<option value="" selected disabled>Select Model</option>';

    // Populate the model dropdown based on the selected brand
    if (modelData[selectedBrand]) {
      modelData[selectedBrand].forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });

      // Add 'Other' option
      const otherOption = document.createElement("option");
      otherOption.value = "Other";
      otherOption.textContent = "Other";
      modelSelect.appendChild(otherOption);
    }

    // Hide the 'Other' input field
    otherModelInput.style.display = "none";
  });

  // Event listener for model selection
  modelSelect.addEventListener("change", function () {
    if (modelSelect.value === "Other") {
      otherModelInput.style.display = "block";
      otherModelInput.focus();
    } else {
      otherModelInput.style.display = "none";
    }
  });

  // Handle input blur (when input loses focus)
  otherModelInput.addEventListener("blur", function () {
    const inputValue = otherModelInput.value.trim();

    if (inputValue) {
      // Update 'Other' option text with input value
      const otherOption = Array.from(modelSelect.options).find(
        (option) => option.value === "Other"
      );
      otherOption.textContent = inputValue;
      otherOption.value = inputValue;

      // Set the dropdown value to the updated 'Other' value
      modelSelect.value = inputValue;
    }

    // Hide the input field
    otherModelInput.style.display = "none";
  });
