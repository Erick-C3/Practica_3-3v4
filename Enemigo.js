const COLOR_ENEMIGO = '\x1b[34m%s\x1b[0m';

class Enemigo{
    #nombre = "def nombre";
    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

    defenderseDe(powerRangerAtacante){
        this.habla("Soy el enemigo "+ this.getNombre());
        this.habla("Me estoy defendiendo de "+ powerRangerAtacante.getNombre());
    }

    habla(msj) {
        console.log(COLOR_ENEMIGO, msj);
    }

    atacaA(unEnemigo){
        this.habla("Soy enemigo " + this.getNombre());
        this.habla("Estoy atacando a "+ unEnemigo.getNombre());
        unEnemigo.defenderseDe(this);
    }
}

module.exports = Enemigo;