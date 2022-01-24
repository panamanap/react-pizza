export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const increasePizzaCounter = (id) => ({
    type: 'INCREASE_PIZZA_COUNTER',
    payload: id,
});

export const reducePizzaCounter = (id) => ({
    type: 'REDUCE_PIZZA_COUNTER',
    payload: id,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
});
