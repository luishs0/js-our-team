let teamArray = [
    {
        name: "Wayne Barnett",
        roll: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        roll: "Chief Editor",
        img: "wangela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        roll: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        roll: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        roll: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        roll: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];

const containerElement = document.querySelector(".container");

for (let i = 0; i < teamArray.length; i++) {
    const person = teamArray[i];
    console.log(person.name);
    console.log(person.roll);
    console.log(person.img);
    console.log("------------");
};

for (let j = 0; j < teamArray.length; j++) {
    const personString = teamArray[j];
    containerElement.innerHTML += `<div class="mt"> ${personString.name},  ${personString.roll},  ${personString.img} </div>`
}