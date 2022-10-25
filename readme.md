
![](i.png)
<h1 align="center">midori.js</h1>





**The most powerful string package to create a discord bot with custom features having aoi.js features!**

**THIS IS A DEV VERSION ERROR MAY POP UP**


> Install
> <br>
> npm i midori.js


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




