class copo {

    constructor(x, diameter) {
        this.x = x
        this.y = 0
        this.v = diameter
        this.d = diameter
    }

    dibujar() {
        fill(0, 0, 0)
        ellipse(this.x, this.y , this.d, this.d)
        
        if (this.y < 500) {
            this.y += this.v
        }
    }

    getY() {
        return this.y
    }
}