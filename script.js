const product=[
    {
        id:0,
        image:'Milk.webp',
        title:'Heritage Special Milk',
        price:40,
    },
    {
        id:1,
        image:'Banana.webp',
        title:'Banana Robusta 500 g',
        price:15,
    },
    {
        id:2,
        image:'Apple.webp',
        title:'Apple Royal Gala 4 Units',
        price:200,
    },
    {
        id:3,
        image:'Jam.webp',
        title:'Kissan Mixed Fruit Jam',
        price:70,
    },
    {
        id:4,
        image:'cake.webp',
        title:'Chocolate Cake',
        price:100,
    },
    {
        id:5,
        image:'Dates.webp',
        title:'LION Arabian Dates',
        price:110,
    }
];
const categories =[...new Set(product.map((item)=>{return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image, title, price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
)}).join('')
var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    confirm("Are u sure to delete?");
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="₹ "+0+".00";

    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image, title, price}=items;
            total=total+price;
            document.getElementById("total").innerHTML ="₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>"+
                `</div>`
            );
        }).join('');
    }
}