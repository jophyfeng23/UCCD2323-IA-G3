// Open/Close Modal
function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// Login function
function loginUser(event) {
  event.preventDefault();
  let username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Please enter a username!");
    return;
  }

  localStorage.setItem("user", username);
  alert("Welcome back " + username + " ! Time to explore the products !");
  document.getElementById("loginBtn").innerHTML = `<span class="username-display">${username}</span>`;
  closeLogin();
}



// Load cart or create empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product function
function addToCart(name, img, price) {
  cart.push({ name, img, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

//auto addtocart with correct info
function addToCartDynamic(btn) {
    // Find the closest product box
    let productBox = btn.closest('.product-box');

    // Get product info
    let title = productBox.querySelector('.product-title').innerText;
    let img = productBox.querySelector('img').src;
    let price = parseFloat(productBox.getAttribute('data-price'));

    // Call existing addToCart function
    addToCart(title, img, price);
}