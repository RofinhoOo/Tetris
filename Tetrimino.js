class Tetrimino {
    constructor(nombre = "Z") {
        this.nombre = nombre;
        let tetriminoBase = tetriminosBase[nombre];
        this.color = tetriminoBase.color;
        this.mapa = []
        for (const pmino of tetriminoBase.mapa) {
            this.mapa.push(pmino.copy());
        }
        this.position = createVector(int(tablero.columnas / 2), 0);
    }
    moverDerecha() {
        this.position.x++;

        let salioDelTablero = !this.estaDentroDelTablero;
        if (salioDelTablero) {
            this.moverIzquierda();
        }
    }
    moverIzquierda() {
        this.position.x--;

        let salioDelTablero = !this.estaDentroDelTablero;
        if (salioDelTablero) {
            this.moverDerecha();
        }
    }
    moverAbajo() {
        this.position.y++;

        let salioDelTablero = !this.estaDentroDelTablero;
        if (salioDelTablero) {
            this.moverArriba();
        }
    }
    moverArriba() {
        this.position.y--;

        let salioDelTablero = !this.estaDentroDelTablero;
        if (salioDelTablero) {
            this.moverAbajo();
        }
    }
}

get estaDentroDelTablero(){
    for (const pmino of this.mapaTablero) {
        if (pmino.x < 0) {
            return false;
        }
        if(pmino.x >= tablero.columnas){
            return false;
        }
        if(pmino.y >= tablero.filas){
            return false;
        }
    }
    return true;
}

get mapaCanvas(){
    let retorno = []
    for(const pmino of this.mapa){
        let copy =  pmino.copy().add(this.position);
        retorno.push(tablero.coordenada(copy.x, copy.y))
    }
    return retorno;
}

function crearMapeoBaseTetriminos() {
    tetriminosBase = {
        "Z": {
            color: "red",
            mapa: [
                createVector(),
                createVector(-1, -1),
                createVector(0, -1),
                createVector(1, 0)

            ]
        },
        "S": {
            color: "green",
            mapa: [
                createVector(),
                createVector(1, -1),
                createVector(0, -1),
                createVector(-1, 0)


            ]
        },
        "J": {
            color: "orange",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(-1, -1),
                createVector(1, 0)

            ]
        },
        "L": {
            color: "dodgerblue",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, -1),
                createVector(1, 0)

            ]
        },
        "T": {
            color: "magenta",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, 0),
                createVector(0, -1)

            ]
        },
        "O": {
            color: "yellow",
            mapa: [
                createVector(),
                createVector(0, -1),
                createVector(1, -1),
                createVector(1, 0)

            ]
        },
        "I": {
            color: "cyan",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, 0),
                createVector(2, 0)

            ]
        }
    }
}
