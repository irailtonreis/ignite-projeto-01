import styles from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "./components/Avatar";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/18430248?v=4" />
                <strong>Irailton Reis</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>

    )
}