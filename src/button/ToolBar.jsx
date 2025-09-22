

const Toolbar =  ({onClick}) => {
    return(
        <div onClick={onClick}>
            <button onClick={onClick}>satu</button>
            <button onClick={onClick}>dua</button>
            <button onClick={onClick}>tiga</button>
        </div>
    )
}

export default Toolbar;