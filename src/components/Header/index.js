import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <Link
            href="/"
            passHref
          >
            <a>
              <Image
                src="/images/logo.svg"
                width="200"
                height="40"
                alt="Logo do Overjob"
              />
            </a>
          </Link>

          <Link
            href="/description/1"
            passHref
          >
            <a>
              <button className="styles.publish">
                Cadastrar Vaga
              </button>
            </a>
          </Link>
        </div>


        <div className={styles.search}>
          <div className={styles.searchFields}>
            <input type="text" placeholder="Digite um cargo" />
            <input type="text" placeholder="Digite uma cidade" />
            <button>
              <Image
                src="/images/lupa.svg"     
                width={24}
                height={24}          
                alt="Ícone de pesquisa"
              />
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default Header