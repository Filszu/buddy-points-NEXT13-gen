import { NextApiRequest, NextApiResponse } from 'next'
import { Lead } from '../../typing'
import {getPrograms} from './dbQueries';



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

    console.log( process.env.NODE_ENV )

    if(allOK){  

        if (req.method === 'POST') {
            // post new program
            res.status(200).json({ info: `curretnly adding new programs is unavailable`})
            

        } else if(req.method === 'GET'){       
          try{
            const result= await getPrograms(1,10)
            res.status(200).json(result)
          }     
          catch(err){
            res.status(500).json({ queryResults: err})
          }
             
        
           
           

            
        }
    }
    

  }