import { serverURL } from "../../config/config";
import { Program,Programs } from "../../typing";
// import Test from "./Test";
import { ProgramCard2 } from "./ProgramCard";




const fetchPrograms = async () => {

  
    const res = await fetch(`${serverURL}/api/programs`,{next:{revalidate:60}})
    
    // const res = await fetch(`${host}:${port}/api/programs`,{next:{revalidate:60}})
    // cache: 'force-cache' | 'no-store'
    // const programs:Programs= await res.json();
    const programs:Program[]= await res.json();

    console.log("programs",programs)
    // console.log(`-----------------\n\n================================
    // program 0 :\n
    // ${programs[0].offer_name}
    // `)
    return programs;

}

async function ProgramsContainer() {
    
    const programs = await fetchPrograms();

  return (
    <section className="programmsContainer">
        {
          // playerId={playerName}
          programs.map((program)=><ProgramCard2 program={program}  key={program.offer_id}/>)
    
        // <h1>{programs[0].offer_name}</h1>
        
        }
      
    </section>
  )
}

export default ProgramsContainer
