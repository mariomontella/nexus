const Discord = require("discord.js")
const client = new Discord.Client(
    {
        intents:[
            "Guilds", "GuildMessages"
        ]
    }
)

client.login("MTE2OTIyODY2OTY1NTQ2NTk4NA.GbI0gZ.XIm6EekTqK92IiMHg4n2ya6HF7auA9JlkLNAu0")

client.on("ready", () => {
    console.log("MarioBot Online!")
})

const fs = require("fs")
client.commands = new Discord.Collection()

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return

    command.execute(interaction)
})
