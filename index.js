const Discord = require('discord.js');
var atob = require('atob');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./config.json");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET', 'https://api.eve-echoes-market.com/market-stats/stats.csv', true);
var data_call= {};
request.send();
var decodedStringAtoB = atob(botconfig.token);
request.onload = function(){ 
    if (request.status >= 200 && request.status < 400) {
    var data = request.responseText;
    var rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
       var cells = rows[i].split(",");
       if (cells.length > 1) {
          data_call[cells[1].replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").toLowerCase()] = {
             id: cells[0],
             name: cells[1],
             time: cells[2],
             sell: cells[3],
             buy: cells[4],
             lowest_sell: cells[5],
             highest_buy: cells[6]
          }
          
       }
    }
    //console.log(data_call);
  }
 };

const fs = require('fs');



bot.on('ready', async () => {
    console.log(`Logged in as ${bot.user.tag}! ✅`);
    bot.on('message', async message => {
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let funtion = message.content.split(" ").slice(1).join(" ");
        let prefix = botconfig.prefix;
        let info = message.content.split(" ").slice(1).join(" ");
        
        if (cmd === `${prefix}`) {
            var call_mes = ""
            let result_ = info.toLowerCase();
            result_ = result_.replace(/\s/g, "");
            console.log("call : " + result_);

            if (result_ in data_call)
            {
                if(data_call[result_].highest_buy === "")
                {
                    var hig_buy = "ไม่มีการขาย";
                }
                else
                {
                    var hig_buy = data_call[result_].highest_buy + " ISK";
                }
                let help = new Discord.MessageEmbed()
                .setDescription("ข้อมูลสินค้า โดยประมาณ")
                .setColor("#E67E22")
                .setTitle(data_call[result_].name)
                .addFields(
                    { name: 'ราคาขาย', value: data_call[result_].sell + " ISK" ,inline: true},
                    { name: 'ราคาซื้อ', value: data_call[result_].buy+ " ISK" ,inline: true},
                )
                .addField('\u200B', '\u200B' )
                .addField('ราคาขาย ต่ำสุด', data_call[result_].lowest_sell + " ISK" , true)
                .addField('ราคาซื้อ สูงสุด', hig_buy ,true)
                .setFooter('ช่วงเวลาของข้อมูล : ' + data_call[result_].time);
                
                //console.log(data_call[result_].highest_buy.toString());
                return message.channel.send(help);
            }
            else
            {
                message.channel.send('ไม่มีข้อมูลของ : ' + result_);
               
            }
        }

        if(cmd == 'json')
        {
            fs.writeFile("./data.json", JSON.stringify(data_call, null, 4), (err) => {
                if (err)
                    console.log(err)
            });
            message.channel.send({
                files: [`./data.json`]
            });
        }
    })
});
bot.login(decodedStringAtoB);