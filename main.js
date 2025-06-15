//for signup 
// document.querySelector("#signup").addEventListener('click', async () => {

// });

// //for login
// document.querySelector("#login").addEventListener('click', async () => {

// });

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  // your fetch code here
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const age = document.querySelector("#age").value; // Add an age input in your HTML

if (username === "" || password === "" || age === "" || email === "") {
  alert("Please enter your name, email , age, and password");
} else {
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: username,
      email : email ,
      password: password ,
      age: age,
     
    })
    
  });
    if (response.ok) {
  // Login successful, redirect to your main site
    window.location.href = "index.html"; // <-- CHANGE to your main site URL
} else {
  // Success logic here
    alert(data.error);
}
  const data = await response.json(); // If the response is JSON
  console.log(data);
}  
});