function agebar(props){
    if(props.isLoggedIn){
        return <h2>Welcome{props.username}</h2>
    }
}
export default agebar