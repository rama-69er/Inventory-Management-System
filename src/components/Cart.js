import '../css/cart.css';

function Cart({ cartItems = [], removeFromCart, addItem }) {

    function calculateTotal() {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity, 10) || 0;
            return total + price * quantity;
        }, 0);
    }
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - &#8377; {item.price} x {item.quantity}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: &#8377; {calculateTotal()}</h3>
        </div>
    );
};

export default Cart;