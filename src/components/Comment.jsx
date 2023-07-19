import { useState } from "react";
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
      });
}
  return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/18430248?v=4"/>
        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Irailton Reis</strong>
                    <time title="15 de julho as 19:32h"  dateTime="2023-07-15 19:32:30">A cerca de 1h atrás</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={20}/>
                </button>
            </header>
            <p>{content}</p>
        </div>
        
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
    </div>
  )
}
