"use strict";
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Appliance(power){
  this.power = power,
  this.weight = 0,
  this.status = false
}

Appliance.prototype.enabled = function(status){
   status = false;
}

function LampAppliance(power){this.power = power}
function IronAppliance(power){this.power = power}
function ComputerAppliance(power){this.power = power}

LampAppliance.prototype = new Appliance(40);
IronAppliance.prototype = new Appliance(1000);
ComputerAppliance.prototype = new Appliance(600);

LampAppliance.weight = 30;
LampAppliance.diameter = 150;
LampAppliance.material = "hard plastic";
LampAppliance.economyMode = false;
LampAppliance.prototype.switchEconomy = function(mode){
  economyMode = mode;
}

IronAppliance.color = "black";
IronAppliance.overheatingProtection = false;
IronAppliance.prototype.switchProtection = function(mode){
  overheatingProtection = mode;
}

ComputerAppliance.isWiFiModule = true;
ComputerAppliance.sleepMode = false;
ComputerAppliance.prototype.sleepModeEnabled = function(mode){
  sleepMode = mode;
}

gpLamp = new LampAppliance(60);
philipsIron = new IronAppliance(1500);
gpLamp.enabled(true);
philipsIron.enabled(true);

gpLamp.switchEconomy(true);
philipsIron.switchProtection(true);

console.log(`Summary power of enabled devices is ${gpLamp.power + philipsIron.power} watts`);
