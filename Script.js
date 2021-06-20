/*var request = new XMLHttpRequest();
request.open('GET', 'https://api.eve-echoes-market.com/market-stats/stats.csv', true);
var data_call= {};
request.send();
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
   console.log(data_call);
   let text = '<select>'
   for (let x in data_call) {
     text += "<option>" + data_call[x].name;
   }
   text += "</select>"
   document.getElementById("dvCSV").innerHTML = text;
   
 }
};
*/

var data_load;
var data_load_body;
$(document).ready(function(){
   $.ajax({
     url: 'https://raw.githubusercontent.com/asnise/eve-thf-api/main/data.json' ,
     format: 'json',
     dataType: "json",
  success(data){
	  data_load = data;
     let vers = $('<h4>').text(data);
     $('#dvCSV').append(vers);
  }
   });
});





