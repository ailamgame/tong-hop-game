// js/app.js

const gameGrid = document.getElementById("gameGrid");

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
                <div class="game-text">
                    <h3>${game.title}</h3>
                    <span>Dành cho: ${platformText}</span>
                </div>
                <button class="play-btn"></button>
            </div>
        `;

        // Click nút Play -> chuyển trang
        const playBtn = card.querySelector(".play-btn");
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (game.link) {
                window.location.href = game.link;
            }
        });

        gameGrid.appendChild(card);
    });
}

/* =========================
   INIT
========================= */

renderGames();