let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]

// ==========================================================
//         Neue Elemente erstellen und ins HTML schreiben
// ==========================================================

let divEl = document.querySelector("#content");
let winCounter = 0;
let looseCounter = 0;


function createNewQuestions(object) {

    console.log(divEl);
    //Neues <img> Element erstellen und in das <div> packen
    let newImgEl = document.createElement("img");
    newImgEl.src = data[object].url;
    divEl.appendChild(newImgEl);

    //Neues <p> Element erstellen und in das <div> packen für die Fragen
    let newP = document.createElement("p");
    newP.textContent = data[object].question;

    divEl.appendChild(newP);

    let divButton = document.createElement("div");
    divEl.appendChild(divButton);

    //Alle Antwortmöglichkeiten (Es ist jeweils ein Array)
    let allChoices = data[object].choice;
    console.log(allChoices);

    // Hole die richtige Antwort
    let theAnswer = data[object].answer;

    //Vom Array jeden einzelnen Antwortmöglichkeiten Wert in einen neuen <button> packen
    allChoices.forEach(choise => {
        let newButton = document.createElement("button");
        newButton.textContent = choise;
        divButton.appendChild(newButton);


        newButton.addEventListener("click", () => {
            let pAnswer = document.createElement("p");

            //Bedingungen für richtige & falsche Antworten

            console.log(object);
            if (newButton.textContent === theAnswer) {
                newButton.style.backgroundColor = "green";
                console.log("Richtig");
                pAnswer.textContent = "Richtig!"
                winCounter++;

            } else {
                newButton.style.backgroundColor = "red";
                console.log("falsch");
                pAnswer.textContent = "Falsch!"
                looseCounter++;
            }


            divEl.appendChild(pAnswer);
            //Sobald alle Objekte im Quiz abgefragt wurden, soll er das nicht mehr ausführen (Es sind 10 Objekte)
            if (object < 9) {
                setTimeout(() => {
                    //setze alles zurück
                    divEl.innerHTML = "";
                    objectPosition++;
                    createNewQuestions(objectPosition);
                }, 1000);

                // Am Ende: Wie viele richtige und falsche Antworten
            } else {
                pAnswer.textContent = `${winCounter} richige und  ${looseCounter} falsche.`
            }

        })

    })
}



let objectPosition = 0;
createNewQuestions(objectPosition);
console.log(objectPosition);



//Jedes Bild aus den Objekten holen und ins div packen
// data.forEach(object => {





//     // console.log(object);
//     //Neues <img> Element erstellen und in das <div> packen für die Bilder
//     let newImgEl = document.createElement("img");
//     newImgEl.src = object.url;
//     divEl.appendChild(newImgEl);

//     //Neues <p> Element erstellen und in das <div> packen für die Fragen
//     let newP = document.createElement("p");
//     newP.textContent = object.question;
//     divEl.appendChild(newP);

//     // Die <button> kommen in ein eigenes neues <div>
//     let divButton = document.createElement("div");
//     divEl.appendChild(divButton);

//     //Alle Antwortmöglichkeiten (Es ist jeweils ein Array)
//     let allChoices = object.choice;

//     //Vom Array jeden einzelnen Antwortmöglichkeiten Wert in einen neuen <button> packen
//     allChoices.forEach(choise => {
//         let newButton = document.createElement("button");
//         newButton.textContent = choise;
//         divButton.appendChild(newButton);

//         // Wenn der gedrückte Knopf die richtige oder falsche Antwort ist
//         newButton.addEventListener("click", () => {
//             if (newButton.textContent === theAnswer) {
//                 newButton.style.backgroundColor = "green";
//                 console.log("Richtig");
//             } else {
//                 newButton.style.backgroundColor = "red";
//                 console.log("falsch");
//             }



//         })

//     });
// });

// // ==========================================================
// //         Logik vom Quiz
// // ==========================================================

// //Welcher Knopf wurde ausgewählt?

