import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './orderItemsList.module.css';

export default function OrderItemsList({ order }) {
  return (
    <div className={classes.cardContainer}>
      <h3 className={classes.header}>Order Items:</h3>
      {order.items.map(item => (
        <div className={classes.card} key={item.food.id}>
          <Link to={`/food/${item.food.id}`}>
            <img className={classes.image} src={item.food.imageUrl} alt={item.food.name} />
          </Link>
          <div className={classes.details}>
            <p className={classes.foodName}>{item.food.name}</p>
            <div className={classes.priceAndQuantity}>
              <Price price={item.food.price} className={classes.price} />
              <span className={classes.quantity}>Quantity: {item.quantity}</span>
              <strong className={classes.totalPrice}>
                <Price price={item.price} />
              </strong>
            </div>
          </div>
        </div>
      ))}
      <div className={classes.totalContainer}>
        <strong>Total :</strong>
        <Price price={order.totalPrice} />
      </div>
    </div>
  );
}
