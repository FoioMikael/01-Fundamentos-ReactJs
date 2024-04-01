
import { ThumbsUp, TrashSimple } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/foiomikael.png" alt=''/>

            <div className={styles.commnetBox}> 
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                    <strong>Mikael Santos</strong>
                    <time title="11 de maio às 08:13h" dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                       <TrashSimple size={24} />
                    </button>
                </header>
                <p>Muito bom continue assim</p>
            </div>

            <footer className={styles.commentFooter}>
                <button>
                    <ThumbsUp size={20}/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
            </div>
        </div>
    )

}