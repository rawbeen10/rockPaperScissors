let user = prompt("Enter Scissors, Paper, or Rock")
user = user.toLowerCase()
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["scissors", "paper", "rock"][cpuI]

const match = () => {
  if (user === cpu) {
    return "It's a tie. Nobody wins"
  }
  else if ((user === "rock" && cpu === "scissors") ||
    (user === "paper" && cpu === "rock") ||
    (user === "scissors" && cpu === "paper")) {
    return "Congratulations! 🥳 You win"
  }
  else {
    return "You lose 😔"
  }
}

let result = match(user, cpu)

let para = document.createElement("p")
document.body.appendChild(para)
para.innerText = `You: ${user}\nCPU: ${cpu}\n${result}`

para.style.fontSize = "30px"
para.style.textAlign = "center"
