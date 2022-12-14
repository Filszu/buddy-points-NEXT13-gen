import { NextApiRequest, NextApiResponse } from 'next'
import { Lead } from '../../typing'

import mysql from 'mysql2/promise'
import { db_connection } from '../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // res.status(200).json({ name: 'John Doe' })
    console.log(req.body)

    const allOK =true;

    if(allOK){
        const newLead:Lead = req.body;
        console.log(newLead)

        db_connection.connect()



        if (req.method === 'POST') {
            // post new lead


        } else if(req.method === 'GET'){
            // Handle any other HTTP method
            db_connection.query(
                'SELECT * FROM `logs`',
                function(err, results, fields) {
                  console.log(results); // results contains rows returned by server
                  console.log(fields); // fields contains extra meta data about results, if available

                  res.status(200).json({ queryResults: results })

                }
              );

            
        }
    }
    

  }