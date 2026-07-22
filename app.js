let fullName = ("Enter your Full Name:");
let age = ("Enter your Age:");
let city = ("Enter your City:");
let profession = ("Enter your Profession (Student/Employee):");
let email = ("Enter your Email:");
let phoneNumber = ("Enter your Phone Number:");
let num = "Umer";

let newUser = {
  fullName: fullName,
  age: age,
  city: city,
  profession: profession,
  email: email,
  phoneNumber: phoneNumber
};

let usersArray = JSON.parse(localStorage.getItem("usersList")) || [];

usersArray.push(newUser);

localStorage.setItem("usersList", JSON.stringify(usersArray));

let cardsContainer = document.getElementById("userCardsContainer");

let storedUsers = JSON.parse(localStorage.getItem("usersList"));

if (storedUsers && storedUsers.length > 0) {
  storedUsers.forEach(function(user) {
    let userCardHTML = `
      <div class="user-card">
        <h2>${user.fullName}</h2>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>Profession:</strong> ${user.profession}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phoneNumber}</p>
      </div>
    `;
    
    cardsContainer.innerHTML += userCardHTML;
  });
}