import sql from 'mssql';

const db_settings = {
user: 'sa',
password: '12341234',
server: 'localhost',
database: 'SRiDB',
options: {
    encrypt: true,
    trustServerCertificate: true
}
};

async function getConnection() {
   try {
    const pool = await sql.connect(db_settings);
  
   return pool;
   } catch(error) {
    console.log(error);
   }
}

getConnection();