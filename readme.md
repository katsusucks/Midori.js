<p align="center">
  <img src="https://media.discordapp.net/attachments/1033604720570404874/1036513359836745798/i.png" />
</p>
<h1 align="center">midori.js</h1>


**The most powerful string package to create a discord bot with custom features having aoi.js features!**



[Check our docs](https://team-hype.gitbook.io/untitled-1/starting/setup)
<br>
[Check our discord server](https://discord.gg/xPURT2B3sA)
* <strong>New Features</strong>
* $i (Function) (Will be available in v6 aoi.js)
* $meme
* $varExists (Function)
* $dog [Dog facts]
* $animu [Pat] [Palm]
* $cat [Cat facts]
* $wink
* $pikachu 
* Panda [Panda facts]
* $fact [Bird facts]
* $quote [typea] [typeb]
* $hug [typea] [typeb]
---








> Install
> <br>
> `npm i midori.js`

---
* Setup

```js
const aoijs = require("aoi.js"); //Adds the aoi.js package

const bot = new aoijs.Bot({
token: "DISCORD_BOT_TOKEN", //Discord Bot Token
prefix: "DISCORD_BOT_PREFIX", //Discord Bot Prefix
intents: ["GUILDS","GUILD_MESSAGES"] //Discord Bot Intents
});

const { Plugins } = require("midori.js"); //Adds midori.js package
const plugins = new Plugins({ bot:bot }); //Sets the plugins
plugins.loadPlugins(); //Then load them

bot.command({
  name:"neko", //Command Name
  code:`$neko` //A message or some code
});

bot.onMessage(); //Listens to messages
```

* Links

[Support Server](https://discord.gg/KTFnKuPSqW)
<br>
[Example](https://github.com/xHyperJS/midori.js-example)
<br>
[Docs](https://team-hype.gitbook.io/untitled-1/starting/setup)
<br>

* Developers

<strong> ZeRealOne </strong>
<br>
<strong> ItsHyper </strong>




