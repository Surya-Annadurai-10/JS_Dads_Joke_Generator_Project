let box =document.querySelector(".box");
let btn = document.querySelector(".button");
let imgBox = document.querySelector(".img-box");
let arr = [
    'https://media3.giphy.com/media/bvGC3uRuCAwA8/200.webp?cid=ecf05e47jtsi7woll7zplb9s9ks37sbl5q4og3ujy8m1nyed&ep=v1_gifs_search&rid=200.webp&ct=g',
    'https://media3.giphy.com/media/3i7zenReaUuI0/giphy.webp?cid=ecf05e47zu4jb700179jcckseilm70mi19beh0aiscwwboqw&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    'https://media1.giphy.com/media/ZechFo0yBIQpEve1Sm/200.webp?cid=790b7611hlkxuwribnsd6c4k9cvgmwzjkzy3jyuaxhgsshbe&ep=v1_gifs_search&rid=200.webp&ct=g',
    ''
]

let apiKey = 'poulT60TQGGGQ9RCwi1Ucg==NwFSWMLPR9l402LL';
let apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

function click(){
    box.innerText = "Updating...."
    btn.innerText = "Loading..."
    fetch(apiUrl,{
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey
     },
    contentType : "application/json"
})
.then((response )=>  response.json())
.then((data) => {
    // console.log(data[0].joke);
    box.innerText = data[0].joke;
     imgBox.src = `${arr[Math.floor(Math.random()* arr.length)]}`
    btn.innerText = "Tell Me a Joke"
   


})
.catch((error) => {
    console.log('Error:', error.message);
    box.innerText =`Error : ${error.message}, Please Try Again later !!😑`;
    btn.innerText = "Tell Me a Joke"

});

// let img = document.createElement("img")
// imgBox.appendChild(img);
console.log(Math.floor(Math.random()* arr.length))

// arr.forEach((value) =>{
//     let img = document.createElement("img")
//     img.src = ``
// })

}

btn.addEventListener("click" , click);



