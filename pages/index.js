import { useEffect, useState } from 'react'
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
  
  function handleToggleFilter(key, checked, value) {
    console.log(key, checked, value)
    let field
    switch (key) {
      case 'estado':
        field = 'state'
        break;
      case 'modalidade':
        field = 'modal'
        break;
      case 'nivel':
        field = 'level'
        break;
      case 'regime':
        field = 'type'
        break;
      case 'categoria':
        field = 'category'
        break;      
    }

    setActiveFilter(prevState => ({...prevState, [value]: { field: checked }}))
  }

  useEffect(() => {  
    jobs.forEach(job => {
      setFilters(prevState => {
        let obj = prevState        

        if (prevState.estado.indexOf(job.state) < 0) {
          obj.estado = [...obj.estado, job.state]
        }

        if (prevState.modalidade.indexOf(job.model) < 0) {
          obj.modalidade = [...obj.modalidade, job.model]
        }

        if (prevState.nivel.indexOf(job.level) < 0) {
          obj.nivel = [...obj.nivel, job.level]
        }

        if (prevState.regime.indexOf(job.type) < 0) {
          obj.regime = [...obj.regime, job.type]
        }

        if (prevState.categoria.indexOf(job.category) < 0) {
          obj.categoria = [...obj.categoria, job.category]
        }

        return { ...obj }
      })
    })
  }, [jobs])
  
  useEffect(() => {  
    let newJobs = []

    Object.keys(activeFilter).map(key => {
      let found = false
      if (activeFilter[key].checked) {
        found = true
        newJobs = [...jobs, ...jobs.filter(job => 
          job[activeFilter[key].field === key])]
      }

      if (found) {
        setJobList(newJobs)
      } else {
        setJobList(jobs)
      }
    })    
  }, [activeFilter])

  return (
    <div className={styles.structure}>
      <Header />

      <div className={styles.cardContainer}>
        <div className={styles.filter}>
          <h4>Definir busca</h4>
          <div className={styles.filter_list}>
          
            {
              Object.keys(filters).map((key, index) => (
                <Filters 
                  key={index} 
                  filters={filters[key]}
                  onChange={handleToggleFilter}
                  category={key}
                />
              ))
            }
          </div>     
        </div>       
        
        <div className={styles.cards}>
          {
            jobList && jobList.map((job, index) => (
              <Card 
                key={index} 
                title={job.title}
                description={job.description}
                company={job.enterprise}
                day={job.day}
                local={`${job.city} - ${job.state}`}
              />    
            ))
          }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data: { error, jobs = []} } = await axios
  .get('http://localhost:3000/api/jobs?secret=1234')
 
  return {
    props: {
      jobs
    },
    revalidate: 5000 // 5 segundos
  }
}

filtro nao funcionando handleToggleFilter