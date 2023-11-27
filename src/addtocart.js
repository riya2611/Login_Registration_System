// let product = [
//     {
//         id: 0,
//         image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
//         title: 'A-line dress',
//         price: 500,
//     },
//     {
//         id: 0,
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTbwP0EWffPbB9WUsaK9U5X3APkgBHQV95xNxIUT5WReSplz33kUHZyKxZOJj1t58gwA&usqp=CAU',
//         title: 'A-line dress',
//         price: 600,
//     },
//     {
//         id: 0,
//         image: 'https://rukminim2.flixcart.com/image/550/650/xif0q/kurta/7/w/r/s-ss-90-femvy-original-imags5gw8vp3rzrf.jpeg?q=90&crop=false',
//         title: 'A-line dress',
//         price: 728,
//     },
//     {
//         id: 0,
//         image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
//         title: 'A-line dress',
//         price: 820,
//     }
// ];

// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById('root').innerHTML = categories.map((item)=>
//     {
//         var{image, title, price} = item;
//         return(
//             `<div class='box'>
//                 <div class='img-box'>
//                     <img class='images' src=${image}></img>
//                 </div>
//                 <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>${price}.00</h2>` + 
//                 "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//                 `</div>
//             </div>`
//         )
//     }).join('')


const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "PRODUCT 1",
        "image":"1.png",
        "price": 2000
    },
    {
        "id": 2,
        "name": "PRODUCT 2",
        "image":"2.png",
        "price": 2200
    },
    {
        "id": 3,
        "name": "PRODUCT 3",
        "image":"3.png",
        "price": 2400
    },
    {
        "id": 4,
        "name": "PRODUCT 4",
        "image":"4.png",
        "price": 2600
    },
    {
        "id": 5,
        "name": "PRODUCT 5",
        "image":"5.png",
        "price": 1400
    },
    {
        "id": 6,
        "name": "PRODUCT 6",
        "image":"6.png",
        "price": 1800
    }
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        // console.log(listCards);
        listCards[key].quantity = 1;
        // console.log(listCards[key].quantity);
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}