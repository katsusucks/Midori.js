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
      name: '$say',
      params: ['authorid', 'message'],
      type: 'aoi.js',
      code: ` 
**$userTag[{authorid}]** says: **{message}**
`


    })

    client.functionManager.createCustomFunction({
      name: '$i',
      type: 'djs',
      code: async d => {
        const aoiData = d.util.aoiFunc(d);
          //nothing here, it's comment
        return {
          code: d.util.setCode(aoiData)
        }
      }
    });
    
    
    client.functionManager.createCustomFunction({
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


    client.functionManager.createCustomFunction({
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



    client.functionManager.createCustomFunction({
      name: "$varExists", //The $varExists function
      type: "djs", //Djs
      code: async d => { //Fetch the data as d
        const data = d.util.aoiFunc(d); //Get the data as an aoi function
        const [varName] = data.inside.splits; //Get the single argument that will be called varName
        var b = await d.client.variableManager.cache.get(varName + '_main'); //Get the variable in the weird type of aoi
        if (b != undefined) { //If it's not undeifned (so it's exist)
          data.result = true; //It will return true (not as a string, as a boolean so it can be possible to be used in $if)
        }
        else {
          data.result = false; //If it's not exist, will return false
        }
        return {
          code: d.util.setCode(data) //Then all of this code will be returned (true \ false)
        }
      }
    });


    client.functionManager.createCustomFunction({
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

    
      client.functionManager.createCustomFunction({
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



client.functionManager.createCustomFunction({
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

    client.functionManager.createCustomFunction({
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

    client.functionManager.createCustomFunction({
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

    client.functionManager.createCustomFunction({
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

    client.functionManager.createCustomFunction({
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

    
client.functionManager.createCustomFunction({
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

        
client.functionManager.createCustomFunction({
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
         
          return {
            code: d.util.setCode(data)
         
 }
          
        }
    });

    
client.functionManager.createCustomFunction({
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
  }
  }





    
module.exports = {
  Plugins
}
