import { useCart }  from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";


export const Cart = () => {
  const { total , cartList} = useCart();
  useTitle("Cart");
  console.log(cartList);
  
 
  const style={
    color:"white"
  }

  return (
    <main>
      <section className="cart">
        <h1 style={style}>Cart Items : { cartList.length } / ${total}</h1>
        {cartList.map((product) =>
          <CartCard key={product.id} product={product} />
        )}
      </section>
    </main>
  )
};


