const Enemigo = require("./Enemigo.js");
const PowerRanger = require("./PowerRanger.js");
const SEPARACION = '\x1b[36m%s\x1b[0m';

const unPowerRanger = new PowerRanger();
const enemigo1 = new Enemigo();
unPowerRanger.setNombre("Red");
enemigo1.setNombre("Zoor");

unPowerRanger.atacaA(enemigo1);
console.log(SEPARACION, "--------------");
enemigo1.atacaA(unPowerRanger);