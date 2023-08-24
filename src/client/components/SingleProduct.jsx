import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { useParams } from "react-router-dom"

export default function SingleProduct() {

    const [ product, setProduct ] = useState({})
    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`${API}/products`)
            const data = await response.json()

            console.log(data)
            setProduct(cleanProduct(data.product))
        }
        console.log(data);
        fetchData();
        console.log('fetch');

    }, [])

    function cleanProduct(data) {
        return {
            title: data.products.title,
            description: data.products.description,
            brand: data.products.brand,
            image: data.products.image,
            quantity: data.products.quantity,
            price: data.products.price
        }
    }

    console.log(product);

    return <div className="singleProduct">
        <h1>{product.title}</h1>
        <h3>{product.brand}</h3>
        <img src={product.image}/>
        <p>{product.description}</p>
        <h3>{product.quantity}</h3>
        <h3>{product.price}</h3>

        <Link to='/' className="backButton"><button>go back</button></Link>
        
    </div>
}
