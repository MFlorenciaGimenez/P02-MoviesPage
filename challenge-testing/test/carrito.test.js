const { CarritoCompra } = require('../index');

const arrayProductos = [
    { producto: 'producto 1', precio: 1000 },
    { producto: 'producto 2', precio: 2000 },
    { producto: 'producto 3', precio: 3000 },
];

describe('CarritoCompra', ( )=>{
    it('CarritoCompra debe estar definido', ()=>{
        expect(CarritoCompra).toBeInstanceOf(Function)
        expect(CarritoCompra).toBeDefined();
    })

    it('deberia poder instanciar objetos de CarritoCompra',()=>{
        const nuevoCarrito = new CarritoCompra();
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
    });

    it('la clase CarritoCompra deberia tener los siguientes metodos:constructor, agregarProducto, calcularTotal, aplicarDescuento',()=>{
        expect(CarritoCompra.prototype.constructor).toBeDefined();
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe('constructor', () => {

    it('inicializa la instancia como un arreglo vacio', ()=>{
        const nuevoCarrito = new CarritoCompra();
        expect(nuevoCarrito.carrito).toStrictEqual([]);
    });
});

describe('agregarProducto', () => {
    it('Recibe un objeto representando un producto y lo agrega al carrito',()=>{
        const nuevoCarrito = new CarritoCompra();
        const producto = arrayProductos[0];
        expect(nuevoCarrito.agregarProducto(producto)).toBe('item agregado con exito')
        expect(nuevoCarrito.carrito[0]).toEqual(producto);
    });
    it('recibe muchos objetos representando muchos productos y lo agrega al carrito', () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [...arrayProductos];
        productos.forEach((element) => nuevoCarrito.agregarProducto(element))
        expect(nuevoCarrito.carrito.length).toBe(3);
        expect(nuevoCarrito.carrito[0].precio).toBe(1000);
        expect(nuevoCarrito.carrito[1].producto).toBe('producto 2');
        expect(nuevoCarrito.carrito[2]).toEqual({
            producto: 'producto 3',
            precio: 3000,   
            });
    });
});

describe('calcularTotal', () => {
    it('Calcula el total de la compra sumando los precios de todos los productos en el carrito', () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [...arrayProductos];
        productos.forEach((element) => nuevoCarrito.agregarProducto(element))
        expect(nuevoCarrito.calcularTotal()).toBe(6000);
    });
});

describe('aplicarDescuento', () => {
    it('Aplica un descuento al total de la compra según el porcentaje especificado', () => {
        const nuevoCarrito = new CarritoCompra();
        const productos = [...arrayProductos]
        productos.forEach((element) => nuevoCarrito.agregarProducto(element))
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(6000);
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(5400);
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(3000);
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0);
    });
});

    

    
   
        



    


