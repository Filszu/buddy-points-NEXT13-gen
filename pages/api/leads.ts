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
        

       

        

        if (req.method === 'POST') {
            // // post new lead
            // const newLead:Lead = req.body;
            // console.log(newLead)

            // const query = req.query;
            // const {api_key} = query;
 

            // console.log(api_key)
            // console.log(`correct key: ${process.env.API_KEY}`)
            // if(api_key===`${process.env.API_KEY_LEADS}`){
            //   res.status(200).json({newLead})
            // }
            // else{
              res.status(403).json({info:`wrong API key`})
            // }

            

            
           



        } else if(req.method === 'GET'){
            // Handle any other HTTP method
            
             const result= await getLeads(1,50)
            //  const result= await dbQuery(``)
            // console.log(result)

           res.status(200).json(result )
           

            
        }
    }
    

  }