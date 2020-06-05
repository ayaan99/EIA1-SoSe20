"use strict";
// tslint:disable: typedef
var africa08 = 1028;
var southamerica08 = 1132.6;
var europe08 = 4965.7;
var northamerica08 = 6600.4;
var asia08 = 12954.7;
var australia08 = 1993;
var africa18 = 1235.5;
var southamerica18 = 1261.5;
var europe18 = 4209.3;
var northamerica18 = 6035.6;
var asia18 = 16274.1;
var australia18 = 2100.5;
var welt18;
welt18 = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;
window.addEventListener("load", function () {
    function africa() {
        var africa18 = 1235.5;
        var africaW = Math.round(africa18 / welt18 * 100);
        var africaVer = Math.round(africa18 / africa08 * 100);
        var africaV = 100 - africaVer;
        var africaVKg = Math.round(africa18 - africa08);
        document.querySelector(".africaPNG").addEventListener("click", function () {
            console.log(1);
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
    function southamerica() {
        var southamerica18 = 1261.5;
        var southamericaW = Math.round(southamerica18 / welt18 * 100);
        var southamericaVer = Math.round(southamerica18 / southamerica08 * 100);
        var southamericaV = 100 - southamericaVer;
        var southamericaVKg = Math.round(southamerica18 - southamerica08);
        document.querySelector(".southamericaPNG").addEventListener("click", function () {
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
    function europe() {
        var europe18 = 4209.3;
        var europeW = Math.round(europe18 / welt18 * 100);
        var europeVer = Math.round(europe18 / europe08 * 100);
        var europeV = 100 - europeVer;
        var europeVKg = Math.round(europe18 - europe08);
        document.querySelector(".europePNG").addEventListener("click", function () {
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
    function northamerica() {
        var northamerica18 = 6035.6;
        var northamericaW = Math.round(northamerica18 / welt18 * 100);
        var northamericaVer = Math.round(northamerica18 / northamerica08 * 100);
        var northamericaV = 100 - northamericaVer;
        var northamericaVKg = Math.round(northamerica18 - northamerica08);
        document.querySelector(".northamericaPNG").addEventListener("click", function () {
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
    function asia() {
        var asia18 = 16274.1;
        var asiaW = Math.round(asia18 / welt18 * 100);
        var asiaVer = Math.round(asia18 / asia08 * 100);
        var asiaV = 100 - asiaVer;
        var asiaVKg = Math.round(asia18 - australia08);
        document.querySelector(".asiaPNG").addEventListener("click", function () {
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
    function australia() {
        var australia18 = 2100.5;
        var australiaW = Math.round(australia18 / welt18 * 100);
        var australiaVer = Math.round(australia18 / australia08 * 100);
        var australiaV = 100 - australiaVer;
        var australiaVKg = Math.round(australia18 - australia08);
        document.querySelector(".australiaPNG").addEventListener("click", function () {
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
//# sourceMappingURL=emission.js.map