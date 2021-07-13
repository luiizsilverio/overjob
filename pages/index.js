import styles from '../styles/Home.module.css'

import Headers from '../src/components/Header'
import Filters from '../src/components/Filters'
import Cards from '../src/components/Cards'

export default function Home() {
  return (
    <div className={styles.structure}>
      <Headers />
      <Filters />
      <Cards />     
    </div>
  )
}
