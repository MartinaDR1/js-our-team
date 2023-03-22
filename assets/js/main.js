// Creo array con i dati del team
const teams =[
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        foto:'./assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'./assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto:'./assets/img/walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'./assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'./assets/img/scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto:'./assets/img/barbara-ramos-graphic-designer.jpg'
    } 
]

//Seleziono elemento della DOM
const containerEl = document.querySelector('.container');
/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

//Ciclo all'interno dell'array 
for(let i=0;i <teams.length;i++){
    const member= teams[i];
    console.log(member);

    const markup = `
    <div class="col">
        <div class="card">
            <img src="${member.foto}" alt=""> 
        </div>
    </div>`

    containerEl.innerHTML += markup
}



