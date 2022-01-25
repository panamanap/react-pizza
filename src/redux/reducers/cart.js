const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizza = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].pizzas, action.payload];

            const newItem = {
                ...state.items,
                [action.payload.id]: {
                    pizzas: currentPizza,
                    currentPizzaCount: 1,
                },
            };

            const totalCount = state.totalCount + 1;
            const totalPrice = currentPizza.reduce(
                (sum, obj) => sum + obj.price,
                state.totalPrice
            );
            return {
                ...state,
                items: newItem,
                totalCount,
                totalPrice,
            };
        }
        case 'INCREASE_PIZZA_COUNTER': {
            const newPizzaItems = [
                ...state.items[action.payload].pizzas,
                state.items[action.payload].pizzas[0],
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    pizzas: newPizzaItems,
                    currentPizzaCount: newPizzaItems.length,
                },
            };

            const totalCount = state.totalCount + 1;
            const totalPrice =
                state.totalPrice + state.items[action.payload].pizzas[0].price;

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'REDUCE_PIZZA_COUNTER': {
            if (state.items[action.payload].pizzas.length === 1) {
                return state;
            }
            const newPizzaItems =
                state.items[action.payload].pizzas.length > 1
                    ? state.items[action.payload].pizzas.slice(1)
                    : state.items[action.payload].pizzas;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    pizzas: newPizzaItems,
                    currentPizzaCount: newPizzaItems.length,
                },
            };

            const totalCount =
                state.items[action.payload].pizzas.length > 1
                    ? state.totalCount - 1
                    : state.totalCount;
            const totalPrice =
                state.totalPrice - state.items[action.payload].pizzas[0].price;

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'REMOVE_ITEM': {
            const newItem = { ...state.items };
            const totalCount =
                state.totalCount - newItem[action.payload].pizzas.length;
            const totalPrice =
                state.totalPrice -
                newItem[action.payload].pizzas[0].price *
                    newItem[action.payload].pizzas.length;
            delete newItem[action.payload];
            return {
                ...state,
                items: newItem,
                totalCount,
                totalPrice,
            };
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0,
            };
        default:
            return state;
    }
};
