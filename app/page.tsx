import styles from './page.module.css'
import ProgramsContainer from './(programs)/ProgramsContainer'

export default function Home() {

  return (
    <div className='container'>
      <main>
        
        
        <br />

        {/* @ts-ignore */}
        <ProgramsContainer/>
        <section className="info">
        NOTE: You won't get any reward for playing these games or going to the offer page.<br/>
        This is just an inventory of the programs I recommend 😊
        

        <a href="https://bit.ly/myLeadRef" target="_blank"><img src="https://mylead.global/sygnature/60381/27.png" /></a>

        </section>

      

          

      </main>

     
    </div>
  )
}
