let fnameInpt = document.getElementById("fname");
let fnameErr = document.getElementById("fnameErr");
let lnameInpt = document.getElementById("lname");
let lnameErr = document.getElementById("lnameErr");
let emailInpt = document.getElementById("em");
let emErr = document.getElementById("emailErr");
let mobileInpt = document.getElementById("mo");
let moErr = document.getElementById("mobileErr");
let maleInpt = document.getElementById("male");
let femaleInpt = document.getElementById("female");
let otherInpt = document.getElementById("other");
let genErr = document.getElementById("genderErr");
// let hobbiesInpt = document.querySelectorAll("#chk");
// let hobErr = document.getElementById("hobErr");
let countryInpt = document.getElementById("country");
let countryErr = document.getElementById("countErr");
let dateInpt = document.getElementById("dt");
let dateErr = document.getElementById("dateErr");
let fileInpt = document.getElementById("file");
let fileErr = document.getElementById("fileErr");
let inpt = document.querySelector(".inptField");

let selcState = document.getElementById("selectState");
let stateErr = document.getElementById("stateErr");
let selCity = document.getElementById("selectCity");
let cityErr = document.getElementById("cityErr");
let inputRegEx = /^[A-Za-z]{3,15}$/;
let emailregEx = /^[a-zA-z0-9]{3,}@[a-z]{5}\.[a-z]{2,3}$/;
let mobileNumRegEx = /^[69][0-9]{9}$/;
// const genderRegex = /^(male|female|other)$/i;

let submit = document.getElementById("submited");

let userData = [];

let registerBtn = () => {
  if (inpt.value === "") {
    fnameErr.innerHTML = "Enter Name*";
    fnameErr.style.color = "red";
    lnameErr.innerHTML = "Enter last Name*";
    lnameErr.style.color = "red";
    emErr.innerHTML = "Enter Email";
    emErr.style.color = "red";
    moErr.innerHTML = "Enter Mobile No..";
    moErr.style.color = "red";
    genErr.innerHTML = "Select Gender";
    genErr.style.color = "red";
    countryErr.innerHTML = "Select Country";
    countryErr.style.color = "red";
    stateErr.innerHTML = "Select State";
    stateErr.style.color = "red";
    cityErr.innerHTML = "Select City";
    cityErr.style.color = "red";
    // dateErr.innerHTML = "Select Date";
    // dateErr.style.color = "red";
    // fileErr.innerHTML = "Select File";
    // fileErr.style.color = "red";
  } else if (!inputRegEx.test(fnameInpt.value)) {
    fnameErr.innerHTML = "Not Valid Name";
    fnameErr.style.color = "red";
  } else if (/<[^\s>]*>/i.test(fnameInpt.value)) {
    fnameErr.innerHTML = "Invalid input: HTML tags not allowed";
    fnameErr.style.color = "red";
  } else if (!inputRegEx.test(lnameInpt.value)) {
    lnameErr.innerHTML = "Not Valid Name";
    lnameErr.style.color = "red";
  } else if (!emailregEx.test(emailInpt.value)) {
    emErr.innerHTML = "Enter a valid email";
    emErr.style.color = "red";
  } else if (!mobileNumRegEx.test(mobileInpt.value)) {
    moErr.innerHTML = "Not Valid Number..";
    moErr.style.color = "red";
  } else if (
    maleInpt.checked == false &&
    femaleInpt.checked == false &&
    otherInpt.checked == false
  ) {
    genErr.innerHTML = "Select Gender";
    genErr.style.color = "red";
  } else if (countryInpt.value === "") {
    countryErr.innerHTML = "Select Country";
    countryErr.style.color = "red";
  } else if (selcState.value === "") {
    stateErr.innerHTML = "Select State";
    stateErr.style.color = "red";
  } else if (selCity.value === "") {
    cityErr.innerHTML = "Select City";
    cityErr.style.color = "red";
  } else {
    alert("Form Submitted Succesfully");
    submit.innerHTML = "Successfully Submitted";
    submit.style.color = "white";

    let user = {
      fname: fnameInpt.value,
      lname: lnameInpt.value,
      email: emailInpt.value,
      mobile: mobileInpt.value,
      gender: maleInpt.checked
        ? "Male"
        : femaleInpt.checked
        ? "Female"
        : "Other",
      country: countryInpt.value,
      state: selcState.value,
      city: selCity.value,
    };

    let existingUserData = JSON.parse(localStorage.getItem("userData")) || [];

    existingUserData.push(user);

    localStorage.setItem("userData", JSON.stringify(existingUserData));

    // localStorage.setItem("fname", fnameInpt.value);
    // localStorage.setItem("lname", lnameInpt.value);
    // localStorage.setItem("email", emailInpt.value);
    // localStorage.setItem("mobile", mobileInpt.value);
    // localStorage.setItem("male", maleInpt.checked);
    // localStorage.setItem("female", femaleInpt.checked);
    // localStorage.setItem("other", otherInpt.checked);
    // localStorage.setItem("country", countryInpt.value);
    // localStorage.setItem("state", selcState.value);
    // localStorage.setItem("city", selCity.value);
  }

  // let genderSelected = false;
  // genderInpt.forEach((radio) => {
  //   if (radio.checked) {
  //     genderSelected = true;
  //   }
  //   if (!genderSelected) {
  //     genErr.innerHTML = "Select Gender";
  //     genErr.style.color = "red";
  //   }
  // });

  // let hobbiesSelected = false;
  // hobbiesInpt.forEach((radio) => {
  //   if (radio.checked) {
  //     hobbiesSelected = true;
  //   }
  // });

  // if (!hobbiesSelected) {
  //   hobErr.innerHTML = "Select Gender";
  //   hobErr.style.color = "red";
  // } else if (!/^[69]/.test(mobileInpt.value)) {
  //   moErr.innerHTML = " 6 must include in mobile no";
  //   moErr.style.color = "red";
  // } else if (countryInpt.value === "") {
  //   countryErr.innerHTML = "Select Country";
  //   countryErr.style.color = "red";
  // }

  // All Data Set To Local Stoge
};

let states = {
  India: ["Gujarat", "Maharastra", "Telangana"],
  USA: ["California", "New York", "Florida"],
  Spain: ["Barcelona", "Asturias", "Central Spain"],
};

let cities = {
  Gujarat: ["Surat", "Ahmedabad", "Vadodara"],
  Maharastra: ["Mumbai", "Pune", "Nagpur"],
  Telangana: ["warangal ", "Hyderabad", "Secunderabad"],
  California: ["Los Angeles ", "San francisco", "Santa Monica"],
  NewYork: ["New York City ", "Mexico", "East Hampton"],
  Florida: ["Miami", "Orlando", "Florida City"],
  Barcelona: ["Badalona", "Cerdanyola del Vallès", "Sabadell"],
  Asturias: ["Oviedo", "Llanes", "Cudillero"],
  CentralSpain: ["Malaga", "Madrid", "Palma"],
};

selcState.disabled = true;
selCity.disabled = true;

let handleStates = () => {
  console.log("Wroking Handling states...");
  countryErr.innerHTML = "";
  selcState.innerHTML = "<option value=''>Select a State</option>";
  selcState.disabled = false;

  var selectedCountry = countryInpt.value;
  if (selectedCountry) {
    var selectedStates = states[selectedCountry];
    selectedStates.forEach((state) => {
      var option = document.createElement("option");
      option.value = state;
      option.text = state;
      selcState.appendChild(option);
    });
  }
};

let handleCities = () => {
  console.log("Wroking Handling cities...");
  stateErr.innerHTML = " ";
  selCity.innerHTML = "<option value=''>Select a City</option>";
  selCity.disabled = false;
  var selectedStates = selcState.value;
  if (selectedStates) {
    var selectedCities = cities[selectedStates];
    selectedCities.forEach((city) => {
      var option = document.createElement("option");
      option.value = city;
      option.text = city;

      selCity.appendChild(option);
    });
  }
};

let fnameHandle = () => {
  fnameErr.innerHTML = "";
};

let lnamehandle = () => {
  lnameErr.innerHTML = "";
};

let emailHandle = () => {
  emErr.innerHTML = "";
};

let mobileHandle = () => {
  moErr.innerHTML = "";
};

let maleHandle = () => {
  genErr.innerHTML = "";
};
let femaleHandle = () => {
  genErr.innerHTML = "";
};
let otherHandle = () => {
  genErr.innerHTML = "";
};

let cityhandle = () => {
  cityErr.innerHTML = "";
};

// let dateHandle = () => {
//   dateErr.innerHTML = "";
// };
// let fileHandle = () => {
//   fileErr.innerHTML = "";
// };

// fnameInpt.addEventListener("input", handleInput);
// lnameInpt.addEventListener("input", handleInput);
// emailInpt.addEventListener("input", handleInput);
// mobileInpt.addEventListener("input", handleInput);

// let getFname = localStorage.getItem("fname");
// let getlname = localStorage.getItem("lname");
// let getEmail = localStorage.getItem("email");
// let getmobile = localStorage.getItem("mobile");
// let getGender = localStorage.getItem("gender");
// let getCountry = localStorage.getItem("country");
// let getState = localStorage.getItem("state");
// let getCity = localStorage.getItem("city");

// localStorage.getItem("userData");

// let displayUserData = () => {
//   // let getUserData = JSON.parse(localStorage.getItem("userData"));
//   let tbl =
//     "<table border=1><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile No</th><th>Gender</th><th>Country</th><th>State</th><th>City</th>";

//   getUserData.forEach((user) => {
//     tbl +=
//       "<tr>" +
//       "<td>" +
//       user.fname +
//       "</td>" +
//       "<td>" +
//       user.lname +
//       "</td>" +
//       "<td>" +
//       user.email +
//       "</td>" +
//       "<td>" +
//       user.mobile +
//       "</td>" +
//       "<td>" +
//       user.gender +
//       "</td>" +
//       "<td>" +
//       user.country +
//       "</td>" +
//       "<td>" +
//       user.state +
//       "</td>" +
//       "<td>" +
//       user.city +
//       "</td>" +
//       "</tr>";
//   });

//   tbl += "</table>";

//   document.getElementById("data").innerHTML = tbl;
// };
// displayUserData();

let formOpenBtn = document.querySelector("#form-open");
let container = document.querySelector(".container");
let home = document.querySelector(".home");
let formCloseBtn = document.querySelector("#closeBtn");

formOpenBtn.addEventListener("click", () => {
  console.log("form Open Clicked");
  container.classList.add("show");
});

// formCloseBtn.addEventListener("click", () => {
//   console.log("Close button clicked");
//   container.classList.remove("show");
// });

home.addEventListener("click", () => {
  console.log("Home button clicked");
  container.classList.remove("show");
});

let testFunC = () => {
  let getUserData = JSON.parse(localStorage.getItem("userData")) ;
  let tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  if (getUserData.length === 0) {
    tbody.innerHTML = "<tr><td colspan='8'>No data available</td></tr>";
  } else {
    getUserData.forEach((user) => {
      let row = `
        <tr>
          
          <td>${user.fname}</td>
          <td>${user.lname}</td>
          <td>${user.email}</td>
          <td>${user.mobile}</td>
          <td>${user.gender}</td>
          <td>${user.country}</td>
          <td>${user.state}</td>
          <td>${user.city}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
};
testFunC();
