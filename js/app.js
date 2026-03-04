const gameGrid = document.getElementById("gameGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

/* =========================
   RENDER GAME LIST
========================= */

// function renderGames() {
//     gameGrid.innerHTML = "";

//     games.forEach(game => {
//         const card = document.createElement("div");
//         card.classList.add("game-card");

//         const platformText = Array.isArray(game.platform)
//             ? game.platform.join(" & ")
//             : game.platform;

//         card.innerHTML = `
//             <img src="${game.img}" alt="${game.title}">
//             <div class="game-info">
//                 <div class="game-text">
//                     <h3>${game.title}</h3>
//                     <span>Dành cho: ${platformText}</span>
//                 </div>
//                 <button class="play-btn"></button>
//             </div>
//         `;

//         // Click nút Play -> chuyển trang
//         const playBtn = card.querySelector(".play-btn");
//         playBtn.addEventListener("click", (e) => {
//             e.stopPropagation();
//             if (game.link) {
//                 window.location.href = game.link;
//             }
//         });

//         gameGrid.appendChild(card);
//     });
// }

function renderGames() {
    gameGrid.innerHTML = "";

    const filteredGames = games.filter(game => {
        if (currentFilter === "all") return true;
        return game.type === currentFilter;
    });

    filteredGames.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        const platformText = Array.isArray(game.platform)
            ? game.platform.join(" & ")
            : game.platform;

        const type = (game.type || "other").toLowerCase();

        card.innerHTML = `
            <div class="type-badge ${type}">
                ${type === "app" ? "APP" : "GAME"}
            </div>

            <img src="${game.img}" alt="${game.title}">

            <div class="game-info">
                <div class="game-text">
                    <h3>${game.title}</h3>
                    <span>Dành cho: ${platformText}</span>
                </div>
                <button class="play-btn"></button>
            </div>
        `;

        const playBtn = card.querySelector(".play-btn");
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (game.link) {
                window.location.href = game.link;
            }
        });

        card.addEventListener("click", () => {
            if (game.link) window.location.href = game.link;
        });

        gameGrid.appendChild(card);
    });
}

/* =========================
   FILTER EVENTS
========================= */

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // đổi trạng thái active
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.dataset.type;
        renderGames();
    });
});

/* =========================
   INIT
========================= */

renderGames();

// const gameGrid = document.getElementById("gameGrid");

/* =========================
   RENDER GAME LIST
========================= */

// function renderGames() {
//     gameGrid.innerHTML = "";

//     games.forEach(game => {
//         const card = document.createElement("div");
//         card.classList.add("game-card");

//         const platformText = Array.isArray(game.platform)
//             ? game.platform.join(" & ")
//             : game.platform;

//         card.innerHTML = `
//             <img src="${game.img}" alt="${game.title}">
//             <div class="game-info">
//                 <div class="game-text">
//                     <h3>${game.title}</h3>
//                     <span>Dành cho: ${platformText}</span>
//                 </div>
//                 <button class="play-btn"></button>
//             </div>
//         `;

//         // Click nút Play -> chuyển trang
//         const playBtn = card.querySelector(".play-btn");
//         playBtn.addEventListener("click", (e) => {
//             e.stopPropagation();
//             if (game.link) {
//                 window.location.href = game.link;
//             }
//         });

//         gameGrid.appendChild(card);
//     });
// }

// function renderGames() {
//     gameGrid.innerHTML = "";

//     games.forEach(game => {
//         const card = document.createElement("div");
//         card.classList.add("game-card");

//         const platformText = Array.isArray(game.platform)
//             ? game.platform.join(" & ")
//             : game.platform;

//         // đảm bảo có field type (app | game). nếu không có, hiển thị 'other'
//         const type = (game.type || "other").toLowerCase();

//         card.innerHTML = `
//             <div class="type-badge ${type}">${type === 'app' ? 'APP' : (type === 'game' ? 'GAME' : 'OTHER')}</div>
//             <img src="${game.img}" alt="${game.title}">
//             <div class="game-info">
//                 <div class="game-text">
//                     <h3>${game.title}</h3>
//                     <span>Dành cho: ${platformText}</span>
//                 </div>
//                 <button class="play-btn" aria-label="Play ${game.title}"></button>
//             </div>
//         `;

//         // Click nút Play -> chuyển trang
//         const playBtn = card.querySelector(".play-btn");
//         playBtn.addEventListener("click", (e) => {
//             e.stopPropagation();
//             if (game.link) {
//                 window.location.href = game.link;
//             }
//         });

//         // optional: click toàn card cũng mở link
//         card.addEventListener("click", () => {
//             if (game.link) window.location.href = game.link;
//         });

//         gameGrid.appendChild(card);
//     });
// }

/* =========================
   INIT
========================= */

// renderGames();