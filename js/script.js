let teamArray = [
    {
        name: "Wayne Barnett",
        roll: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        roll: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
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

// for (let j = 0; j < teamArray.length; j++) {
//     const personString = teamArray[j];
//     containerElement.innerHTML += `<div class="mt"> ${personString.name},  ${personString.roll},  <img src="img/${personString.img}" alt=""> </div>`
// }

for (let k = 0; k < teamArray.length; k++) {
    const personCards = teamArray[k];

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardDiv.append(cardImg);

    const cardTxt = document.createElement("div");
    cardTxt.classList.add("card-txt");
    cardDiv.append(cardTxt);

    const cardTxtName = document.createElement("div");
    cardTxtName.classList.add("card-txt-name");
    cardTxt.append(cardTxtName);

    const cardTxtRoll = document.createElement("div");
    cardTxtRoll.classList.add("card-txt-roll");
    cardTxt.append(cardTxtRoll);

    containerElement.append(cardDiv);

    cardImg.innerHTML = `<img src="img/${personCards.img}" alt="">`;
    cardTxtName.innerHTML = `${personCards.name}`;
    cardTxtRoll.innerHTML = `${personCards.roll}`;
}