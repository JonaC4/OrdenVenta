import sql  from 'mssql'

import config from '../config';
const dbsettings = 
{


    user:config.dbUser,
    password:config.dbPassword,
    server:config.dbServer,
    database:config.dbDatabase,
    options: {
        encrypt:true,
        trustServerCertificate:true,
    },
};

 export async  function  getConnection()
  {
    try {
    const pool = await  sql.connect(dbsettings);
    return pool ;
    } catch (error) {
        console.error(error);
    }
  }

 

export{sql}



