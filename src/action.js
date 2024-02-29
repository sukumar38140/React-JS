export const addtocart=(product)=>({
    type:'add_to_cart',
    payload:product
});

export const deleteFromCart=(product)=>({
    type:'delete_from_cart',
    payload:product
});

export const increaseQuantity=(product)=>({
    type:'increase_quantity',
    payload:product
});

export const decreaseQuantity=(product)=>({
    type:'decrease_quantity',
    payload:product
});