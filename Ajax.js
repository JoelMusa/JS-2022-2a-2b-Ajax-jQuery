function Moi() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      parseXML(this);
    }
  };
}
function parseXML(xml) {
  xmlData = xml.responseXML;
  var x = xmlData.getElementsByTagName("Name");
  var table = "<li>";
  var i;
  for (i = 2; i < x.length; i++) {
    table += x[i].childNodes[0].nodeValue;
    console.log(x[i].childNodes[0].nodeValue);
  }
  table += "</li>";
  document.getElementById("cityList").innerHTML = table;
}

function dropDown() {
  var ul = document.getElementById("cityList");
  var li = document.createElement("li");

  ul.appendChild(li);
  li.appendChild(x[i].childNodes[0].nodeValue);
}
