const { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_CREATOR, FILTER_PRODUCTS_BY_PRICE } = require("../const/const");

export const productsReducer = (state= {}, action)=>{

    switch(action.type){
        case FILTER_PRODUCTS_BY_CREATOR:
            return{
                ...state,
                creator: action.payload.creator,
                filteredItems: action.payload.items,
            };
        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
            };
        case FETCH_PRODUCTS:
            return { items:action.payload, 
                filteredItems: action.payload };
        default:
            return state;
    }
};
