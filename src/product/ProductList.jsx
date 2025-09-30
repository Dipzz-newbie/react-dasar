import { useEffect, useRef, useState } from "react";
import Product from "./Product";


const ProductList = () => {

    const [products, setProducts] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
        if(loaded.current === false){
            fetch("/product.json").then((response) => response.json()).then((data) => {setProducts(data)}).then(loaded.current(true))
        }
    })

    return(
        <div>
            <h1>List Product</h1>
            <p>{products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}</p>
        </div>
    )
}

export default ProductList;