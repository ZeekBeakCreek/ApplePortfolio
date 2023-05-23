const terminal = document.querySelector("#terminal");
const title = document.querySelector(".title")
const rect = terminal.getBoundingClientRect()
const redButton = document.querySelector(".red")
title.innerText = `slimjim - zsh - ${Math.trunc(window.innerWidth)}x${Math.trunc(window.innerHeight)}`

window.addEventListener('resize' , () => {
    const rect = terminal.getBoundingClientRect()
    title.innerText = `slimjim - zsh - ${Math.trunc(window.innerWidth)}x${Math.trunc(window.innerHeight)}`
}) 

redButton.addEventListener('click', () => {
  const closeApp = document.querySelector("#terminal");
  closeApp.style.display = 'none'
    
   if (closeApp.style.display = 'none') {
        document.getElementById("rick").innerHTML = '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" title="YouTube video player" frameborder="0"; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   }
   })

// setup delays for async functions
//asnyc functions allow promise to be resolved 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const date = new Date();
terminal.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

terminal.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  addText(
    `Last Login: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} on console`
  );
  await delay(700);
  addText("Setting up environment...");
  await delay(1500);
  createCommands("help", "to see all available commands.");
  await delay(500);
  new_line();
  const serverState = document.querySelector('#terminal :nth-child(2)');
  console.log(serverState);
  serverState.textContent = 'Environment has been setup'
}

function new_line() {
  const span = document.createElement("span");
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  span.setAttribute("class", "root");
  span.textContent = 'slimjim@Zeeks-MacBook-Pro ~ %'
  const input = document.createElement("input");
  div.appendChild(span);
  div.appendChild(input);
  terminal.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  terminal.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "help") {
    trueValue(value);

    createCommands(
      "projects",
      "My github page with my projects."
    );
    createCommands("about me", "Who am I?!?!");
    createCommands("contact -a", "All my forms of social media & contact networks.");
    createCommands("clear", "Clear the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    addText(
      "For More Projects - <a href='https://github.com/ZeekBeakCreek?tab=repositories' target='_blank'><i class='fab fa-github white'></i> github.com/ZeekBeakCreek</a>"
    );
    addText("Interavtive Pong Game - <a href='https://zeekbeakcreek.github.io/CapstoneGame/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("POINTLESS.CO Ecommerce - <a href=' https://zeekbeakcreek.github.io/PointlessEcommerce/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("JSON + Blob API Locations - <a href='https://zeekbeakcreek.github.io/JSONBlob/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("Watermelon Pixel Art - <a href='https://zeekbeakcreek.github.io/Melon-Canvas/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("React Weather API - <a href='https://weather-api-green.vercel.app/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("React Movies API - <a href='https://movie-api-six-eosin.vercel.app/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("React Random Quotes API - <a href='https://random-jokes-seven.vercel.app/' target='_blank'>{--> Live Server Here <--}</a>" );
    addText("React Random Jokes API - <a href='https://random-jokes-seven.vercel.app/' target='_blank'>{--> Live Server Here <--}</a>" );
  } else if (value === "about me") {
    trueValue(value);
    addText("Hello my name is Ezequiel Piña but people call me Zeek");
    addText(
      "I am a full-time student who loves pineapple \uD83C\uDF4D & specializes in HTML5, CSS3, SQL, PHP, JavaScript (React, Next, & Svelte). I am currently graduating the West-Mec Coding program to better develop my skills in Front-End & Back-End Web Development."
    );
  } else if (value === "contact -a") {
    trueValue(value);
    addText(
      "<a href='https://github.com/ZeekBeakCreek?tab=repositories' target='_blank'><i class='fa-brands fa-github white'></i> github.com/ZeekBeakCreek</a>"
    );
    addText(
      "<a href='zeek.pina@gmail.com'><i class='fa-solid fa-envelope white'></i> zeek.pina@gmail.com</a>"
    );
    addText(
      "<a href='https://www.instagram.com/ilovepineapple24/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/ilovepineapple24</a>"
    );
  } else if (value === "contact") {
    trueValue(value);
    addText("Didn't you mean: contact -a?");
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach((e) => e.parentNode.removeChild(e));
    addText(`Last Login: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} on console`)
  } else {
    falseValue(value);
    addText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const p = document.createElement("p");
  p.setAttribute("class", "root");
  p.textContent = 'slimjim@Heidis-MacBook-Pro ~ %'
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(p);
  div.appendChild(mensagem);
  terminal.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const p = document.createElement("p");
  p.setAttribute("class", "root error");
  p.textContent = 'slimjim@Heidis-MacBook-Pro ~ %'
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(p);
  div.appendChild(mensagem);
  terminal.appendChild(div);
}

function addText(text) {
  const p = document.createElement("p");
  p.innerHTML = text;
  terminal.appendChild(p);
}

function createCommands(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  terminal.appendChild(p);
}

open_terminal();
