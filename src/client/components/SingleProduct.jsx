import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "./app"

export default function SingleProduct() {

    const [ product, setProduct ] = useState({})
    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`${BASE_URL}/products`)
            const data = await response.json()

            console.log(data)
            setProduct(cleanProduct(data))
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
            availability: data.products.availability,
            image: data.products.image,
            quantity: data.products.quantity,
            price: data.products.price
        }
    }

    console.log(product);

    return <div className="singleProduct">

    </div>
}
