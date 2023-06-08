
var products = `
    {
    "laptops": [
      {
        "id": 1,
        "category": "Macbooks",
        "title": "2022 Macbook Air",
        "description": "2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Starlight; English",
        "price": 1450,
        "discountPercentage": 12.96,
        "rating": 4.8,
        "stock": 94,
        "brand": "Apple",
        "images": [
          "./image/id1.png",
          "./image/id1 (2).png",
          "./image/id1 (3).png"
        ]
      },
      {
        "id": 2,
        "category": "Macbooks",
        "title": "2021 Apple MacBook Pro",
        "description": "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Grey - English",
        "price": 2499,
        "discountPercentage": 13,
        "rating": 4.8,
        "stock": 94,
        "brand": "Apple",
        "images": [
        "./image/id1.png",
        "./image/id1 (2).png",
        "./image/id1 (3).png"
        ]
      },
      {
        "id": 3,
        "category": "Macbooks",
        "title": "2021 Apple MacBook Pro 16-inch",
        "description": "2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey - English",
        "price": 3149,
        "discountPercentage": 13,
        "rating": 4.7,
        "stock": 94,
        "brand": "Apple",
        "images": [
        "./image/id1.png",
        "./image/id1 (2).png",
        "./image/id1 (3).png"
        ]
      },
      {
        "id": 4,
        "category": "Windows",
        "title": "Acer Nitro 5",
        "description": "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 inch FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard",
        "price": 1171,
        "discountPercentage": 13,
        "rating": 4.4,
        "stock": 100,
        "brand": "Acer",
        "images": [
          "./image/acer-windows.png",
          "./image/acer-windows2.png",
          "./image/acer-windows3.png"
        ]
      },
      {
        "id": 5,
        "category": "Windows",
        "title": "Samsung Galaxy Book Pro 15.6 inches",
        "description": "Samsung Galaxy Book Pro 15.6 Thin & Light AMOLED Laptop - Intel i7, 8GB DDR4, 256GB SSD, Windows 11 Home",
        "price": 1099,
        "discountPercentage": 36,
        "rating": 3.7,
        "stock": 150,
        "brand": "Samsung",
        "images": [
          "./image/samsung-win.png",
          "./image/samsung-win2.png",
          "./image/samsung-win3.png"
        ]
      },
      {
        "id": 6,
        "category": "Windows",
        "title": "ASUS TUF Gaming F17 (2022)",
        "description": "ASUS TUF Gaming F17 (2022) Gaming Laptop, 17.3” 144Hz FHD IPS-Type, Intel Core i7-12700H, GeForce RTX 3060, 16GB DDR5, 512GB PCIe SSD, Thunderbolt 4, Windows 11 Home, TUF707ZM-AS71-CA",
        "price": 1499,
        "discountPercentage": 14,
        "rating": 4.4,
        "stock": 50,
        "brand": "Asus",
        "images": [
          "./image/asus-win.png",
          "./image/asus-win2.png",
          "./image/asus-win3.png"
        ]
      },
      {
        "id": 7,
        "category": "Windows",
        "title": "Dell Latitude 7490 Intel Core i7",
        "description": "Dell Latitude 7490 Intel Core i7-8650U 14-inch GHD Windows 10 Pro, Business Laptop (16GB RAM 256GB SSD) (Renewed)",
        "price": 1200,
        "discountPercentage": 13,
        "rating": 4.7,
        "stock": 94,
        "brand": "Dell",
        "images": [
          "./image/dell-win.png",
          "./image/dell-win2.png",
          "./image/dell-win3.png"
        ]
      },
      {
        "id": 8,
        "category": "Windows",
        "title": "Lenovo IdeaPad",
        "description": "Lenovo IdeaPad Gaming 3i 15.6” IPS 120Hz, FHD, Intel Core i7-12700H, 8GB RAM, 512 SSD, RTX3050Ti, Win 11 - 82S9006MCC",
        "price": 1234,
        "discountPercentage": 13,
        "rating": 3,
        "stock": 90,
        "brand": "Lenovo",
        "images": [
          "./image/len-win.png",
          "./image/len-win2.png",
          "./image/len-win3.png"
        ]
      },
      {
        "id": 9,
        "category": "Windows",
        "title": "Acer Aspire 5",
        "description": "Acer Aspire 5, 17.3 inches FHD IPS, Intel Core i5-1135G7, 8GB DDR4, 512GB SSD, Intel Iris Xe, Win 11, Silver Laptop, A517-52-54MZ",
        "price": 759,
        "discountPercentage": 11,
        "rating": 4.2,
        "stock": 200,
        "brand": "Acer",
        "images": [
        "./image/acer-windows.png",
        "./image/acer-windows2.png",
        "./image/acer-windows3.png"
        ]
      },
      {
        "id": 10,
        "category": "Macbooks",
        "title": "2021 Apple MacBook Pro 32gb ",
        "description": "2021 Apple MacBook Pro (16-inch, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey - English",
        "price": 4399,
        "discountPercentage": 13,
        "rating": 4.7,
        "stock": 350,
        "brand": "Apple",
        "images": [
        "./image/id1.png",
        "./image/id1 (2).png",
        "./image/id1 (3).png"
        ]
      },
      {
        "id": 11,
        "category": "Windows",
        "title": "LG gram 16 Inch",
        "description": "LG gram 16 Inch Laptop with 16:10 IPS WQXGA (2560 x 1600) Display, 16Z95P-K.AP78A8, i7-1195G7 | 16GB RAM | 1TB SSD, Obsidian Black",
        "price": 1799,
        "discountPercentage": 5,
        "rating": 4.5,
        "stock": 108,
        "brand": "Apple",
        "images": [
          "./image/lg-win.png",
          "./image/lg-win2.png",
          "./image/lg-win3.png"
        ]
      },
      {
        "id": 12,
        "category": "Chromebooks",
        "title": "Acer Chromebook 315",
        "description": "Acer Chromebook 315, 15.6 inches HD Widescreen, Intel Celeron N4020, 4GB LPDDR4, 64GB eMMC, Chrome OS, CB315-3H-C0UU",
        "price": 249,
        "discountPercentage": 14,
        "rating": 4.2,
        "stock": 94,
        "brand": "Acer",
        "images": [
        "./image/acer-windows.png",
        "./image/acer-windows2.png",
        "./image/acer-windows3.png"
        ]
      },
      {
        "id": 13,
        "category": "Chromebooks",
        "title": "Acer Convertible Chromebook",
        "description": "ASUS VivoBook Flip 14 Thin and Light 2-in-1 Laptop, 14” HD Touch, Intel Celeron N4020, 4GB RAM, 128GB Storage,Windows 10 Home in S Mode + includes Microsoft 365 Personal 1-year, J401MA-AB02T-CA",
        "price": 449,
        "discountPercentage": 28,
        "rating": 4.3,
        "stock": 94,
        "brand": "Acer",
        "images": [
        "./image/acer-windows.png",
        "./image/acer-windows2.png",
        "./image/acer-windows3.png"
        ]
      },
      {
        "id": 14,
        "category": "Chromebooks",
        "title": "ASUS VivoBook Flip 14",
        "description": "ASUS Vivobook Flip 14 Ultra Slim Convertible Laptop, 14” Full HD, AMD R7-3700U Processor, Radeon RX Vega 10 graphics, 12GB RAM, 512GB PCIe SSD, Windows 10 Pro - UM462DA-AB71-CA, Light Grey",
        "price": 399,
        "discountPercentage": 14,
        "rating": 4.1,
        "stock": 94,
        "brand": "Asus",
        "images": [
          "./image/asus-win.png",
          "./image/asus-win2.png",
          "./image/asus-win3.png"
        ]
      },
      {
        "id": 15,
        "category": "Gaming-Laptops",
        "title": "Acer Nitro 5",
        "description": "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 inch FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard",
        "price": 1171,
        "discountPercentage": 14,
        "rating": 4.4,
        "stock": 200,
        "brand": "Acer",
        "images": [
          "./image/acer-gl.png",
          "./image/acer-gl2.png",
          "./image/acer-gl3.png"
        ]
      },
      {
        "id": 16,
        "category": "Gaming-Laptops",
        "title": "Asus ROG Zephyrus M16",
        "description": "Asus ROG Zephyrus M16 (2022) Gaming Laptop, 16” 165Hz IPS Type WQXGA 16:10 Display, GeForce RTX 3070 Ti, Intel Core i9-12900H, 32GB DDR5, 1TB PCIe SSD, Thunderbolt 4, Windows 11 Pro, GU603ZW-XS91-CA",
        "price": 3299,
        "discountPercentage": 5,
        "rating": 3.7,
        "stock": 200,
        "brand": "Asus",
        "images": [
          "./image/asus-gl.png",
          "./image/asus-gl2.png",
          "./image/asus-gl3.png"
        ]
      },
      {
        "id": 17,
        "category": "Gaming-Laptops",
        "title": "ASUS ROG Strix G15",
        "description": "ASUS ROG Strix G15 (2022) Gaming Laptop, 15.6” 165Hz IPS Type WQHD Display, NVIDIA GeForce RTX 3060, AMD Ryzen 7 6800H, 16GB DDR5, 1TB PCIe SSD, RGB Keyboard, Windows 11 Home, G513RM-AS71-CA",
        "price": 1899,
        "discountPercentage": 5,
        "rating": 4.1,
        "stock": 200,
        "brand": "Asus",
        "images": [
        "./image/asus-gl.png",
        "./image/asus-gl2.png",
        "./image/asus-gl3.png"
        ]
      },
      {
        "id": 18,
        "category": "2-in-1 Laptops",
        "title": "HP Envy x360 13-inch",
        "description": "HP Envy x360 13-inch Convertible Laptop, AMD Ryzen 7 5800U Processor, AMD Radeon Graphics, 16 GB RAM, 512 GB SSD, Windows 11 Pro (13-ay1006ca, Nightfall Black Aluminum)",
        "price": 1275,
        "discountPercentage": 5,
        "rating": 3.1,
        "stock": 200,
        "brand": "HP",
        "images": [
          "./image/hp-win.png",
          "./image/hp-win2.png",
          "./image/hp-win3.png"
        ]
      },
      {
        "id": 19,
        "category": "2-in-1 Laptops",
        "title": "Samsung Galaxy Book Pro 360",
        "description": "Samsung Galaxy Book Pro 360 13.3 inches AMOLED Touchscreen Convertible Laptop with S-Pen - Intel i5, 8GB DDR4, 512GB SSD, Windows 11 Home",
        "price": 948,
        "discountPercentage": 13,
        "rating": 4.1,
        "stock": 100,
        "brand": "Samsung",
        "images": [
          "./image/samsung-win.png",
          "./image/samsung-win2.png",
          "./image/samsung-win3.png"
        ]
      }
    ],
    "desktops": [
      {
        "id": 1,
        "category": "Towers",
        "title": "CyberpowerPC Gamer Xtreme ",
        "description": "CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11) Black",
        "price": 1311,
        "discountPercentage": 1,
        "rating": 4.6,
        "stock": 94,
        "brand": "CyberpowerPC",
        "images": [
          "./image/cybertower.png",
          "./image/cybertower2.png",
          "./image/cybertower3.png"
        ]
      },
      {
        "id": 2,
        "category": "Towers",
        "title": "Lenovo ThinkCentre M900",
        "description": "Lenovo ThinkCentre M900 SFF Desktop Computer, Intel Core i7-6700 Upto 4.0GHz, 32GB RAM, 1TB SSD, 4K 2-Monitor Support DisplayPort, HDMI, DVD-RW, AC Wi-Fi, Bluetooth, TDL - Windows 10 Pro (RENEWED)",
        "price": 365,
        "discountPercentage": 1,
        "rating": 4.1,
        "stock": 100,
        "brand": "Lenovo",
        "images": [
          "./image/lenovo-tc.png",
          "./image/lenovo-tc2.png"
        ]
      },
      {
        "id": 3,
        "category": "Towers",
        "title": "ROG Strix G10DK",
        "description": "ROG Strix G10DK Gaming Desktop PC, AMD Ryzen™ 5 3600X, GeForce® RTX3060, 16GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 5, Windows 11 Home-G10DK(SPNL)-BBR5X60-CB, Grey",
        "price": 1799,
        "discountPercentage": 2,
        "rating": 4.2,
        "stock": 150,
        "brand": "Asus",
        "images": [
          "./image/rog-strix.png",
          "./image/rog-strix2.png",
          "./image/rog-strix3.png"
        ]
      },
      {
        "id": 4,
        "category": "Minis",
        "title": "Beelink U59 Mini PC ",
        "description": "Beelink U59 Mini PC with N5105 W-11 Pro,16G DDR4 500G SSD Mini Desktop Computer, 2.4G/5G WiFi, Dual NIC LAN, BT4.0, Dual HDMI Business Mini Computer, Support Auto Power On/Pfsense Router",
        "price": 359,
        "discountPercentage": 5,
        "rating": 4.3,
        "stock": 10,
        "brand": "Beelink",
        "images": [
          "./image/beelink-mini.png",
          "./image/beelink-mini2.png"
        ]
      },
      {
        "id": 5,
        "category": "Minis",
        "title": "Beelink SER5 Ryzen",
        "description": "Beelink SER5 Ryzen Mini PC, Mini Computer AMD Ryzen 5 5560U(7nm, 6C/12T) up to 4.0GHz, 16GB DDR4 RAM 500GB NVME SSD, 4K@60Hz Dual Screen Display, Mini Gaming Computer",
        "price": 549,
        "discountPercentage": 7,
        "rating": 4.3,
        "stock": 50,
        "brand": "Beelink",
        "images": [
        "./image/beelink-mini.png",
        "./image/beelink-mini2.png"
        ]
      },
      {
        "id": 6,
        "category": "Minis",
        "title": "2020 Apple Mac Mini",
        "description": "2020 Apple Mac Mini (Apple M1 chip with 8‑Core CPU and 8‑Core GPU, 8GB RAM, 256GB SSD)",
        "price": 899,
        "discountPercentage": 10,
        "rating": 4.5,
        "stock": 94,
        "brand": "Apple",
        "images": [
          "./image/mac-mini.png",
          "./image/mac-mini2.png"
        ]
      },
      {
        "id": 7,
        "category": "All-in-one",
        "title": "2020 Apple iMac",
        "description": "2020 Apple iMac (27-Inch, 3.8GHz 8-Core 10th-Generation Intel Core I7 Processor, 8GB RAM, 512GB SSD) - English",
        "price": 2849,
        "discountPercentage": 3,
        "rating": 4.7,
        "stock": 94,
        "brand": "Apple",
        "images": [
          "./image/apple-aio.png",
          "./image/apple-aio2.png"
        ]
      },
      {
        "id": 8,
        "category": "All-in-one",
        "title": "HP 24 inch All-in-One Desktop PC",
        "description": "HP 24 inch All-in-One Desktop PC with FHD IPS Micro-Edge Touch Display, Anti-Glare, 250 nits (24-cb0009)",
        "price": 1029,
        "discountPercentage": 3,
        "rating": 4.8,
        "stock": 5,
        "brand": "HP",
        "images": [
          "./image/hp-aio/png",
          "./image/hp-aio2/png"
        ]
      },
      {
        "id": 9,
        "category": "All-in-one",
        "title": "Acer Aspire C27-962-UA91 AIO Desktop",
        "description": "Acer Aspire C27-962-UA91 AIO Desktop, 27 inches Full HD Non-Touch Display, Intel Core i5-1035G1, 12GB DDR4 SDRAM, 512GB SSD, Windows 10 Home",
        "price": 1735,
        "discountPercentage": 10,
        "rating": 4.4,
        "stock": 10,
        "brand": "Acer",
        "images": [
          "./image/acer-aio.png",
          "./image/acer-aio2.png",
          "./image/acer-aio3.png"
        ]
      }
    ]
  }`

  var user = 'Vikas'

cart = [];
// Save cart
function saveCart() {
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Load cart
function loadCart() {
  cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  document.getElementById("cartProCount").innerHTML = cart.length
  console.log(cart)
}

if (sessionStorage.getItem("shoppingCart") != null) {
  loadCart();
}

function addToCart(title, id, prodType) {
  var cartItem = [];
  var userName = localStorage.getItem("uname")
  if (userName != "Guest") {
    localStorage.setItem("cartprodtitle", title);
    localStorage.setItem("cartprodid", id);
    localStorage.setItem("cartProdType", prodType);
    cartItemtitle = localStorage.getItem("cartprodtitle")
    cartItemid = localStorage.getItem("cartprodid")
    cartItemtype = localStorage.getItem("cartProdType")
    cartItem.push(cartItemtype);
    cartItem.push(cartItemtitle);
    cartItem.push(cartItemid)
    cart.push(cartItem)
    document.getElementById("cartProCount").innerHTML = cart.length
    localStorage.setItem("cartCountforIndex", cart.length);
    window.alert("Product Added to Cart successfully")
    saveCart()
    loadCart()
    if (document.getElementById('cartCard1').style.display == 'none') {
      document.getElementById('cartCard1').style.display = 'block'
    }
    if (document.getElementById('cartCard2').style.display == 'none') {
      document.getElementById('cartCard2').style.display = 'block'
    }
  } else {
    document.getElementById('id01').style.display = 'block'
  }
}

function removeFromCart(id) {
  document.getElementById(id).style.display = 'none'
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

let data = JSON.parse(products)
var container = document.getElementById("container")
container.innerHTML = ''
data.laptops.forEach(function (element) {
  var cardData = `
                                    <div class='product_card'>
                                        <center><img style='width: 80%; height: 140px;' src='${element.images[0]}'>
                                            <h3 id='proName'>${element.title}</h3>
                                            <p style='color: red;''>${element.discountPercentage}% off</p>
                                            <p id='descrip'>${element.description}</p>
                                            <h3>Price: $${element.price}</h3>
                                            <button class='cartButton' onclick='addToCart(${element.title, element.id},"laptops")'>Add to Cart</button>
                                        </center>
                                    </div>
                                `
  container.innerHTML += cardData
});


function search_product() {
  let input = document.getElementById('searchbar').value
  // input = input.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = ""
  for (i = 0; i < data.length; i++) {
    let obj = data[i];
    if (obj.Name.toLowerCase().includes(input)) {
      const elem = document.createElement("li")
      elem.innerHTML = `${obj.Name} - ${obj.Color}`
      x.appendChild(elem)
    }
  }
}


var modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function () {
  var userName = localStorage.getItem("uname")
  document.getElementById("loggedUser").innerHTML = "Welcome " + userName
}

function getLoggedInUser(loginForm) {
  var userName = 'Vikas'
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

function getsignedupUser(signupForm) {
  window.alert("Hi " + user + "! You have successfully Registered")
  document.getElementById('id02').style.display = 'none'
}

function modelCheck() {
  var userName = localStorage.getItem("uname")
  if (userName != "Guest") {
    location.href = "profile.html"
  } else {
    document.getElementById('id01').style.display = 'block'
  }
}