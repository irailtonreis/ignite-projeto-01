import styles from "./Post.module.css"

export function Post(props){
    return(
        <article className={styles.post}>
            <header>    
                <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/18430248?v=4" />
                <div className={styles.authorInfo}>
                    <strong>Irailton Oliveira</strong>
                    <span>Web Developer</span>
                </div>
                </div>
                <time title="15 de julho as 19:32h"  dateTime="2023-07-15 19:32:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href="#"> jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '} 
                    <a href="#">#nlw</a>{' '} 
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}