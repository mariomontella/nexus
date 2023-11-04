/* const Discord = require("discord.js")

module.exports = {
        name: "regole",
        data: {
            name: "regole",
            description: "regole",
        },
        execute(interaction){
        interaction.reply("")
    }
} */


/* ----------------------
      modulo di test
------------------------- */

const Discorrd = require("discord.js")

module.exports = {
        name: "ping",
        data: {
            name: "ping",
            description: "ping",
        },
        execute(interaction){
        interaction.reply("Pong!")
    }
}

 const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "regole",
    data: {
        name: "regole",
        description: "Mostra le regole del server.",
    },
    async execute(interaction) {
        // Il percorso del tuo file di iscordo all'interno del progetto
        const filePath = '/commands/general/regole.json'; 
        // Leggi il contenuto del file di testo in modo asincrono
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Errore nella lettura del file: ${err}`);
                interaction.reply("Impossibile leggere le regole al momento.");
            } else {
                // Risposta
                interaction.reply(JSON.parse(data));
            }
        });
    }
}; 


/* ----------------------
      modulo trivia
------------------------- */

 /*const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = "MTE2OTIyODY2OTY1NTQ2NTk4NA.GbI0gZ.XIm6EekTqK92IiMHg4n2ya6HF7auA9JlkLNAu0";

const questions = [
  {
    question: "Qual è la capitale dell'Italia?",
    answers: ["Roma"],
  },
  {
    question: "Chi ha dipinto la Monna Lisa?",
    answers: ["Leonardo da Vinci", "Da Vinci"],
  },
  // Aggiungi altre domande e risposte qui
];

let currentQuestion = 0;
let currentPlayer = null;
let players = {};

client.once("ready", () => {
  console.log(`Bot è online come ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "!trivia") {
    currentPlayer = message.author;
    players[currentPlayer.id] = { score: 0 };
    askQuestion(message.channel);
  }

  if (message.author.id === currentPlayer?.id) {
    checkAnswer(message.content);
  }
});

function askQuestion(channel) {
  if (currentQuestion < questions.length) {
    const questionData = questions[currentQuestion];
    channel.send(`Domanda: ${questionData.question}`);
  } else {
    // La trivia è finita
    channel.send("Trivia terminata. Punteggi:");
    for (const [player, data] of Object.entries(players)) {
      channel.send(`${client.users.cache.get(player).username}: ${data.score} punti`);
    }
  }
}

function checkAnswer(answer) {
  const questionData = questions[currentQuestion];
  const correctAnswers = questionData.answers;

  if (correctAnswers.includes(answer.trim())) {
    players[currentPlayer.id].score++;
    currentQuestion++;
    currentPlayer = null;
    askQuestion(client.channels.cache.get("1169249425672118353"));
  }
}

client.login(token); 









// Terzo modulo di benvenuto

 /* const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });

const token = "MTE2OTIyODY2OTY1NTQ2NTk4NA.GbI0gZ.XIm6EekTqK92IiMHg4n2ya6HF7auA9JlkLNAu0"; 

client.once("ready", () => {
  console.log(`Bot è online come ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "1169249425672118353"
  ); // Sostituisci "benvenuti" con il nome del canale di benvenuto

  if (welcomeChannel) {
    welcomeChannel.send(`Benvenuto ${member.user.tag} nel nostro server!`);
  }
});

client.login(token); */




