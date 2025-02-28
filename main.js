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

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(res=>res.json())
.then(data=>{
    data.forEach(data=>{
        rowEl.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
                    <div id="card" class="card rel  m-auto border-0 rounded-0 ">
                        <img src=${data.url} alt="">
                        <div class="content-wrapper mt-2">
                            <p class="mb-0 ">${data.date}</p>
                            <h2 class="fw-semibold mb-0" >${data.title}</h2>
                        </div>
                    </div>
                </div>`
    })
    
}).catch(err=> console.log(err))