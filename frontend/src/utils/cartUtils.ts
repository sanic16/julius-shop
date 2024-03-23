export const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state: CartState) => {
    state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    state.shippingPrice = state.itemsPrice > 100 ? 0 : 100
    state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2))
    state.totalPrice = Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
    localStorage.setItem('cart', JSON.stringify(state))
}