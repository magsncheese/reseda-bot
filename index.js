//constants
const Discord = require("discord.js")
const TOKEN = "OTc1OTQyODk2NDYzMjUzNTQ0.G_HGAX.kLK_M2mCBXPTpbVzyEPK9PAfRyknxW73NdSOHw"
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

//event listeners
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//message create listener (triggers when someone sends a message)
client.on("messageCreate", (message) => {
    if (message.content == "hi reseda"){
        message.reply("hello <3")
    }
})

//to login to bot
client.login(TOKEN)