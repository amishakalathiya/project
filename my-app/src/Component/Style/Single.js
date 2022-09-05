import React, { useEffect, useState } from 'react'
import { Card, Navbar, Container } from "react-bootstrap";
import { useParams } from 'react-router';

export default function Single() {
    let { id } = useParams();
    const [product, setProducts] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3003/product/${id}`)
        .then((Response) => Response.json())
        .then((json) => setProducts(json));
      }, [product])

  return (
    <div className='container'>
      <div className='row'>
      <div className="col-md-12 mt-4 mb-4" >
                <Card>
                    <Card.Body>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
      </div>
    </div>
  )
}
