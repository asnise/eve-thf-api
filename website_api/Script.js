<<<<<<< HEAD
var request = new XMLHttpRequest();
request.open('GET', 'https://api.eve-echoes-market.com/market-stats/stats.csv', true);
var data_call = {};
request.send();
request.onload = function () {
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
        delete data_call.name;
        console.log(data_call);

        let text = '<select onchange="scheduleA.call(this, event)">'
        for (let x in data_call) {
            text += "<option>" + data_call[x].name;
        }
        text += "</select>"
        document.getElementById("dvCSV").innerHTML = text;


        let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาขายต่ำสุดในตลาด</th><th>ราคาซื้อสูงสุดในตลาด</th></tr>'
        let txt_sec ='';
        for (let x in data_call) {
            txt += "<tr><td>" + data_call[x].name + "</td>" + "<td>" + data_call[x].sell + " ISK" + "</td>" + "<td>" + data_call[x].buy+ " ISK" + "</td>" + "<td>" + data_call[x].lowest_sell+ " ISK" + "</td>" + "<td>" + data_call[x].highest_buy+ " ISK" + "</td>" + "</tr>";
        }
        txt += "</table>"
        document.getElementById("demo").innerHTML = txt + txt_sec;
        document.getElementById("update").innerHTML = "ข้อมูลราคาในวันที่ : " + data_call.vexor.time + " ซึ่งบางส่วนเป็นราคาโดยประมาณ";
        
        //document.getElementById("demo").innerHTML = JSON.stringify(data_call,null,6);
        
        /*let _tex = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ขายคาซื้อ</th></tr>'
        let ros = '';
        for (let x in data_call) {
            ros += '<tr>'+ '<th>' + data_call[x].name + '</th>'+ '<th>' + data_call[x].sell + '</th>'+ '<th>' + data_call[x].buy + '</th>' + '</tr>';
        }
        _tex += "</table>"
        document.getElementById("demo").innerHTML = _tex;*/
    }
};

function scheduleA(event) {
    var res_send = this.options[this.selectedIndex].text.toLowerCase().replace(/\s/g, "");
    let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาขายต่ำสุดในตลาด</th><th>ราคาซื้อสูงสุดในตลาด</th></tr>'
    let txt_sec ='';
    txt += "<tr><td>" + data_call[res_send].name + "</td>" + "<td>" + data_call[res_send].sell + " ISK" + "</td>" + "<td>" + data_call[res_send].buy+ " ISK" + "</td>" + "<td>" + data_call[res_send].lowest_sell+ " ISK" + "</td>" + "<td>" + data_call[res_send].highest_buy+ " ISK" + "</td>" + "</tr>";
    txt += "</table>"
    document.getElementById("select_item").innerHTML = txt + txt_sec;
}

=======
var request = new XMLHttpRequest();
request.open('GET', 'https://api.eve-echoes-market.com/market-stats/stats.csv', true);
var data_call = {};
request.send();
request.onload = function () {
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
        delete data_call.name;
        console.log(data_call);

        let text = '<select onchange="scheduleA.call(this, event)">'
        for (let x in data_call) {
            text += "<option>" + data_call[x].name;
        }
        text += "</select>"
        document.getElementById("dvCSV").innerHTML = text;


        let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาถูกที่สุดในตลาด</th><th>ราคาแพงที่สุดในตลาด</th></tr>'
        let txt_sec ='';
        for (let x in data_call) {
            txt += "<tr><td>" + data_call[x].name + "</td>" + "<td>" + data_call[x].sell + " ISK" + "</td>" + "<td>" + data_call[x].buy+ " ISK" + "</td>" + "<td>" + data_call[x].lowest_sell+ " ISK" + "</td>" + "<td>" + data_call[x].highest_buy+ " ISK" + "</td>" + "</tr>";
        }
        txt += "</table>"
        document.getElementById("demo").innerHTML = txt + txt_sec;
        document.getElementById("update").innerHTML = "ข้อมูลราคาในวันที่ : " + data_call.vexor.time + " ซึ่งบางส่วนเป็นราคาโดยประมาณ";
        
        //document.getElementById("demo").innerHTML = JSON.stringify(data_call,null,6);
        
        /*let _tex = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ขายคาซื้อ</th></tr>'
        let ros = '';
        for (let x in data_call) {
            ros += '<tr>'+ '<th>' + data_call[x].name + '</th>'+ '<th>' + data_call[x].sell + '</th>'+ '<th>' + data_call[x].buy + '</th>' + '</tr>';
        }
        _tex += "</table>"
        document.getElementById("demo").innerHTML = _tex;*/
    }
};

function scheduleA(event) {
    var res_send = this.options[this.selectedIndex].text.toLowerCase().replace(/\s/g, "");
    let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาถูกที่สุดในตลาด</th><th>ราคาแพงที่สุดในตลาด</th></tr>'
    let txt_sec ='';
    txt += "<tr><td>" + data_call[res_send].name + "</td>" + "<td>" + data_call[res_send].sell + " ISK" + "</td>" + "<td>" + data_call[res_send].buy+ " ISK" + "</td>" + "<td>" + data_call[res_send].lowest_sell+ " ISK" + "</td>" + "<td>" + data_call[res_send].highest_buy+ " ISK" + "</td>" + "</tr>";
    txt += "</table>"
    document.getElementById("select_item").innerHTML = txt + txt_sec;
}

>>>>>>> b4fb7e9a98315cfb9d618c27ad03297afd57a51b
