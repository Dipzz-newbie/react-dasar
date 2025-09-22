const SayHelloForm = ({text}) => {
    return(
       <>
         <form action="">
            <input type="text" id="nama"/>
            <button onClick={(e) => {
                // to prevent the form from submitting and refreshing the page
                // get the value from the input
                // and show it in an alert
                // use template string to show the value
                // ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                e.preventDefault() 
                const value = document.getElementById("nama").value // get the value from the input
                document.getElementById("nama_pengguna").innerText = `Hello, ${value}` // change the text of the h1 with id nama_pengguna
            }}>{text}</button>  
        </form>

        <h1 id="nama_pengguna">Your name</h1>
       </>
       
    )
}

export default SayHelloForm;