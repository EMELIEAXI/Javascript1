let nedrakning = document.getElementById("nedräknare");

let startknapp = document.getElementById("startknapp");

const poangraknare = document.getElementById("poangraknare");
let poang = 0

let oppetkort1 = null;
let oppetkort2 = null;

const bilderArray = [
    "img1", "img1",
    "img2", "img2",
    "img3", "img3",
    "img4", "img4",
    "img5", "img5",
    "img6", "img6"
];
function blandaArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function uppdateraKort() {
    const blandadeBilder = blandaArray([...bilderArray]); // Skapa en kopia och blanda
    const kortList = document.querySelectorAll(".card");
    
    kortList.forEach((kort, index) => {
        const backview = kort.querySelector(".view.back-view img");
        backview.src = `img/${blandadeBilder[index]}.jpg`;
        backview.id = blandadeBilder[index];
    });
}

function vändAllaKortTillBaksidan() {
    const kortList = document.querySelectorAll(".card");
    kortList.forEach((kort) => {
        const backview = kort.querySelector(".view.back-view");
        const frontview = kort.querySelector(".view.front-view");
        backview.style.display = "none";
        frontview.style.display = "block";
    });
}

startknapp.addEventListener("click", function countdown() {
    const tidElement = document.getElementById("tid");
    let seconds = parseInt(tidElement.value, 10); // Hämta värdet och konvertera till ett heltal
    
    function tick() {
        let nedraknare = document.getElementById("nedraknare");
        seconds--;
        nedraknare.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            // När tiden är slut
            vändAllaKortTillBaksidan(); // Vänd tillbaka alla kort
            
            // Uppdatera "Starta Om"-knappen
            document.getElementById("startknapp").innerHTML = `
                <div class="Btn" id="ResendBtn">
                    <button type="button">Starta Om</button>
                </div>
            `;
            
            // Lägg till event för "Starta Om"-knappen
            document.getElementById("ResendBtn").addEventListener("click", () => {
                poang = 0; // Nollställ poängen
                poangraknare.textContent = poang;
                vändAllaKortTillBaksidan(); // Vänd tillbaka korten
                uppdateraKort(); // Blanda och uppdatera bilder
                countdown(); // Starta nedräkningen igen
            });
        }
    }
    tick();
});


// Hämta listan som innehåller korten
const memokort = document.querySelector(".cards");

// Lägg till en klickhändelse på container-elementet
memokort.addEventListener("click", function (event) {
    // Kontrollera om klicket kom från ett kort
    const kort = event.target.closest(".card"); // Hitta närmsta föräldern med klassen "card"
    
    if (kort) {
        // Hitta back-view och front-view i det klickade kortet
        const backview = kort.querySelector(".view.back-view");
        const frontview = kort.querySelector(".view.front-view");

        // Växla visning
        if (backview.style.display === "block") {
                // Om baksidan visas, visa framsidan istället
                backview.style.display = "none";
                frontview.style.display = "block";
            } else {
                // Om framsidan visas, visa baksidan istället
                backview.style.display = "block";
                frontview.style.display = "none";
            }

        if (!oppetkort1) {
            oppetkort1 = kort;
        }
        else if (!oppetkort2) {
            oppetkort2 = kort;
        }
        setTimeout(() => {
        if (oppetkort1.querySelector(".view.back-view img").id === oppetkort2.querySelector(".view.back-view img").id) {
            poang++;
            poangraknare.textContent = poang;
        }
        else {
            // Kort matchar inte, vänd tillbaka
            oppetkort1.querySelector(".view.back-view").style.display = "none";
            oppetkort1.querySelector(".view.front-view").style.display = "block";
            oppetkort2.querySelector(".view.back-view").style.display = "none";
            oppetkort2.querySelector(".view.front-view").style.display = "block";
        }
        oppetkort1 = null;
        oppetkort2 = null;
        }, 1000); 
    }
});