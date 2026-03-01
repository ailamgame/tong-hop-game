// js/gameData.js

const games = [
  {
  id: 2,
  title: "Flappy Bird",
  genre: "Arcade / Endless Runner",
  platform: ["PC", "Mobile"], // PC | Mobile | ["PC","Mobile"]
  img: "assets/images/game-flappy-bird.jpeg",
  description: "Game điều khiển chú chim vượt qua các ống nước bằng cách chạm hoặc nhấn phím để giữ độ cao. Lối chơi đơn giản nhưng cực kỳ gây nghiện, đòi hỏi phản xạ nhanh và căn thời gian chính xác.",
  features: [
    "Cơ chế chạm hoặc nhấn phím để bay lên",
    "Hệ thống tính điểm theo số ống vượt qua",
    "Độ khó tăng dần theo thời gian",
    "Phong cách đồ họa pixel đơn giản, dễ chơi nhưng khó làm chủ"
  ],
  link: "https://ailamgame.github.io/flappy-bird/", // sửa lại nếu link khác
  tutorialVideo: "https://youtu.be/your-flappy-bird-tutorial"
},
  {
    id: 1,
    title: "Tank 1990",
    genre: "Arcade / Shooter",
    platform: ["PC"], // PC | Mobile | PC & Mobile
    img: "assets/images/game-tank-1990.jpeg",
    description: "Game bắn xe tăng cổ điển lấy cảm hứng từ Battle City 1990. Điều khiển xe tăng tiêu diệt kẻ địch, bảo vệ căn cứ và vượt qua các màn chơi arcade đầy thử thách.",
    features: [
      "Bản đồ dạng grid với gạch, thép, nước và bụi cây",
      "Hệ thống nâng cấp hỏa lực và tốc độ",
      "Chế độ Hack/Mod: bất tử, god mode",
      "Nhiều màn chơi retro phong cách 8-bit"
    ],
    link: "https://ailamgame.github.io/tank-1990/",
    tutorialVideo: "https://youtu.be/qsVpLdn5v9s"
  },
];