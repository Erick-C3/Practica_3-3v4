const COLOR_POWER_RANGER = '\x1b[31m%s\x1b[0m';

class PowerRanger{
    #nombre = "def nombre";
    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    atacaA(unEnemigo){
        this.habla("Soy power ranger " + this.getNombre());
        this.habla("Estoy atacando a "+ unEnemigo.getNombre());
        unEnemigo.defenderseDe(this);
    }

    habla(msj) {
        console.log(COLOR_POWER_RANGER, msj);
    }

    defenderseDe(enemigoAtacante){
        this.habla("Soy power ranger "+ this.getNombre());
        this.habla("Me estoy defendiendo de "+ enemigoAtacante.getNombre());
    }
}


module.exports = PowerRanger;