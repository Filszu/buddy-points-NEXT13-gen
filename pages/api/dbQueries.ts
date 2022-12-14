import mysql from 'mysql2/promise'
import { db_getConnection } from '../../db';

export async function dbQuery(query: string){

   
    const connection = await db_getConnection();

    try{
      
        const q ='SELECT * FROM `logs`';
        const [rows] = await connection.execute(q);

        connection.end();

        return rows;
      
    }
    catch(err){
        console.log(`-------------------------------------------`)
        console.log(err)
    }
    
      
}

export async function getLeads(){
    return {filip:'xxx'}
}