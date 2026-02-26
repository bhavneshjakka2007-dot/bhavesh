function toggleChat() {
  const chat = document.getElementById("chat-window");
  chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = input.value;
  chatBody.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.textContent = "Thanks for your message 🎮! This chatbot helps with gaming awareness and safety.";

  setTimeout(() => {
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  input.value = "";
}