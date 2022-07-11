
const btnApidenJsonGetir=document.getElementById('btn-apiden-json-getir');
const btnJsonEkle=document.getElementById('btn-json-veri-ekle');


btnApidenJsonGetir.addEventListener('click',getJsonfromApi);
btnJsonEkle.addEventListener('click',jsonVeriEkle);

const sonucDiv=document.getElementById('sonuc');



function getJsonfromApi(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(sonuc=>ekranaYazdir(sonuc));
}

function ekranaYazdir(data){
    let cikti='';
    data.forEach(user=>{
        cikti+=`<li>${user.name}</li>`;
    });
    sonucDiv.innerHTML=cikti;
}


//Promise ile kullanım
/* function jsonVeriEkle(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'deneme',
            body:'body alanı',
            userId:5
        }),
        headers:{'Content-Type':'application/json'}

    })
    .then(response=>response.json())
    .then(sonuc=>console.log(sonuc));
} */   

//Async-Await kullanım
async function jsonVeriEkle(e){
    e.preventDefault();

    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'deneme',
            body:'body alanı',
            userId:5
        }),
        headers:{'Content-Type':'application/json'}

    })
    
    const sonuc=await response.json();
    console.log(sonuc);
} 
















