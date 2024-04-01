import {Header} from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css'

import './global.css'

//author: {avatar_url:"",name:"",role:""}
//publishedAt: Date
//content:String

const posts =[
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role:'CTO @Rocketset'
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifólio' },
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-05-03 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/foiomikael.png',
      name: 'Mikael Santos',
      role:'Wab Developer'
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifólio' },
      {type:'link', content:'https://packmuvis.myportfolio.com/'},
    ],
    publishedAt: new Date ('2022-10-03 10:00:00')
  },
];
export function App() {
 
  return (
    <div>

      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          {posts.map(post =>{
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          
        </main>
      </div>
   
   
   </div>
   
   
  );
}


