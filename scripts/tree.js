class tree {

    constructor(y, width) {
        this.y = y
        this.width = width
    }

    printTree (){
        for (let i = 0; i < this.y; i += 6) {
            line(-(this.formula((i/this.y)*100)), i, this.formula((i/this.y)*100), i)
        }
    }

    formula(x) {
        return (x*150/100)
    }

}