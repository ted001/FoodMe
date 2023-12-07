import React from "react";
import { useCart } from "../../hooks/useCart";
import classes from './cartPage.module.css';
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import NotFound from "../../components/NotFound/NotFound";

export default function CartPage() {
    const { cart, removeFromCart, changeQuantity } = useCart();

    if (cart.items.length === 0) {
        return <NotFound message="Your Cart is Empty!" />;
    }

    return (
        <>
        <div className={classes.cartPage}>
          {/* <Title title="Cart Page" margin="0 0 0 2.5rem" /> */}

            <div className={classes.container}>
                <ul className={classes.list}>
                    {cart.items.map(item => (
                    
                        <li key={item.food.id}>
                            <div>
                                <img
                                    src={`${item.food.imageUrl}`}
                                    alt={item.food.name}
                                />
                            </div>
                            <div>
                                <Link to={`/food/${item.food.id}`} className={classes.itemName}> {item.food.name} </Link>
                                
                            </div>
                            <div>
                                <select
                                    value={item.quantity} onChange={e => changeQuantity(item, Number(e.target.value))}
                                >
                                {[...Array(10).keys()].map(num => (
                                    <option key={num} value={num + 1}>{num + 1}</option>
                                ))}
                                </select>
                            </div>

                            <div>
                                <Price price={item.price} className={classes.price}/>
                            </div>

                            <div>
                                <button
                                    className={classes.remove_button} onClick={() => removeFromCart(item.food.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={classes.checkout}>
                    <div>
                        <div className={classes.foods_count}>{cart.totalCount}</div>
                        <div className={classes.total_price}>
                        <Price price={cart.totalPrice} />
                    </div>
                </div>

                <Link to="/checkout">Proceed To Checkout</Link>
                </div>
            </div>

            </div>
            </>
            );
        }