import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GalleryDetail.scss"

const GalleryDetail = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState();

  const getProduct = async (id) => {
    const resultado = await axios.get("http://localhost:8000/gallery/" + id);

    setProduct(resultado.data);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      {product && (
        <div className="galleryDetail">
          <h3>{product.title}</h3>
          <img src={product.picture} />
          <p>Precio: {product.precio}€</p>
        </div>
      )}
    </>
  );
};

export default GalleryDetail;
