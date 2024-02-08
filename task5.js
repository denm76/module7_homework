"use strict";
//Переписать консольное приложение из предыдущего юнита на классы.

class Appliance {
  constructor(power) {
      this.power = power,
      this.weight = 0,
      this.status = false
  }

  enabled(status) {
    this.status = status;
  }
}

class LampAppliance extends Appliance {
  constructor(power) {
    super(power);
    this.weight = 30;
    this.diameter = 150;
    this.material = "hard plastic";
    this.economyMode = false;
  }

  switchEconomy(mode) {
    this.economyMode = mode;
  }
}

class IronAppliance extends Appliance {
  constructor(power) {
    super(power);
    this.weight = 2000;
    this.color = "black";
    this.overheatingProtection = false;
  }

  switchProtection(mode) {
    this.overheatingProtection = mode;
  }
}

class ComputerAppliance extends Appliance {
  constructor(power) {
    super(power);
    this.isWiFiModule = true;
    this.sleepMode = false;
  }

  sleepModeEnabled(mode) {
    this.sleepMode = mode;
  }
}

const gpLamp = new LampAppliance(60);
const philipsIron = new IronAppliance(1500);
const amdComputer = new ComputerAppliance(600);

gpLamp.enabled(true);
philipsIron.enabled(true);

gpLamp.switchEconomy(true);
philipsIron.switchProtection(true);
console.log(gpLamp.economyMode);


console.log(`Summary power of enabled devices is ${gpLamp.power + philipsIron.power} watts`);