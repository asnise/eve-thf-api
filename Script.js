var request = new XMLHttpRequest();
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
   document.getElementById("dvCSV").innerHTML = JSON.stringify(data_call, null, 4);
 }
};


/*$(document).ready(function(){
   $.ajax({
     url: 'https://api.eve-echoes-market.com/market-stats/stats.csv' ,
     format: '',
     dataType: "",
     success(data){
        var rows;
        rows = data.split("\r\n");
        for (var i = 0; i < rows.length; i++) {
           var cells = rows[i].split(",");
           if (cells.length > 1) {
              var data_call = {};
              data_call[cells[1].replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "")] = {
                 id: cells[0],
                 name: cells[1],
                 time: cells[2],
                 sell: cells[3],
                 buy: cells[4],
                 lowest_sell: cells[5],
                 highest_buy: cells[6]
              }
              data_call.push(data_call);
           }
        }
        obj = JSON.stringify(data_call);
        document.getElementById("dvCSV").innerHTML = obj;
     }
   });
});*/





