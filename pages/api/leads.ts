import { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { Lead } from '../../typing'
import {dbQuery, getLeads} from './dbQueries';






export default async (req: NextApiRequest, res: NextApiResponse) => {
    // res.status(200).json({ name: 'John Doe' })
    console.log(req.body)

    const allOK =true;

    if(allOK){
        const newLead:Lead = req.body;
        console.log(newLead)

       



        if (req.method === 'POST') {
            // post new lead


        } else if(req.method === 'GET'){
            // Handle any other HTTP method
            
            //  const result= await getLeads()
             const result= await dbQuery(``)
            // console.log(result)

           res.status(200).json({ queryResults: result })
           

            
        }
    }
    

  }