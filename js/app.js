// js/app.js

const gameGrid = document.getElementById("gameGrid");
const modal = document.getElementById("gameModal");
const closeModal = document.getElementById("closeModal");

const modalMainImage = document.getElementById("modalMainImage");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");

const playBtn = document.querySelector(".modal-info .play-now");
const tutorialBtn = document.getElementById("tutorialBtn");

const heroContent = document.querySelector(".hero-content");
const heroImage = document.getElementById("heroImage");

let currentGame = null;

/* =========================
   RENDER GAME LIST
========================= */

function renderGames() {
    gameGrid.innerHTML = "";

    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        const platformText = Array.isArray(game.platform)
            ? game.platform.join(" & ")
            : game.platform;

        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <span>Dành cho: ${platformText}</span>
            </div>
        `;

        card.addEventListener("click", () => openModal(game));

        gameGrid.appendChild(card);
    });
}

/* =========================
   RENDER HERO (GAME MỚI NHẤT)
========================= */

// function renderHeroGame() {
//     if (!games || games.length === 0) return;

//     // Lấy game mới nhất theo id
//     const latestGame = [...games].sort((a, b) => b.id - a.id)[0];

//     const platformText = Array.isArray(latestGame.platform)
//         ? latestGame.platform.join(" & ")
//         : latestGame.platform;

//     heroContent.innerHTML = `
//         <span class="badge-new">
//             <span class="badge-icon">🎮</span>
//             Game Mới Nhất
//         </span>

//         <h1>${latestGame.title.toUpperCase()}</h1>

//         <h3 class="hero-tagline">
//             Dành cho: ${platformText}
//         </h3>

//         <p>
//             ${latestGame.description}
//         </p>

//         <div class="hero-buttons">
//             <a href="${latestGame.link}" target="_blank" rel="noopener noreferrer"
//                 class="play-now">
//                 CHƠI NGAY
//             </a>
//         </div>
//     `;

//     if (heroImage) {
//         heroImage.src = latestGame.img;
//         heroImage.alt = latestGame.title;
//     }
// }

/* =========================
   OPEN MODAL
========================= */

function openModal(game) {
    currentGame = game;

    modalMainImage.src = game.img;
    modalMainImage.alt = game.title;
    modalTitle.textContent = game.title;
    modalGenre.textContent = game.genre;
    modalDescription.textContent = game.description;

    modalFeatures.innerHTML = "";
    game.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    playBtn.onclick = () => {
        if (game.link) {
            window.location.href = game.link;
        }
    };

    // if (game.tutorialVideo) {
    //     tutorialBtn.style.display = "inline-block";
    //     tutorialBtn.onclick = () => {
    //         window.open(game.tutorialVideo, "_blank");
    //     };
    // } else {
    //     tutorialBtn.style.display = "none";
    // }

    modal.style.display = "flex";
}

/* =========================
   CLOSE MODAL
========================= */

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* =========================
   INIT
========================= */

renderGames();
// renderHeroGame();