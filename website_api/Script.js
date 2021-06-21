var request = new XMLHttpRequest();
var request_real = new XMLHttpRequest();
request.open('GET', 'https://api.eve-echoes-market.com/market-stats/stats.csv', true);
var data_call = {};
var data_real = {}, soucre = {};
var heander_contact = [];
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
                    sell: Intl.NumberFormat('en-US').format(cells[3]),
                    buy: Intl.NumberFormat('en-US').format(cells[4]),
                    lowest_sell: Intl.NumberFormat('en-US').format(cells[5]),
                    highest_buy: Intl.NumberFormat('en-US').format(cells[6])
                }
                heander_contact.push(cells[1]);
            }
        }
        delete data_call.name;
        console.log(data_call);

        let text_op = ''
        for (let x in data_call) {
            text_op += "<option>" + data_call[x].name;
        }
        text_op += "</select>"
        document.getElementById("browsers").innerHTML = text_op;


        let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาขายต่ำสุดในตลาด</th><th>ราคาซื้อสูงสุดในตลาด</th></tr>'
        let txt_sec = '';
        for (let x in data_call) {
            txt += "<tr><td>" + data_call[x].name + "</td>" + "<td>" + data_call[x].sell + " ISK" + "</td>" + "<td>" + data_call[x].buy + " ISK" + "</td>" + "<td>" + data_call[x].lowest_sell + " ISK" + "</td>" + "<td>" + data_call[x].highest_buy + " ISK" + "</td>" + "</tr>";
        }
        txt += "</table>"
        document.getElementById("demo").innerHTML = txt + txt_sec;
        document.getElementById("update").innerHTML = "ข้อมูลราคาในวันที่ : " + data_call.vexor.time + " ซึ่งบางส่วนเป็นราคาโดยประมาณ";
    }
};

function hide() {
    var x = document.getElementById("demo");
    if (x.style.display === "none") {
    document.getElementById("hide_bt").innerHTML = "ซ่อนตรางราคาโดยประมาณ"
      x.style.display = "block";
    } else {
        document.getElementById("hide_bt").innerHTML = "ดูตรางราคาโดยประมาณ"
      x.style.display = "none";
    }
  }


function send_item(event) {
    var res_send = document.getElementById("myInput").value.toLowerCase().replace(/\s/g, "");
    request_real.open('GET', 'https://api.eve-echoes-market.com/market-stats/' + data_call[res_send].id, true);
    request_real.send();
    request_real.onload = function () {
        if (request_real.status >= 200 && request_real.status < 400) {
            data_real = JSON.parse(request_real.responseText);
            soucre = {
                time: data_real[0].time,
                sell: Intl.NumberFormat('en-US').format(data_real[0].sell),
                buy: Intl.NumberFormat('en-US').format(data_real[0].buy),
                lowest_sell: Intl.NumberFormat('en-US').format(data_real[0].lowest_sell),
                highest_buy: Intl.NumberFormat('en-US').format(data_real[0].highest_buy),
            }
            console.log(soucre);
            let txt = '<table style="width:100%"><tr><th>ชื่อไอเทม</th><th>ราคาขาย</th><th>ราคาซื้อ</th><th>ราคาขายต่ำสุดในตลาด</th><th>ราคาซื้อสูงสุดในตลาด</th></tr>'
            let txt_sec = '';
            txt += "<tr><td>" + data_call[res_send].name + "</td>" + "<td>" + soucre.sell.toString() + " ISK" + "</td>" + "<td>" + soucre.buy.toString() + " ISK" + "</td>" + "<td>" + soucre.lowest_sell.toString() + " ISK" + "</td>" + "<td>" + soucre.highest_buy.toString() + " ISK" + "</td>" + "</tr>";
            txt += "</table>"
            document.getElementById("select_item").innerHTML = txt + txt_sec;
        }
    }
}

function convert()
{
    var canvas = document.getElementById('capture_item');
    var dataURL = canvas.toDataURL();
    var image = new Image();
    image.src = dataURL;
    var w = window.open("");
    w.document.write(image.outerHTML);
    document.getElementById("capture_screen").style.display === "none";
}

function captrue() {
    document.getElementById("capture_screen").style.display === "block";
    $('#capture_item').remove();
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.getElementById("capture_screen").appendChild(canvas)
        canvas.setAttribute("id", "capture_item");
    });
    setTimeout(convert, 3000)
}

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload() {
    download(JSON.stringify(data_call), "data.json", "text/plain");
}

