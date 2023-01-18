const _TeamMembers = [
    
    {

        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        stringa : 'wayne-barnett-founder-ceo.jpg'

    }, 

    {

        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        stringa : 'angela-caroll-chief-editor.jpg'

    },

    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        stringa : 'walter-gordon-office-manager.jpg'

    },

    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        stringa : 'angela-lopez-social-media-manager.jpg'

    },

    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        stringa : 'scott-estrada-developer.jpg'

    },

    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        stringa : 'barbara-ramos-graphic-designer.jpg'

    }
]

for (i = 0; i < _TeamMembers.length; i++) {

    const _Box = document.getElementById('box');
    console.log(i + 1 + ' - ' + ' Nome: ' + _TeamMembers[i].nome + ', Ruolo: ' + _TeamMembers[i].ruolo + ', Stringa: ' + _TeamMembers[i].stringa);
    const _P = document.createElement('p');
    _P.innerHTML += i + 1 + ' - ' + ' Nome: ' + _TeamMembers[i].nome + ', Ruolo: ' + _TeamMembers[i].ruolo + ', Stringa: ' + _TeamMembers[i].stringa;
    _Box.append(_P);
    
}
