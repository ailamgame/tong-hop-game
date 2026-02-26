// js/app.js

const grid = document.getElementById("gameGrid");
const modal = document.getElementById("gameModal");
const closeModal = document.getElementById("closeModal");

const modalMainImage = document.getElementById("modalMainImage");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalPlayButton = document.querySelector("#gameModal .play-now");


// ================= RENDER GAME CARDS =================

function renderGames() {
  grid.innerHTML = "";

  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.img}" alt="${game.title}">
      <div class="game-info">
        <h3>${game.title}</h3>
        <span>${game.genre}</span>
      </div>
    `;

    card.addEventListener("click", () => openModal(game));
    grid.appendChild(card);
  });
}


// ================= OPEN MODAL =================

function openModal(game) {
  modalMainImage.src = game.img;
  modalTitle.textContent = game.title;
  modalGenre.textContent = game.genre;
  modalDescription.textContent = game.description;

  // Render features
  modalFeatures.innerHTML = "";
  game.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  // Gắn link PLAY NOW
  if (game.link && game.link.trim() !== "") {
    modalPlayButton.disabled = false;
    modalPlayButton.style.opacity = "1";

    modalPlayButton.onclick = () => {
      window.open(game.link, "_blank", "noopener,noreferrer");
    };
  } else {
    // Nếu không có link thì disable
    modalPlayButton.disabled = true;
    modalPlayButton.style.opacity = "0.5";
    modalPlayButton.onclick = null;
  }

  modal.style.display = "flex";
}


// ================= CLOSE MODAL =================

function closeGameModal() {
  modal.style.display = "none";

  // Reset nội dung (tránh flash khi mở game khác)
  modalMainImage.src = "";
  modalTitle.textContent = "";
  modalGenre.textContent = "";
  modalDescription.textContent = "";
  modalFeatures.innerHTML = "";
}

closeModal.addEventListener("click", closeGameModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeGameModal();
  }
});

// Đóng bằng phím ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeGameModal();
  }
});


// ================= INIT =================

renderGames();