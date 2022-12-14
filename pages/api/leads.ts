import { NextApiRequest, NextApiResponse } from 'next'
import { Lead } from '../../typing'
import {dbQuery, getLeads} from './dbQueries';



export const config = {
    api: {
      bodyParser: {
        sizeLimit: '500kb',
        
      },
    },
  }


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
            
             const result= await getLeads(1,10)
            //  const result= await dbQuery(``)
            // console.log(result)

           res.status(200).json({ queryResults: result })
           

            
        }
    }
    

  }