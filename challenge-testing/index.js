class CarritoCompra{
   constructor(){
    this.carrito = [];

   };
   agregarProducto(item){
    this.carrito.push(item)
    return "item agregado con exito";

   };
   calcularTotal(){
    const sumatoria = this.carrito.reduce((acum, item) =>{
        acum = acum + item.precio;
        return acum;
    }, 0)
        return sumatoria;
   };
   aplicarDescuento(desc){
       const compraTotal = this.calcularTotal()
       const precioFinal = compraTotal - (compraTotal * desc)/100
        return precioFinal;
   };

    
};


module.exports = {
    CarritoCompra,
};



