import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'
import './Gallery.scss'

const Gallery = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:8000/gallery')
      console.log(response);
      setProducts(response.data.Posts)
      
    }
    getProducts()
  }, [])
  return (
    <>
      <div className="gallery">
        {products.map ((product) =>
        <>
        <div className='gallery__cards'>
        <Link key={product._id} to={`/gallery/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          <img src={product.picture}/>
          <p>Precio: {product.precio}€</p>
        </div>
          </>

        )}
      </div>
    </>
  )
}

export default Gallery