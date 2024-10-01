import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

 export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        loadCartItems()
    }, [])

    const loadCartItems = async () => {
        let carts = await AsyncStorage.getItem("carts");
        carts = carts ? JSON.parse(carts) : [];
        console.log('carts: ', carts)
        setCarts(carts);
        totalSum(carts);
    }

    const addCart = async(item) => {
        const itemExist = carts.findIndex((cart) => cart.id === item.id);
        if(itemExist === -1){
            const newCartItems = [...carts,item];
            await AsyncStorage.setItem("carts", JSON.stringify(newCartItems))
            setCarts(newCartItems);
            totalSum(newCartItems);
        }
    }

    const deleteItemFromCart = async (item) => {
        const newItems = carts.filter((cart) => cart.id !== item.id)
        await AsyncStorage.setItem("carts", JSON.stringify(newItems))
        setCarts(newItems)
        totalSum(newItems)
    }

    const totalSum = (carts) => {
        console.log('carts in totalSum: ', carts); 
        const totalSum = carts.reduce((amount, item) => {
           const itemPrice = parseFloat(item.price.amount) || 0;
            console.log('item: ', item, 'itemPrice:', itemPrice); 
            return amount + itemPrice; 
        }, 0);
        console.log('totalsum: ', totalSum);
        setTotalPrice(totalSum);
    }

    const value = {
        carts,
        addCart,
        totalPrice,
        deleteItemFromCart
    }
    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}