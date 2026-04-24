import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cart/cart-slice";

export function useCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);

  return {
    items,
    add: (product: any) => dispatch(addToCart(product)),
  };
}