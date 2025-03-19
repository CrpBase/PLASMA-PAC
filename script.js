const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

document.body.style.textAlign = "center";

tileSize = 25;
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let player = { x: 1, y: 1 };

document.addEventListener("keydown", (event) => {
  let newX = player.x;
  let newY = player.y;
  
  if (event.key === "ArrowUp") newY--;
  else if (event.key === "ArrowDown") newY++;
  else if (event.key === "ArrowLeft") newX--;
  else if (event.key === "ArrowRight") newX++;

  if (map[newY][newX] === 0) {
    player.x = newX;
    player.y = newY;
  }
});

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === 1) {
        ctx.fillStyle = "blue";
        ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
      }
    }
  }
  
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
  
  requestAnimationFrame(drawGame);
}
drawGame();
