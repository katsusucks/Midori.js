class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.bot) {
      console.log("You have not inpputted your aoi client! Exiting Code!");
      process.exit(0);
    }
  }
  loadPlugins() {
    const bot = this.args.bot;

    bot.functionManager.createFunction({
      name: '$request',
      params: [""],
      type: 'aoi.js',
      code: `$httpRequest[$message[1];$message[2];;$message[3];Failed to request!]`
    });

    bot.functionManager.createFunction({
      name: '$showType',
      params: [""],
      type: 'aoi.js',
      code: `$botTyping`
    });

    bot.functionManager.createFunction({
      name: '$serverID',
      params: [""],
      type: 'aoi.js',
      code: `$guildID`
    });

    bot.functionManager.createFunction({
      name: '$userID',
      params: [""],
      type: 'aoi.js',
      code: `$authorID`
    });

    bot.functionManager.createFunction({
      name: '$pingAuthorID',
      params: [""],
      type: 'aoi.js',
      code: `<@$authorID>`
    });


    bot.functionManager.createFunction({
      name: '$ownerID',
      params: [""],
      type: 'aoi.js',
      code: `$botOwnerID`
    });


    bot.functionManager.createFunction({
      name: '$ownerTag',
      params: [""],
      type: 'aoi.js',
      code: `<@$botOwnerID>`
    });

    bot.functionManager.createFunction({
      name: '$purge',
      params: [""],
      type: 'aoi.js',
      code: `$clear[$message[1]]`
    });

    bot.functionManager.createFunction({
      name: '$cpuUsage',
      params: [""],
      type: 'aoi.js',
      code: `$cpu`
    });




  bot.functionManager.createFunction({
     name: '$allCommands',
       type: 'aoi.js',
       params: [""],
      code: `$commandsCount`
 });

    bot.functionManager.createFunction({
      name: '$botToken',
      params: [""],
      type: 'aoi.js',
      code: `$clientToken`
    });


    bot.functionManager.createFunction({
      name: '$botID',
      params: [""],
      type: 'aoi.js',
      code: `$clientID`
    });


    bot.functionManager.createFunction({
      name: '$returnTime',
      params: [""],
      type: 'aoi.js',
      code: `$executionTime`
    });


    bot.functionManager.createFunction({
      name: '$cacheUsers',
      params: [""],
      type: 'aoi.js',
      code: `$cacheMembers`
    });


    bot.functionManager.createFunction({
      name: '$usage',
      params: [""],
      type: 'aoi.js',
      code: `$ram`
    });


    bot.functionManager.createFunction({
      name: '$pack',
      params: [""],
      type: 'aoi.js',
      code: `Midori.js is already packed with $ping`
    });


    bot.functionManager.createFunction({
      name: '$botInvite',
      params: [""],
      type: 'aoi.js',
      code: `$getBotInvite`
    });

    bot.functionManager.createFunction({
      name: '$version',
      params: [""],
      type: 'aoi.js',
      code: `v5.0.0`
    });

    bot.functionManager.createFunction({
      name: '$onlyServers',
      params: [""],
      type: 'aoi.js',
      code: `$onlyIf[$guildID!=;]`
    });

    bot.functionManager.createFunction({
      name: '$banUsers',
      params: [""],
      type: 'aoi.js',
      code: `$banCount[$guildID]`
    });
    




  


   






   
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //D.JS

     bot.functionManager.createFunction({
      name: '$i',
      type: 'djs',
      code: async d => {
        const data = d.util.aoiFunc(d);
          //nothing here, it's comment
        return {
          code: d.util.setCode(data)
        }
      }
    });

    
    bot.functionManager.createFunction({
      name: "$neko",
      type: "djs",
      code: async d => {
        const data = d.util.aoiFunc(d);
        const fetch = require("node-fetch")
        const URL = await fetch('https://neko-love.xyz/api/v1/neko')
          .then(res => res.json())
          .then(data => {
            return data.url;
          });
        data.result = URL;
        return {
          code: d.util.setCode(data)
        }
      }
    });


    bot.functionManager.createFunction({
      name: "$meme",
      type: "djs",
      code: async d => {
        const data = d.util.aoiFunc(d);
        const fetch = require("node-fetch")
        const URL = await fetch('https://meme-api.herokuapp.com/gimme')
          .then(res => res.json())
          .then(data => {
            return data.url;
          });
        data.result = URL;
        return {
          code: d.util.setCode(data)
        }
      }
    });



    bot.functionManager.createFunction({
      name: "$varExists", 
      type: "djs", 
      code: async d => { 
        const data = d.util.aoiFunc(d); 
        const [varName] = data.inside.splits; 
        var b = await d.client.variableManager.cache.get(varName + '_main'); 
        if (b != undefined) { 
          data.result = true; 
        }
        else {
          data.result = false; 
        }
        return {
          code: d.util.setCode(data) 
        }
      }
    });


    bot.functionManager.createFunction({
        name: "$dog",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const fetch = require("node-fetch")
          const URL = await fetch('https://api.thedogapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => {
              return data[0].url;
            });
          data.result = URL;
          return {
            code: d.util.setCode(data)
          }
        }
      });

    
      bot.functionManager.createFunction({
        name: "$fact",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="dog"){
            data.result = await fetch('https://some-random-api.ml/facts/dog')
            .then(res => res.json())
            .then(data => {
              return data.fact;
            });
          } else if(type==="bird"){
            data.result = await fetch('https://some-random-api.ml/facts/bird')
            .then(res => res.json())
            .then(data => {
              return data.fact;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }
                                                  
      });



      bot.functionManager.createFunction({
        name: "$cat",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="cat"){
            data.result = await fetch('https://some-random-api.ml/animal/cat')
            .then(res => res.json())
            .then(data => {
              return data.image;
            });
          } else if(type==="fact"){
            data.result = await fetch('https://some-random-api.ml/animal/cat')
            .then(res => res.json())
            .then(data => {
              return data.fact;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }

      
                                                  
      });

      bot.functionManager.createFunction({
        name: "$panda",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="panda"){
            data.result = await fetch('https://some-random-api.ml/animal/panda')
            .then(res => res.json())
            .then(data => {
              return data.image;
            });
          } else if(type==="fact"){
            data.result = await fetch('https://some-random-api.ml/animal/panda')
            .then(res => res.json())
            .then(data => {
              return data.fact;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }

    
    });

    bot.functionManager.createFunction({
        name: "$pikachu",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="image"){
            data.result = await fetch('https://some-random-api.ml/img/pikachu')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          } else if(type==="image2"){
            data.result = await fetch('https://some-random-api.ml/img/pikachu')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          }
          
          
          return {
            code: d.util.setCode(data)
         
 }
        }
    });

    bot.functionManager.createFunction({
        name: "$quote",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="typea"){
            data.result = await fetch('https://some-random-api.ml/animu/quote')
            .then(res => res.json())
            .then(data => {
              return data.sentence;
            });
          } else if(type==="typeb"){
            data.result = await fetch('https://some-random-api.ml/animu/quote')
            .then(res => res.json())
            .then(data => {
              return data.sentence;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }
    });

    bot.functionManager.createFunction({
        name: "$hug",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="typea"){
            data.result = await fetch('https://some-random-api.ml/animu/hug')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          } else if(type==="typeb"){
            data.result = await fetch('https://some-random-api.ml/animu/hug')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }
    });

    
    bot.functionManager.createFunction({
        name: "$pat",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="typea"){
            data.result = await fetch('https://some-random-api.ml/animu/pat')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          } else if(type==="typeb"){
            data.result = await fetch('https://some-random-api.ml/animu/pat')
            .then(res => res.json())
            .then(data => {
              return data.link;
            });
          }
          return {
            code: d.util.setCode(data)
         
 }
        }
    });

        
    bot.functionManager.createFunction({
        name: "$ver",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="selfie"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=selfies')
            .then(res => res.json())
            .then(data => {
              return data.images[0].url;
            });
          } else if(type==="uniform"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=uniform')
            .then(res => res.json())
            .then(data => {
              return data.images[0].url;
            });
          }
          else if(type==="maid"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=maid')
            .then(res => res.json())
            .then(data => {
              return data.images[0].url;
            });
          }
        else if(type==="hug"){
            data.result = await fetch('https://api.waifu.pics/sfw/hug')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="kiss"){
            data.result = await fetch('https://api.waifu.pics/sfw/kiss')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="handhold"){
            data.result = await fetch('https://api.waifu.pics/sfw/handhold')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="nom"){
            data.result = await fetch('https://api.waifu.pics/sfw/nom')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="poke"){
            data.result = await fetch('https://api.waifu.pics/sfw/poke')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
           else if(type==="glomp"){
            data.result = await fetch('https://api.waifu.pics/sfw/glomp')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="shinobu"){
            data.result = await fetch('https://api.waifu.pics/sfw/shinobu')
            .then(res => res.json())
              .then(data => {
              return data.url;
            });
          }
          else if(type==="oppai"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=oppai')
            .then(res => res.json())
              .then(data => {
              return data.images[0].url;
            });
          }
         
          return {
            code: d.util.setCode(data)
         
 }
          
        }
    });

    
    bot.functionManager.createFunction({
        name: "$animal",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="duck"){
            data.result = await fetch('https://random-d.uk/api/random')
            .then(res => res.json())
            .then(data => {
              return data.url;
            });
          } else if(type==="duck2"){
            data.result = await fetch('https://random-d.uk/api/random')
            .then(res => res.json())
            .then(data => {
              return data.url;
            });
          }
          return {
            code: d.util.setCode(data)
          


          
          }
        }
});



    
 

  




bot.functionManager.createFunction({
        name: "$nsfw",
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          const [type] = data.inside.splits;
          const fetch = require("node-fetch");
          if(type==="ass"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=ass')
            .then(res => res.json())
            .then(data => {
              return data.images[0].url;
            });
          } else if(type==="hentai"){
            data.result = await fetch('https://api.waifu.im/random/?selected_tags=hentai')
            .then(res => res.json())
            .then(data => {
              return data.images[0].url;
            });
          }
          return {
            code: d.util.setCode(data)
          


          
          }
        }
});

  


  }
}






    
module.exports = {
  Plugins
}
