let box =document.querySelector(".box");
let btn = document.querySelector(".button");


const apiKey = 'poulT60TQGGGQ9RCwi1Ucg==NwFSWMLPR9l402LL';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});


btn.addEventListener("click" , (event) =>{
   
})
