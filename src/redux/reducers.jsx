const initialState = {
    basket: [],
    filters: [],
    filterLoadingStatus: 'ikhlas'
}



export const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                basket: [...state.basket, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                basket: state.basket.filter(item => item.idMeal !== action.payload
                )
            }
        case "SEARCHING_MEALS":
            return {
                ...state,
                filterLoadingStatus: 'loading'
            }
        case "SEARCH_MEALS":
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'ikhlas'
            }
        case "SEARCHING_ERROR":
            return {
                ...state,
                filterLoadingStatus: 'error'
            }
        default:
            return state
    }
}