
export const queries = {
    getAllCustomer:'SELECT * FROM Cliente',
    getAllProduct:'SELECT * FROM Producto',
    getProductById:'SELECT * FROM Producto Where idProducto=@idProducto',
    addNewCustomer:
    'INSERT INTO Cliente(nombre,cedula,correo,telefono,fechaRegistro) VALUES (@nombre,@cedula,@correo,@telefono,@fechaRegistro)',
    deleteProductById:'DELETE FROM Producto where idProducto = @idProducto',
    addNewProduct:
    'INSERT INTO Producto(marca,descripcion,idCategoria,stock,precio,fechaRegistro)  VALUES (@marca,@descripcion,@idCategoria,@stock,@precio,@fechaRegistro)'
    
}





