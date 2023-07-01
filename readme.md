<p align="center">
  <img src="https://media.discordapp.net/attachments/1033604720570404874/1040123011187081226/500px-493Arceus.png" />
</p>
<h1 align="center">midori.js</h1>


**The most powerful string package to create a discord bot with custom features having aoi.js features!**




[Check our docs](https://docs.midorijs.tk)
<br>
[Report a bug](https://discord.gg/xPURT2B3sA)
<br>
[Discord server](https://discord.gg/xPURT2B3sA)


* <strong>New Features</strong>
* Supports aoi.js 6.2.6
* Fixed all bugs



Install


```js
npm i midori.js@v4.1.9
```

---
* Setup

```js
const {AoiClient} = require("aoi.js");

const bot = new AoiClient({
token: "BOT_TOKEN",
prefix: "PREFIX",
intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: [
      "onMessage",
      "onInteractionCreate"
    ]
})



const { Plugins } = require("midori.js"); //Adds midori.js package
const plugins = new Plugins({ bot:bot }); //Sets the plugins
plugins.loadPlugins(); //Then load them


bot.command({
  name : "meme",
  code : `$meme`
})





  


```

* Links

[Support Server](https://discord.gg/KTFnKuPSqW)
<br>
[Docs](https://team-hype.gitbook.io/midori.js/starting/setup)
<br>

* Developers

<strong>ZeRealOne</strong>
<br>
<strong>ItsHyper</strong>






