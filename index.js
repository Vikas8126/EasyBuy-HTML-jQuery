
// Get the modal
// Load cart
var modal = document.getElementById('id01');
var userName = localStorage.getItem("uname")
    console.log(userName)
    if(userName == null){
        localStorage.setItem("uname", "Guest")
    }
function getcartItem() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    document.getElementById("cartProCount").innerHTML = cart.length
}
if (document.getElementById("cartProCount").innerHTML != null) {
    getcartItem();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {

        modal.style.display = "none";
    }
}

function getsignedupUser(signupForm) {
    window.alert("Hi " + user + "! You have successfully Registered")
    document.getElementById('id02').style.display = 'none'
  }

window.onload = function () {
    var userName = localStorage.getItem("uname")
    console.log(userName)
    if(userName == null){
        localStorage.setItem("uname", "Guest")
    }
    document.getElementById("loggedUser").innerHTML = "Welcome " + userName
}
function getLoggedInUser(loginForm) {
    if ((loginForm.uname.value == 'vikas' || loginForm.uname.value == 'Vikas') && (loginForm.psw.value == '12345')) {
        window.alert("Successfully Logged in as Vikas")
        var passwrd = loginForm.psw.value
        var userName = document.getElementById("uname").value
        localStorage.setItem("passwrd", passwrd)
        localStorage.setItem("uname", userName)
        document.getElementById("loggedUser").innerHTML = "Welcome " + userName
        console.log(userName);

    } else {
        window.alert("Wrong Password! Please try again.")
    }
    var modal = document.getElementById('id01');
    modal.style.display = "none";
}
function modelCheck() {
    var userName = localStorage.getItem("uname")
    if (userName != "Guest") {
        location.href = "profile.html"
    } else {
        document.getElementById('id01').style.display = 'block'
    }
}


function routeToCart() {
    var userName = localStorage.getItem("uname")
    console.log(userName)
    if (userName != "Guest") {
        document.getElementById('cart').style.display = 'block'
    } else {
        document.getElementById('id01').style.display = 'block'
    }
}

function closeCart() {
    document.getElementById('cart').style.display = 'none'
}

function signupform() {
    var userName = localStorage.getItem("uname")
    if (userName != "Guest") {
        location.href = "profile.html"
    } else {
        document.getElementById('id01').style.display = 'none'
        document.getElementById('id02').style.display = 'block'

    }
}

function signinform() {
    var userName = localStorage.getItem("uname")
    if (userName != "Guest") {
        location.href = "profile.html"
    } else {
        document.getElementById('id02').style.display = 'none'
        document.getElementById('id01').style.display = 'block'

    }
}
