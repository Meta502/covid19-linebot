var linebot = require('linebot');
var axios = require('axios');
var { CHANNEL_ID, CHANNEL_ACCESS_TOKEN, CHANNEL_SECRET, prefix } = require('./config.json') 
var templates = require('./static/js/template.js')

var bot = linebot({
  channelId: CHANNEL_ID,
  channelSecret: CHANNEL_SECRET,
  channelAccessToken: CHANNEL_ACCESS_TOKEN
});
 
bot.on('message', function (event) {
  if (event.message.text == undefined) return;
  if (!event.message.text.toLowerCase().startsWith(prefix)) return;
  const args = event.message.text.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command == "menu") {
    var reply = templates.botMenu()
    event.reply(reply)
  }

  if (command == "ping") {
    event.reply("Pong!");
  }

  if (command == "cases") {
    if (args[0] == undefined) {
      axios.get("https://coronavirus-19-api.herokuapp.com/all").then(response => {
          data = response.data;
          var reply = templates.globalTemplate(data);
          event.reply(reply);
        })
    }

    else {
      var link1 = "https://restcountries.eu/rest/v2/name/" + args[0];
      var link2 = "https://coronavirus-19-api.herokuapp.com/countries/" + args[0];
      
      const request1 = axios.get(link1);
      const request2 = axios.get(link2);
      
      axios.all([request1, request2]).then(axios.spread((...responses) => {
          const data_country = responses[0].data;
          const data_covid = responses[1].data;

          if(typeof(data_covid) == "object") {
            var reply = templates.countryTemplate(data_covid, data_country)
            event.reply(reply)            
          }
          else {
              event.reply("You have entered an invalid country!")
          }
      })).catch((e) => {
          if (e.response.status == 404) {
              event.reply("You have entered an invalid country!")
          }
      })
    }
  }

  if (command === "regional") {
    var link = "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?f=json&where=Provinsi%20%3C%3E%20%27Indonesia%27&returnGeometry=false&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&orderByFields=kode_provi%20DESC&outSR=102100&resultType=tile"
    if (args[0] == undefined) {
      var reply = templates.regionalMenu()
      event.reply(reply)
    }
    else if (args[0] == "jawa") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalJawa(data)
        event.reply(reply)
      })
    } 
    else if (args[0] == "sumatera") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalSumatera(data)
        event.reply(reply)
      })
    }
    else if (args[0] == "kalimantan") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalKalimantan(data)
        event.reply(reply)
      })
    }
    else if (args[0] == "sulawesi") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalSulawesi(data)
        event.reply(reply)
      })
    }
    else if (args[0] == "papua") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalPapua(data)
        event.reply(reply)
      })
    }
    else if (args[0] == "nt") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalNT(data)
        event.reply(reply)
      })
    }
    else if (args[0] == "maluku") {
      axios.get(link).then((response) => {
        var data = response.data.features;
        var reply = templates.regionalMaluku(data)
        event.reply(reply)
      })
    }

  }

  if (command == "info") {
    if (args[0] == undefined) {
      var reply = templates.infoMenu()

      event.reply(reply);
    }
    else if (args[0] == "general") {
      var reply = templates.generalTemplate()
      event.reply(reply);
    }
    else if (args[0] == "regional") {
      var reply = templates.regionalTemplate()
      event.reply(reply)
    }
  }
  
});

bot.listen('/linewebhook', 3000);