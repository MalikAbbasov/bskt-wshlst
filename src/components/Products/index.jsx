import React, { useEffect, useState } from 'react'
import "./product.scss"
function Products() {

    const [product, setProduct] = useState([])
    const [basket, setBasket] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })

    }, [])

    const addBasket = (x) => {
        setBasket([...basket, x])
    }

    const removeBasket = (id) => {
        setBasket(basket.filter((x) => x.id !== id))
    }


    const removeAsideBasket=()=> {
        document.querySelector(".basket").classList.toggle("active")  
    }

    const removeAsideWish=()=> {
        document.querySelector(".wishlist").classList.toggle("active")  
    }

    return (
        <div>
            <div id="product_page">
                <div className="container">
                    <div className="text">
                        <h1>FEATURED PRODUCT</h1>
                        <p>Bring called seed first of third give itself now ment</p>
                    </div>
                    <div className="basket">
                    <i onClick={removeAsideBasket} class="fa-solid fa-xmark"></i>

                    </div>

                    <div className="wishlist">
                    <i onClick={removeAsideWish} class="fa-solid fa-xmark"></i>

                    </div>

                    <div className="basket_card">
                        {
                            basket.map(x => (
                                <ul key={x.id}>
                                    <img src={x.image} alt="" />
                                    <li className='category'>{x.category}</li>
                                    <li>{x.price}$</li>
                                    <button onClick={() => removeBasket(x.id)}>remove basket</button>
                                </ul>
                            ))
                        }
                    </div>



                    <div className="products">
                        {
                            product.map(x =>
                                <ul key={x.id}>
                                    <img src={x.image} alt="" />
                                    <li className='category'>{x.category}</li>
                                    <li>{x.price}$</li>
                                    <div className="buttons">
                                        <i class="fa-solid fa-user"></i>
                                        <i onClick={() => addBasket(x)} class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                </ul>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products