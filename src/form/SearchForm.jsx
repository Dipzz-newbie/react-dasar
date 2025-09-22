const SearchForm = ({text}) => {
    return(
        <form action="">
            <input type="text" id="value"/>
            <button onClick={(e) => {
                // to prevent the form from submitting and refreshing the page
                // get the value from the input
                // and show it in an alert
                // use template string to show the value
                // ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                e.preventDefault() 
                const value = document.getElementById("value").value // get the value from the input
                alert(`you search for ${value}`)
            }}>{text}</button>
        </form>
    )
}

export default SearchForm;