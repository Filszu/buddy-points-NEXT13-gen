import styles from './page.module.css'
import ProgramsContainer from './(programs)/ProgramsContainer'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <section className="info">
        NOTE: You won't get any reward for playing these games or going to the offer page.<br/>
        This is just an inventory of the programs I recommend 😊
        <br />

        {/* @ts-ignore */}
        <ProgramsContainer/>
        

        <a href="https://bit.ly/myLeadRef" target="_blank"><img src="https://mylead.global/sygnature/60381/27.png" /></a>

        </section>

      

          

      </main>

     
    </div>
  )
}
