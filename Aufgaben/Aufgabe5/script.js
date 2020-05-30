"use strict";
//Emissionen 2018
var africa18 = 1235.5;
var southamerica18 = 1261.5;
var europe18 = 4209.3;
var northamerica18 = 6035.6;
var asia18 = 16274.1;
var australia18 = 2100.5;
//Gesamtemission Welt 2018
var welt18;
welt18 = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;
//Emissionen 2018
var africa08 = 1028;
var southamerica08 = 1132.6;
var europe08 = 4965.7;
var northamerica08 = 6600.4;
var asia08 = 12954.7;
var australia08 = 1993;
//Emission Vergleich 2018 zu 2008
var africaVer = africa18 / africa08 * 100;
var southamericaVer = southamerica18 / southamerica08 * 100;
var europeVer = europe18 / europe08 * 100;
var northamericaVer = northamerica18 / northamerica08 * 100;
var asiaVer = asia18 / asia08 * 100;
var australiaVer = australia18 / australia08 * 100;
//Afrika
console.log("Die Emission von Afika ist: " + africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit: ", africa18 / welt18 * 100, "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - africaVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", africa18 - africa08, "kg CO2");
console.log("----------------");
//Süd-Amerika
console.log("Die Emission von Süd-Amerika ist: " + southamerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit: ", southamerica18 / welt18 * 100, "%");
console.log("Für Süd-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - southamericaVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", southamerica18 - southamerica08, " kg CO2");
console.log("----------------");
//Europa
console.log("Die Emission von Europa ist: " + europe18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit: ", europe18 / welt18 * 100, "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - europeVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", europe18 - europe08, "kg CO2");
console.log("----------------");
//Nord-Amerika
console.log("Die Emission von Nord-Amerika ist: " + northamerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit: ", northamerica18 / welt18 * 100, "%");
console.log("Für Nord-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - northamericaVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", northamerica18 - northamerica08, "kg CO2");
console.log("----------------");
//Asien
console.log("Die Emission von Asien ist: " + asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit: ", asia18 / welt18 * 100, "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - asiaVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", asia18 - asia08, "kg CO2");
console.log("----------------");
//Australien
console.log("Die Emission von Australien ist: " + australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit: ", australia18 / welt18 * 100, "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ", 100 - australiaVer, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das:", australia18 - australia08, "kg CO2");
console.log("----------------");
//# sourceMappingURL=script.js.map