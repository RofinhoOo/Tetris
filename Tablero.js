// Se encargará de representar el modelo del tablero
class Tablero {
    constructor() {
        this.columnas = 10;
        this.filas = 20;
        this.lado_celda = 25;
        this.ancho = this.columnas * this.lado_celda;
        this.alto = this.filas * this.lado_celda;
        this.position = createVector(MARGEN_TABLERO, MARGEN_TABLERO);
    }

    coordenada(x, y) {
        return createVector(x, y).mult(this.lado_celda).add(this.position);
    }

    // Procesamiento lógico del tablero
    dibujar() {
        push()
        noStroke(); // no dibujar los bordes de los rectangulos
        for (let columna = 0; columna < this.columnas; columna++) {
            for (let fila = 0; fila < this.filas; fila++) {
                if ((columna + fila) % 2 == 0) {
                    fill("black")
                } else {
                    fill("#003")
                }
                let c = this.coordenada(columna, fila)
                rect(c.x, c.y, this.lado_celda);
            }
        }
        pop();
    }
}