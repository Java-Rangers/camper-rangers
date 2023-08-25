import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"

export default function SingleProduct() {

    const [ product, setProduct ] = useState({})
    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`${API}/products/${id}`)
            const data = await response.json()

            console.log(data)
            setProduct(cleanProduct(data))
        }
        
        fetchData();
        console.log('fetch');

    }, [])

    function cleanProduct(data) {
        return {
            title: data.singleProduct.title,
            description: data.singleProduct.description,
            brand: data.singleProduct.brand,
            image: data.singleProduct.image,
            quantity: data.singleProduct.quantity,
            price: data.singleProduct.price
        }
    }

    return <div className="singleProduct">
        <h1>{product.title}</h1>
        <h3>{product.brand}</h3>
        <img src={product.image}/>
        <p>{product.description}</p>
        <h3>{product.quantity}</h3>
        <h3>{product.price}</h3>

        <Link to='/products' className="backButton"><button>go back</button></Link>
        
    </div>
}
