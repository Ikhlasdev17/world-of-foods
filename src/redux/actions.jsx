export const addToCart = (meal) => {
    return{
        type: "ADD_TO_CART",
        payload: meal
    }
}


export const removeFromCart = (id) => {
    return{
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const searchingMeals = () => {
    return{
        type: "SEARCHING_MEALS"
    }
}

export const searchMeals = (meals) => {
    return {
        type: "SEARCH_MEALS",
        payload: meals
    }
}

export const searchingError = () => {
    return{
        type: "SEARCHING_ERROR"
    }
}