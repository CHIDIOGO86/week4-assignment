class Shape {
    constructor(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(type, adj, opp, hyp){
        super(type);
        this.adj = adj  
        this.opp = opp
        this.hyp = hyp
    }
    perimeter(){
        return "the perimeter of " + this.type + " = "  + this.adj * this.opp * this.hyp
    }
}
let test = new Triangle("equilateral triangle", 5, 10, 7)
console.log(test.perimeter())




    


