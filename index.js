let bd="BoundaryGate";
let product=[
    {
        id:1,
        category:bd,
        model:"M31",
        path:"./public/bd/bd2.jpg",
        likes:10000,
    },
    {
        id:2,
        category:bd,
        model:"M32",
        path:"./public/bd/bd3.jpg",
        likes:10000,
    },
    {
        id:3,
        category:bd,
        model:"M33",
        path:"./public/bd/bd4.jpg",
        likes:10000,
    },
    {
        id:4,
        category:bd,
        model:"M34",
        path:"./public/bd/bd5.jpg",
        likes:10000,
    },
    {
        id:5,
        category:bd,
        model:"M35",
        path:"./public/bd/bd6.jpg",
        likes:10000,
    },
    {
        id:6,
        category:bd,
        model:"M36",
        path:"./public/bd/bd1.jpg",
        likes:10000,
    },
    {
        id:7,
        category:bd,
        model:"M37",
        path:"./public/bd/bd7.jpg",
        likes:10000,
    },
    {
        id:8,
        category:bd,
        model:"M38",
        path:"./public/bd/bd8.jpg",
        likes:10000,
    },
    {
        id:9,
        category:bd,
        model:"M32",
        path:"./public/bd/bd9.jpg",
        likes:10000,
    },
    {
        id:10,
        category:bd,
        model:"M310",
        path:"./public/bd/bd10.jpg",
        likes:10000,
    },
    {
        id:11,
        category:bd,
        model:"M311",
        path:"./public/bd/bd11.jpg",
        likes:10000,
    },
    {
        id:12,
        category:bd,
        model:"M312",
        path:"./public/bd/bd12.jpg",
        likes:10000,
    },
    {
        id:13,
        category:bd,
        model:"M313",
        path:"./public/bd/bd13.jpg",
        likes:10000,
    },
    {
        id:14,
        category:bd,
        model:"M314",
        path:"./public/bd/bd14.jpg",
        likes:10000,
    },
    {
        id:15,
        category:bd,
        model:"M315",
        path:"./public/bd/bd1.webp",
        likes:10000,
    },
    {
        id:16,
        category:bd,
        model:"M316",
        path:"./public/bd/bd2.webp",
        likes:10000,
    },
]
let mainEle=document.getElementById('main');
let draele=document.getElementById('favitemdrawer');
let favouriteid=[];
let filteredproduct=[];

function onLoad(){
    renderData(product)
    fetchData();
    favouriteid.forEach((id)=>{
        let likeBtnEle=document.getElementById(id);
        likeBtnEle.classList.add("fa-solid");
        likeBtnEle.classList.add("red");
    })    
}
function renderData(pro){
    pro.forEach(obj=>{
        mainEle.innerHTML+=`<div class="post" >
                <div class="posttop">
                    <h4>${obj.category}</h4>
                    <h4>Model: ${obj.model}</h4>
                </div>
                <div class="postbody" onclick="closeE()">
                    <img src="${obj.path}" alt="">
                </div>
                <div class="postbottom">
                    <i class="incsize fa-regular fa-thumbs-up" id="${obj.id}" onclick="onLike(${obj.id})"></i>
                    <p onclick="closeD()">Order</p>
                </div>
            </div>`
        })
}
onLoad();


const menuBarEle=document.getElementById('menu-bar');
const menuMobileEle=document.querySelector('.menuMobile');
menuBarEle.addEventListener("click",()=>{openD()})
function openD(){
    menuMobileEle.classList.toggle('showMenu');
    draele.innerHTML="";
    favouriteid.forEach((ele)=>{
        // console.log(product[ele-1])
        draele.innerHTML+=`
        <a href="#${ele-1}"><p onclick="closeD()"><img src="${product[ele-1].path}" alt=""></p></a>`
    })
}
function closeD(){
    menuMobileEle.classList.toggle('showMenu');
}
function closeE(){
    menuMobileEle.classList.remove('showMenu');
}


function filter(){
    console.log("filter")
}



function onLike(id){    
    let likeBtnEle=document.getElementById(id);
    if(!likeBtnEle.classList.contains("fa-solid") )
    {
        likeBtnEle.classList.toggle("fa-solid");
        likeBtnEle.classList.toggle("red");
        favouriteid.unshift(id);
    }
    else
    {
        likeBtnEle.classList.remove("fa-solid");
        likeBtnEle.classList.remove("red");
        const index = favouriteid.indexOf(id);
        if (index > -1) { 
            favouriteid.splice(index, 1);
        }
    }
    updateData()
}
function fetchData(){
    (JSON.parse(localStorage.getItem("favid")))?
    (favouriteid=JSON.parse(localStorage.getItem("favid"))):(
        localStorage.setItem("favid",JSON.stringify(favouriteid))
    )
}
function updateData(){
    localStorage.setItem("favid",JSON.stringify(favouriteid))
}


//find error here
const topEle=document.getElementsByClassName('hc')
console.log(topEle)
topEle.forEach((item)=>{
     item.addEventListener('click',filter() )
 }
)