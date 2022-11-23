document.getElementById("searchbutton").addEventListener("click", function () {
  //tähän tulee funktiot, joita käytetään
  searchFunction();
  document.getElementById("input").value = "";
});

function searchFunction() {
  listalta = document.getElementById("teatterit").value;
  valinta = document.getElementById("input").value;
  valinta = valinta.trim();
  valinta = valinta.toLowerCase();

  switch (valinta || listalta) {
    case "espoo: omena":
    case "espoo omena":
    case "omena":
    case "iso omena":
    case "omppu":
    case "iso omppu":
    case "Espoo - Omena":
      theatreID = 1039;
      searchWord = "Espoo - Omena";
      break;
    case "espoo: sello":
    case "espoo sello":
    case "sello":
    case "Espoo - Sello":
      theatreID = 1038;
      searchWord = "Espoo - Sello";
      break;
    case "helsinki: itis":
    case "helsinki itis":
    case "helsinki itäkeskus":
    case "itis":
    case "itäkeskus":
    case "Helsinki - Itis":
      theatreID = 1045;
      searchWord = "Helsinki - Itis";
      break;
    case "helsinki: kinopalatsi":
    case "helsinki kinopalatsi":
    case "kinopalatsi":
    case "kino":
    case "Helsinki - Kinopalatsi":
      theatreID = 1031;
      searchWord = "Helsinki - Kinopalatsi";
      break;
    case "helsinki: maxim":
    case "helsinki maxim":
    case "maxim":
      theatreID = 1032;
      searchWord = "Helsinki - Maxim";
      break;
    case "helsinki: tennispalatsi":
    case "helsinki tennispalatsi":
    case "tennispalatsi":
    case "tennis":
    case "tennari":
      theatreID = 1033;
      searchWord = "Helsinki - Tennispalatsi";
      break;
    case "vantaa: flamingo":
    case "vantaa flamingo":
    case "vantaa jumbo":
    case "vantaa":
    case "flamingo":
    case "jumbo":
      theatreID = 1013;
      searchWord = "Vantaa - Flamingo";
      break;
    case "jyväskylä: fantasia":
    case "jyväskylä fantasia":
    case "jyväskylä":
    case "jkl":
    case "fantasia":
      theatreID = 1015;
      searchWord = "Jyväskylä - Fantasia";
      break;
    case "kuopio: scala":
    case "kuopio scala":
    case "kuopio":
    case "scala":
      theatreID = 1016;
      searchWord = "Kuopio - Scala";
      break;
    case "lahti: kuvapalatsi":
    case "lahti kuvapalatsi":
    case "lahti":
    case "kuvapalatsi":
      theatreID = 1017;
      searchWord = "Lahti - Kuvapalatsi";
      break;
    case "lappeenranta: strand":
    case "lappeenranta strand":
    case "lappeenranta":
    case "strand":
      theatreID = 1041;
      searchWord = "Lappeenranta - Strand";
      break;
    case "oulu: plaza":
    case "oulu plaza":
    case "oulu":
    case "plaza":
      theatreID = 1018;
      searchWord = "Oulu - Plaza";
      break;
    case "pori: promenadi":
    case "pori promenadi":
    case "pori":
    case "promenadi":
      theatreID = 1019;
      searchWord = "Pori - Promenadi";
      break;
    case "tampere: cine atlas":
    case "tampere cine atlas":
    case "tre cine atlas":
    case "tre atlas":
    case "tre cine":
    case "cine atlas":
    case "cine":
    case "atlas":
    case "Tampere - Cine Atlas":
      theatreID = 1034;
      searchWord = "Tampere - Cine Atlas";
      break;
    case "tampere: plevna":
    case "tampere plevna":
    case "tre plevna":
    case "plevna":
    case "Tampere - Plevna":
      theatreID = 1035;
      searchWord = "Tampere - Plevna";
      break;
    case "turku: kinopalatsi":
    case "turku kinopalatsi":
    case "kinopalatsi turku":
    case "turku":
      theatreID = 1022;
      searchWord = "Turku - Kinopalatsi";
      break;
    case "raisio: luxe mylly":
    case "raisio luxe mylly":
    case "raisio":
    case "luxe mylly":
    case "luxe":
    case "mylly":
      theatreID = 1046;
      searchWord = "Raisio - Luxe Mylly";
      break;
    default:
      theatreID = null;
      searchWord = "";
      var name = document.getElementById("input").value;
      alert(
        'Hakemaasi alueen tai teatterin nimeä "' +
          name +
          '" ei löytynyt. Ole hyvä ja kokeile toista hakusanaa tai valitse nimi alasvetovalikosta.'
      );
      document.getElementById("input").value = "";
  }
  getXmlData();
  //Convert user's search field input to a more "appropriate" searchWord, to clarify which cinema's data is being fetched
  document.getElementById("input").value = searchWord;
  document.getElementById("input").select();
  return false;
}

function getXmlData() {
  if (theatreID != undefined) {
    var url = "https://www.finnkino.fi/xml/Schedule/?area=" + theatreID;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        parseXML(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
}
function parseXML(xml) {
  xmlData = xml.responseXML;
  var x = xmlData.getElementsByTagName("Show");
  var table = "<p>";
  var i;
  for (i = 2; i < x.length; i++) {
    table += x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
    console.log(x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue);
  }
  table += "</p>";
  document.getElementById("elokuvat").innerHTML = table;
}
