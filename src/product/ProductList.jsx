import { useEffect, useState } from "react";
import Product from "./Product";


const ProductList = () => {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    const handleClick = () => {
        setLoaded(true)
    }

    useEffect(() => {
        if(loaded){
            fetch("/product.json").then((response) => response.json()).then((data) => {setProducts(data)})
        }

        return () => {
            console.log("Product List component unmounted")
        }
    }, [loaded])

    return(
        <div>
            <h1>List Product</h1>
            <button onClick={handleClick}> Load Product</button>
            <p>{products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}</p>
        </div>
    )
}

export default ProductList;