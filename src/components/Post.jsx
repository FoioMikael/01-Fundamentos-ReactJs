import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

//author: {avatar_url:"",name:"",role:""}
//publishedAt: Date
//content:String


export function Post(props) {
    console.log(props);
    return (
        <article className={styles.post} >
            <header>

                <div className={styles.author}>
                    <Avatar   src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Mikael Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime="2023-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href=""> jane.design/doctorcare</a></p>

                    <p><a href="">#novoprojeto {'  '}#nlw  {' '}#rocketseat {'  '}</a></p>
                
            </div>   


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar </button>
                </footer>
            </form> 
            <div className={styles.commentList}>
               <Comment/>
               <Comment/>
               <Comment/>
            </div>                                 
        </article>
            
        
    );
}