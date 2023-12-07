import React, { useEffect, useState } from "react";
import classes from './foodPage.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/foodService";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import { useCart } from "../../hooks/useCart";
import NotFound from "../../components/NotFound/NotFound";

export default function FoodPage() {

    const [currentFood, setCurrentFood] = useState({});
    const {id} = useParams();
    const {addToCart} = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        getById(id).then(foodData => setCurrentFood(foodData));
    }, [id]);

    const onAddToCart = () => {
        addToCart(currentFood);
        navigate('/cart');
    }

    if (!currentFood) {
        return <NotFound message="Food Not Found" linkText="Back To HomePage" />;
    }
    
    return (
        <>
        <div className={classes.foodPage}>
            
            <div className={classes.container}>
                
                <img 
                    className={classes.image}
                    src={`${currentFood.imageUrl}`}
                    alt={currentFood.name}
                />
                <div className={classes.details}>
                    <div className={classes.header}>
                        <span className={classes.name}> {currentFood.name} </span>
                        <span className={`${classes.favorite} ${currentFood.favorite? '': classes.not}`}>
                            ♥
                        </span>
                    </div>
                        <div className={classes.rating}>
                            <StarRating stars={currentFood.stars} size={25}/>
                        </div>

                        <div className={classes.origins}>
                            {
                                currentFood.origins?.map(origin => (
                                <span key={origin}>{origin}</span>
                            ))}
                            </div>

                            {currentFood.tags && (
                                <Tags tags={currentFood.tags.map(tag => ({ name: tag }))} forFoodPage />
                            )}

                            <div className={classes.cook_time}>
                                <span>
                                    Time to cook about <strong>{currentFood.cookTime}</strong> minutes
                                </span>
                            </div>

                            <div className={classes.price}>
                                <Price price={currentFood.price} />
                            </div>

                            <button onClick={onAddToCart}>Add To Cart</button>
                </div>
            </div>
            
            </div>
        </>
    );
}