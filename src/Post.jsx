export function Post(props){
    return(
        <div>
            <strong>{props.author}</strong>
            <span>{props.content}</span>
        </div>
    )
}