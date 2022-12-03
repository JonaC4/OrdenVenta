import { getConnection,sql,queries } from "../database";

export  const getProducts =  async(req,res)=> {

    try {
       const pool = await getConnection();
       const result = await pool.request().query(queries.getAllProduct);
       console.log(result);
       res.json(result.recordset)
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }
   };
  
   export const deleteProductById = async(req,res)=>
   {
     try {
      const {idProducto} = req.params;
      const pool = await getConnection();
     const result = await pool
     .request()
     .input("idProducto",idProducto)
     .query(queries.deleteProductById)
      res.sendStatus(204)

     } catch (error ) {
      res.status(500);
      res.send(error.message);
     }


   }

   export const getProductById = async(req,res)=>
 {
    const {idProducto} = req.params;
    const pool = await getConnection();
   const result = await pool
   .request()
   .input("idProducto",idProducto)
   .query(queries.getProductById)
    res.send(result.recordset[0])
 }


 export  const createNewProduct = async (req,res)=> {

   const {marca,descripcion,idCategoria,stock,precio,fechaRegistro} = req.body;

   if(marca ==null || descripcion==null || idCategoria==null|| stock==null || precio==null || fechaRegistro ==null )   
   {
    return  res.status(400).json({msg:'Bad Request. Please Fill all fields'});
   }

    try {
     const pool = await getConnection();
     await pool.request()
     .input("marca",sql.VarChar,marca)
     .input("descripcion",sql.VarChar,descripcion)
     .input("idCategoria",sql.Int,idCategoria)
     .input("stock",sql.Int,stock)
     .input("precio",sql.Decimal(10,2),precio)
     .input("fechaRegistro",sql.DateTime,fechaRegistro)
     .query(queries.addNewProduct);
     res.json({marca,descripcion,stock,precio,fechaRegistro});
    } catch (error) {
     res.status(500);
     res.send(error.message);
    }

};

 
export const updateProductById = async (req,res) => {
 
  const {nombre,descripcion,categoria} = req.body;

  const {id} = req.params;

  if(nombre ==null || descripcion==null|| categoria==null)  
  {
   return  res.status(400).json({msg:'Bad Request. Please Fill all fields'});
  }

  const pool = await getConnection();
   
  await pool
  .request()
  .input("nombre",sql.VarChar,nombre)
  .input("descripcion",sql.VarChar,descripcion)
  .input("categoria",sql.VarChar,categoria)
  .input("id",sql.Int,id)
  .query(queries.updateProductById)
   
  res.json({nombre,descripcion,categoria})


}










