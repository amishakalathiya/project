import React, { useEffect, useState } from 'react'
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import custom from "./Custom.module.css";
//import Products from "./Products";
import { LinkContainer } from 'react-router-bootstrap';
// import Header from './Component/Style/Header';


export default function Home() {
  // const [products, setProducts] = useState("")

  // useEffect(() => {
  //   getProducts()
  // }, [products])

  // const getProducts = () => {
  //   fetch('http://localhost:3001/products')
  //   .then((Response) => Response.json())
  //   .then((json) => setProducts(json));
  // }

  return (
    <>
      {/* <div className='container'>
        <div className='row mt-5'>
          {
            products && products.map((p) =>
              <Products title={p.title} />
            )
          }
          <h1>Home</h1>
        </div>
      </div> */}
      <section className={`${custom.home}`}>
        <div className={`${custom.content}`}>
          <h3>Much More <br />Than Perfume</h3>
          <a href='#' className={`${custom.btn}`}>Get Yours Now</a>
        </div>
      </section>
    </>
  )
}
