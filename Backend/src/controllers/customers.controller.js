  import { getConnection,sql,queries } from "../database";

  export  const getCustomers =  async(req,res)=> {

      try {
         const pool = await getConnection();
         const result = await pool.request().query(queries.getAllCustomer);
         console.log(result);
         res.json(result.recordset)

      } catch (error) {
         res.status(500);
         res.send(error.message);
      }
     };
    
  export  const createNewCustomer = async (req,res)=> {

    const {nombre,cedula,correo,telefono,fechaRegistro} = req.body;

    if(nombre ==null || cedula==null || correo ==null|| telefono==null || fechaRegistro ==null )   
    {
     return  res.status(400).json({msg:'Bad Request. Please Fill all fields'});
    }

     try {
      const pool = await getConnection();
      await pool.request()
      .input("nombre",sql.VarChar,nombre)
      .input("cedula",sql.VarChar,cedula)
      .input("correo",sql.VarChar,correo)
      .input("telefono",sql.VarChar,telefono)
      .input("fechaRegistro",sql.DateTime,fechaRegistro)
      .query(queries.addNewCustomer);
      res.json({nombre,cedula,correo,telefono,fechaRegistro});
     } catch (error) {
      res.status(500);
      res.send(error.message);
     }

 };















 





