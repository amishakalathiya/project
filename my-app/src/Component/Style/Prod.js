import React, { useEffect, useState } from 'react';
import Header from './Header';
import Products from "./Products";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Prod() {
  const [product, setProducts] = useState("")

  useEffect(() => {
    getProducts()
  }, [product])

  const getProducts = () => {
    fetch('http://localhost:3001/product')
      .then((Response) => Response.json())
      .then((json) => setProducts(json));
  }

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          {
            product && product.map((p) =>
              <Products title={p.title} id={p.id} price={p.price}  />
              
            )
          }
        
        </div>
      </div>

    </>
  )
}
