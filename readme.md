

<h1 align="center">midori.js</h1>





**The most powerful string package to create a discord bot with custom features having aoi.js features!**

**THIS IS A DEV VERSION ERROR MAY POP UP**


> Install
> <br>
> npm i midori.js

<center> <img src = "https://images-ext-1.discordapp.net/external/eCKDusivhESv7loW1dVtR5wtb2pXqS8n2Vm_7b7JkSM/%3Fdownloads%3Dtrue/https/nodei.co/npm/midori.js.png?width=199&height=42"> </center>


* Setup

```js
const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
token: "DISCORD_BOT_TOKEN", //Discord Bot Token
prefix: "DISCORD_BOT_PREFIX", //Discord Bot Prefix
intents: ["GUILDS","GUILD_MESSAGES"] //Discord Intents
});
const {Plugins} = require("midori.js");
const plugins = new Plugins({bot:bot});
plugins.loadPlugins();

bot.command({
  name:"$neko",
  code:`$neko`
})
bot.onMessage();
```

* Links

[Discord](https://discord.gg/KTFnKuPSqW)
<br>
[Github]()
<br>
[NPM](https://www.npmjs.com/package/midori.js)




