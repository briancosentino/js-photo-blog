/* CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :wink:)
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Note
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :slightly_smiling_face:
  */

//select DOM elements

const rowEl = document.querySelector('.row')
const overlayEl = document.getElementById('overlay')

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(res=>res.json())
.then(data=>{
    data.forEach(data=>{
        /* const col = document.createElement('div')
        col.classList.add('col-12', 'col-md-6', 'd-none', 'col-lg-4') */
        rowEl.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
                    <div id="card" class="card rel  m-auto border-0 rounded-0 ">
                        <img src=${data.url} alt="">
                        <div class="content-wrapper mt-2">
                            <p class="mb-0 ">${data.date}</p>
                            <h2 class="fw-semibold mb-0" >${data.title}</h2>
                        </div>
                    </div>
                </div>`
            
          /*   rowEl.innerHTML += col.innerHTML = `<div id="card" class="card rel  m-auto border-0 rounded-0 ">
                        <img src=${data.url} alt="">
                        <div class="content-wrapper mt-2">
                            <p class="mb-0 ">${data.date}</p>
                            <h2 class="fw-semibold mb-0" >${data.title}</h2>
                        </div>
                    </div>`
         */
        
    })
    const cards = rowEl.querySelectorAll('.card')
    cards.forEach(card=>{
        card.addEventListener('click', ()=>{
            const imageUrl = card.querySelector('img')
            overlayEl.innerHTML = `<div class="modal-img">
                    <img src=${imageUrl.src} alt="">
                 </div>`
            overlayEl.classList.remove('d-none');

        })
    })
    
    
}).catch(err=> console.log(err))



