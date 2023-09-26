const COLOR_POWER_RANGER = '\x1b[31m%s\x1b[0m';

class PowerRanger{
    #nombre = "def nombre";
    #puntosAtaque = 0;
    #puntosVida = 0;

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }

    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }

    getPuntosAtaque(){
        return this.#puntosAtaque;
    }

    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    atacaA(unEnemigo){
        this.habla("Soy power ranger " + this.getNombre());
        this.habla("Estoy atacando a "+ unEnemigo.getNombre());
        this.habla("con "+ this.getPuntosAtaque() + " puntos ataque");
        unEnemigo.defenderseDe(this);
    }

    habla(msj) {
        console.log(COLOR_POWER_RANGER, msj);
    }

    defenderseDe(enemigoAtacante){
        this.habla("Soy power ranger "+ this.getNombre());
        this.habla("Me estoy defendiendo de "+ enemigoAtacante.getNombre());
        // this.#puntosVida-= powerRangerAtacante.getPuntosAtaque();
        this.setPuntosVida(this.getPuntosVida() - enemigoAtacante.getPuntosAtaque());
        if (this.getPuntosVida() > 0) {
            this.habla("Me quedan "+ this.getPuntosVida() + " puntos vida");
        }else{
            this.habla("Estoy derrotado :(");
        }
    }
}


module.exports = PowerRanger;