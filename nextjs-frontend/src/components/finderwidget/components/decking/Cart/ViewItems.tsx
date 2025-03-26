import React from "react";
import {useCart} from "@/components/finderwidget/hooks/useCart";

export const ViewItems: React.FC = () => {
    const { cart, loading, error } = useCart();

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p>Something went wrong loading the cart.</p>;

    if (!cart?.items?.length) return <p>Your cart is empty.</p>;

    return (
        <div className="cart-summary">
            <h3>Your Cart</h3>
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id}>
                        <img src={item.product.image?.url} alt={item.product.image?.label} width="60" />
                        <div>
                            <strong>{item.product.name}</strong> <br />
                            SKU: {item.product.sku} <br />
                            Qty: {item.quantity} <br />
                            Price: {item.product.price_range.maximum_price.final_price.value}{" "}
                            {item.product.price_range.maximum_price.final_price.currency}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
