class Paint{
    paint(){
        console.info("Ini Cat");
    }
}
class Shape extends Paint{
    paint(){
        super.paint();
        console.info("Ini Shape");
    }
}

const shape = new Shape();
shape.paint();