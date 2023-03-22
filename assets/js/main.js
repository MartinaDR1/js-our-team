// Creo array con i dati del team
const teams =[
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg'
    } 
]

//Seleziono elemento della DOM
const containerEl = document.querySelector('.container');
/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

//Ciclo all'interno dell'array 
for(let i=0;i <teams.length;i++){
    const member= teams[i];

    containerEl.innerHTML +=` ${member.nome} ${member.ruolo} ${member.foto}`
    console.log(member.nome, member.ruolo, member.foto);
}



