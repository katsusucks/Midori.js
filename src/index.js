class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.bot) {
      console.log("You have not inpputted your aoi client! Exiting Code!");
      process.exit(0);
    }
  }
  loadPlugins() {
    const client = this.args.bot;
    client.functionManager.createCustomFunction({
name : '$say',
params : ['authorid','message'],
type : 'aoi.js',
code : ` 
**$userTag[{authorid}]** says: **{message}**
`


})


    client.functionManager.createCustomFunction({
  name : '$neko',
  type : 'djs',
  code : async d => {
    const aoiData = d.util.aoiFunc(d);
    const fetch = require("node-fetch")
    const a = await fetch('https://neko-love.xyz/api/v1/neko')
  .then(res => res.json())
  .then(data => {
    return data.url;
  });
    aoiData.result = a;
    
    return {
      code: d.util.setCode(aoiData)
    }
  }
});











    
    }
  }

module.exports = {
  Plugins
}