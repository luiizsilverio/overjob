import { useState } from 'react'
import axios from 'axios'

import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Filters from '../src/components/Filters'
import Card from '../src/components/Card'

export default function Home({ jobs }) {
  const [filters, setFilters] = useState({
    estado: [],
    modalidade: [],
    nivel: [],
    regime: [],
    categoria: []
  })

  const [jobList, setJobList] = useState(jobs)
  const [activeFilter, setActiveFilter] = useState({})
  
  return (
    <div className={styles.structure}>
      <Header />

      <div className={styles.cardContainer}>
        <Filters />
        <Card />     
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data: { error, jobs = []} } = await axios.get('http://localhost:3000/api/jobs')

  
  return {
    props: {
      jobs
    },
    revalidate: 5000 // 5 segundos
  }
}