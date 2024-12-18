const countries =
    [
      {
        "name": "India",
        "states": [
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal",
          "Andaman and Nicobar Islands",
          "Chandigarh",
          "Dadra and Nagar Haveli and Daman and Diu",
          "Delhi",
          "Lakshadweep",
          "Puducherry",
          "Ladakh",
          "Jammu and Kashmir"
        ]
      },
      {
        "name": "United States",
        "states": [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
        ]
      },
      {
        "name": "Canada",
        "states": [
          "Alberta",
          "British Columbia",
          "Manitoba",
          "New Brunswick",
          "Newfoundland and Labrador",
          "Northwest Territories",
          "Nova Scotia",
          "Nunavut",
          "Ontario",
          "Prince Edward Island",
          "Quebec",
          "Saskatchewan",
          "Yukon"
        ]
      }
    ] ;

  
    window.onload = function () {
        document.getElementById('paymentForm').reset();

        const countrySelect = document.getElementById('country');
        countries.forEach(country => {
          const option = document.createElement('option');
          option.value = country.name;
          option.textContent = country.name;
          countrySelect.appendChild(option);
        });
      };
  
     
      function populateStates() {
        const stateSelect = document.getElementById('state');
        const countrySelect = document.getElementById('country');
        const selectedCountry = countrySelect.value;
  
        
        stateSelect.innerHTML = '<option value="">--Select State--</option>';
  
      
        const country = countries.find(c => c.name === selectedCountry);
        if (country) {
          country.states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
          });
        }
      }

      document.getElementById('paymentForm').onsubmit = function (event) {
        
        event.preventDefault();
  
       
        // document.getElementById('cardNumberError').textContent = '';
        // document.getElementById('nameError').textContent = '';
        // document.getElementById('dateError').textContent = '';
        // document.getElementById('cvvError').textContent = '';
        // document.getElementById('emailError').textContent = '';

        document.querySelectorAll('.error').textContent='';
  
        let isValid = true;
  
       
        const cardNumber = document.getElementById('cardNumber').value;
        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(cardNumber)) {
          document.getElementById('cardNumberError').textContent = 'Card number must be exactly 16 digits.';
          isValid = false;
        }

        const holderName = document.getElementById('holderName').value;
        const nameRegex = /^[a-zA-Z\s'-]{2,40}$/;
        if (!nameRegex.test(holderName)) {
          document.getElementById('nameError').textContent = 'Name should consists of only alphabets,space and apostrophe.';
          isValid = false;
        }

        const expiry = document.getElementById('expiry').value;
        const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!dateRegex.test(expiry)) {
          document.getElementById('dateError').textContent = 'Expiry should be of the form MM/YY';
          isValid = false;
        }
  
      
        const cvv = document.getElementById('cvv').value;
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(cvv)) {
          document.getElementById('cvvError').textContent = 'CVV must be exactly 3 digits.';
          isValid = false;
        }
  
      
        const email = document.getElementById('mail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          document.getElementById('emailError').textContent = 'Please enter a valid email address.';
          isValid = false;
        }
  

        if (isValid) {
          alert('Form submitted successfully!');

          const country= document.getElementById('country').value;
          const state= document.getElementById('state').value;
          const city=document.getElementById('city').value;

          const formValues = {
            holderName,
            cardNumber,
            expiry,
            cvv,
            email,
            country,
            state,
            city
          };
      console.log(formValues) ;
    }
   
  };
  
