import styles from './styles.module.css'

function Filters() {
  return (
    <>
      <div className={styles.filters}>
        <h4 className={styles.title}>Categoria</h4>
        
        <ul className={styles.filter_list}>
          <li>
            <input type="checkbox" name="uf" id="uf" />
            <label for="uf">SP</label>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Filters