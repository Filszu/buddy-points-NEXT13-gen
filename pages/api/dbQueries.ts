import mysql from 'mysql2/promise'
import { db_getConnection } from '../../db';

export async function dbQuery(query: string){

   
    const connection = await db_getConnection();

    try{
      
        // const q ='SELECT * FROM `logs`';
        const q = query;
        const [rows] = await connection.execute(q);

        connection.end();

        return rows;
      
    }
    catch(err){
        // console.log(`-------------------------------------------`)
        console.log(err)
        return err
    }
    
      
}

export async function getLeads(page:number, limit:number){
    return await dbQuery('SELECT * FROM `logs`')
}

export async function getPrograms(page:number, limit:number){
    const rowsLimit = limit?limit:10;
    return await dbQuery(`SELECT * FROM offers LIMIT ${rowsLimit}`)
}