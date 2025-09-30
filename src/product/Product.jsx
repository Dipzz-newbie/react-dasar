

const Product = ({product}) => {
    return(
        <div>
            <h1>{product.id} : {product.product}</h1>
            <p>harga : {product.price}</p>
        </div>
    )
}

export default Product;