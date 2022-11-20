<p align="center">
  <img src="https://media.discordapp.net/attachments/1033604720570404874/1040123011187081226/500px-493Arceus.png" />
</p>
<h1 align="center">midori.js</h1>


**The most powerful string package to create a discord bot with custom features having aoi.js features!**




[Check our docs](https://team-hype.gitbook.io/untitled-1/starting/setup)
<br>
[Report a bug](https://discord.gg/xPURT2B3sA)
<br>
[Discord server](https://discord.gg/xPURT2B3sA)


* New features <br> <br>
* $ver [kiss] [handhold] [nom] [poke] [glomp] [waifu] [shinobu] [oppai] <br>
* $nsfw (function in docs) (i was forced to add) <br>
* Command handler (by using fs) <br>
* Aoi.js v6 support <br>
* Minor changes <br>



---



Install


```js
npm i midori.js
```

---
* Setup

```js
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "DISCORD_BOT_TOKEN",
    intents: ["messageContent", "guilds", "guildMessages"],
    prefix: "DISCORD_BOT_PREFIX"
})


const { Plugins } = require("midori.js"); 
const plugins = new Plugins({ bot:bot }); 
plugins.loadPlugins(); 


bot.onMessage()


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






