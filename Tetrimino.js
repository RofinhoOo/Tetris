class Tetrimino {
    constructor(nombre = random(["Z", "S", "J", "L", "T", "O", "I"])) {
        this.nombre = nombre;
        let base = tetriminosBase[nombre];
        this.color = tetriminoBase.color;
        this.mapa = []
        for (const pmino of tetriminoBase.mapa) {
            this.mapa.push(pmino.copy());
        }
        this.position = createVector(int(tablero.columnas / 2), 0);
    }
    moverDerecha() {
        this.position.x++;

        if (this.movimientoErroneo) {
            this.moverIzquierda();
        }
    }
    moverIzquierda() {
        this.position.x--;

        if (this.movimientoErroneo) {
            this.moverDerecha();
        }
    }
    moverAbajo() {
        this.position.y++;
  
        if (this.movimientoErroneo) {
            this.moverArriba();
            tablero.almacenarMino = this;
            tetrimino = new Tetrimino();
        }
    }
    moverArriba() {
        this.position.y--;
        }
    }

    girar(){
        for(const pmino of this.mapa){
            pmino.set (pmino.y, -pmino.x);
        }
        if (this.movimientoErroneo) {
            this.desgirar();
        }
    }
    desgirar(){
        for(const pmino of this.mapa){
            pmino.set (-pmino.y, pmino.x);
        }
    }

    get movimientoErroneo(){
        let salioDelTablero = !this.estaDentroDelTablero;
        return salioDelTablero || this.colisionConMinosAlmacenados;

    }

    get colisionConMinosAlmacenados(){
        for(const pmino of this.mapaTablero){
               if(tablero.minosAlmacenados[pmino.x][pmino.y]){
                           return true;
                       }
                   }
               return false;
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

get mapaTablero(){
    let retorno = []
    for(const pmino of this.mapa){
        let copy =  pmino.copy().add(this.position);
        retorno.push(tablero.coordenada(copy.x, copy.y))
    }
    return retorno;
}

get mapaCanvas(){
    let retorno = []
    for(const pmino of this.mapa){
        let copy =  pmino.copy().add(this.position);
        retorno.push(copy)
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

    dibujar() {
        push()
        fill(this.color);
        for(const pmino of this.mapaCanvas){
            Tetrimino.dibujarMino(pmino);
    
        }
        pop()
    }
    static dibujarMino(pmino){
        push()
        noStroke()
        fill(255, 255, 255, 80)
        beginShape()
        vertex(pmino.x, pmino.y)
        vertex(pmino.x + tablero.lado_celda, pmino.y)
        vertex(pmino.x + tablero.lado_celda, pmino.y + tablero.lado_celda)
        endShape(CLOSE)
        beginShape()
        fill(0, 0, 0, 80)
        vertex(pmino.x, pmino.y)
        vertex(pmino.x, pmino.y + tablero.lado_celda)
        vertex(pmino.x + tablero.lado_celda, pmino.y + tablero.lado_celda)
        endShape(CLOSE)
        pop()
    }
}
