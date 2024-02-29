let initialcount = {
    cart: [],
    cartcount: 0
}

const reducer = (state = initialcount, action) => {
    switch (action.type) {
        case "add_to_cart":
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return {
                    ...state, cart: updatedCart,
                    cartcount: state.cartcount + 1,//
                };
            } else {
                return {
                    ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    cartcount: state.cartcount + 1,  //
                };
            }
        case "increase_quantity":
            const increasedCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return {
                ...state,
                cart: increasedCart,
                cartcount: state.cartcount + 1,
            };
        case "decrease_quantity":
            const decreasedCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                    };
                }
                return item;
            });


            return {
                ...state,
                cart: decreasedCart,
                cartcount: state.cartcount - 1,
            };

        case "delete_from_cart":
            const deletedItem = action.payload;
            const updatedCart = state.cart.filter((item) => item !== deletedItem);
            const deletedItemCount = state.cartcount - deletedItem.quantity; // Decrement by the quantity of the item being deleted
            return {
                ...state,
                cart: updatedCart,
                cartcount: deletedItemCount,
            };

        default:
            return state;
    }
};

export default reducer;