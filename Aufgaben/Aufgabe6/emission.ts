// tslint:disable: typedef

var africa08: number = 1028;
var southamerica08: number = 1132.6;
var europe08: number = 4965.7;
var northamerica08: number = 6600.4;
var asia08: number = 12954.7;
var australia08: number = 1993;

var africa18: number = 1235.5;
var southamerica18: number = 1261.5;
var europe18: number = 4209.3;
var northamerica18: number = 6035.6;
var asia18: number = 16274.1;
var australia18: number = 2100.5;

var welt18: number;
welt18 = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;

window.addEventListener("load", function() {

function africa() {
    var africa18: number = 1235.5;
    var africaW: number = Math.round(africa18 / welt18 * 100);
    var africaVer: number = Math.round(africa18 / africa08 * 100);
    var africaV: number = 100 - africaVer;
    var africaVKg: number = Math.round(africa18 - africa08);

    document.querySelector(".africaPNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Afrika";
        document.querySelector(".emission18").innerHTML = africa18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Afrika";
        document.querySelector(".relative").innerHTML = africaW + "%";
        document.querySelector(".growth").innerHTML = africaV + "%";
        document.querySelector(".growthAbsolute").innerHTML = africaVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4%");
    });
}
africa();

function southamerica(): void {
    var southamerica18: number = 1261.5;
    var southamericaW: number = Math.round(southamerica18 / welt18 * 100);
    var southamericaVer: number = Math.round(southamerica18 / southamerica08 * 100);
    var southamericaV: number = 100 - southamericaVer;
    var southamericaVKg: number = Math.round(southamerica18 - southamerica08);

    document.querySelector(".southamericaPNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Südamerika";
        document.querySelector(".emission18").innerHTML = southamerica18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Südamerika";
        document.querySelector(".relative").innerHTML = southamericaW + "%";
        document.querySelector(".growth").innerHTML = southamericaV + "%";
        document.querySelector(".growthAbsolute").innerHTML = southamericaVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4%");
    });
}
southamerica();

function europe(): void {
    var europe18: number = 4209.3;
    var europeW: number = Math.round(europe18 / welt18 * 100);
    var europeVer: number = Math.round(europe18 / europe08 * 100);
    var europeV: number = 100 - europeVer;
    var europeVKg: number = Math.round(europe18 - europe08);

    document.querySelector(".europePNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Europa";
        document.querySelector(".emission18").innerHTML = europe18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Europa";
        document.querySelector(".relative").innerHTML = europeW + "%";
        document.querySelector(".growth").innerHTML = europeV + "%";
        document.querySelector(".growthAbsolute").innerHTML = europeVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14%");
    });
}
europe();

function northamerica(): void {
    var northamerica18: number = 6035.6;
    var northamericaW: number = Math.round(northamerica18 / welt18 * 100);
    var northamericaVer: number = Math.round(northamerica18 / northamerica08 * 100);
    var northamericaV: number = 100 - northamericaVer;
    var northamericaVKg: number = Math.round(northamerica18 - northamerica08);

    document.querySelector(".northamericaPNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Nordamerika";
        document.querySelector(".emission18").innerHTML = northamerica18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Nordamerika";
        document.querySelector(".relative").innerHTML = northamericaW + "%";
        document.querySelector(".growth").innerHTML = northamericaV + "%";
        document.querySelector(".growthAbsolute").innerHTML = northamericaVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 19%");
    });
}
northamerica();

function asia(): void {
    var asia18: number = 16274.1;
    var asiaW: number = Math.round(asia18 / welt18 * 100);
    var asiaVer: number = Math.round(asia18 / asia08 * 100);
    var asiaV: number = 100 - asiaVer;
    var asiaVKg: number = Math.round(asia18 - australia08);

    document.querySelector(".asiaPNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Asien";
        document.querySelector(".emission18").innerHTML = asia18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Asien";
        document.querySelector(".relative").innerHTML = asiaW + "%";
        document.querySelector(".growth").innerHTML = asiaV + "%";
        document.querySelector(".growthAbsolute").innerHTML = asiaVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 52%");
    });
}
asia();

function australia(): void {
    var australia18: number = 2100.5;
    var australiaW: number = Math.round(australia18 /  welt18 * 100);
    var australiaVer: number = Math.round(australia18 / australia08 * 100);
    var australiaV: number = 100 - australiaVer;
    var australiaVKg: number = Math.round(australia18 - australia08);

    document.querySelector(".australiaPNG").addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "CO2-Emissionen von Australien";
        document.querySelector(".emission18").innerHTML = australia18 + " kg";
        document.querySelector(".continent18").innerHTML = "Absolute Emission von Australien";
        document.querySelector(".relative").innerHTML = australiaW + "%";
        document.querySelector(".growth").innerHTML = australiaV + "%";
        document.querySelector(".growthAbsolute").innerHTML = australiaVKg + " kg";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 7%");
    });
}
australia();

});