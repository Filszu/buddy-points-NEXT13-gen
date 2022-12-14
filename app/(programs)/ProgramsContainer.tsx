import { Program,Programs } from "../../typing";
// import Test from "./Test";
import { ProgramCard2 } from "./ProgramCard";

const fetchPrograms = async () => {
    const res = await fetch(`http://localhost:3000/api/programs`,{next:{revalidate:60}})
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
        // programs.map((program)=>(
        //     <h1>{program.offer_name}</h1>
        // ))
          // programs.map((program)=><h1 key={program.offer_id}>{program.offer_name}</h1>)
        // <h1>{programs[0].offer_name}</h1>
        
        }
        {/* <Test foo={4} bar="dsdsff" /> */}
    </section>
  )
}

export default ProgramsContainer
