export const productView=(product)=>{
    return {
        type :"PRODUCTVIEW",
        payload:product
    }
}
export const addCart=(product)=>{
    return {
        type :"ADDITEM",
        payload:product
    }
}
export const delCart=(product)=>{
    return {
        type :"DELETE_CART",
        payload:product
    }
}

export const handleAdd=(product)=>{
    return {
        type :"HANDLEADD",
        payload:product
    }
}


export const addQuantity=(product)=>{
    return{
        type :"INCREASE_QUANTITY",
        payload : product
    }
}
export const delQuantity=(product)=>{
    return {
        type : "DECREASE_QUANTITY",
        payload : product
    }
}


export const addWish=(product)=>{
    return {
        type :"ADDWISH",
        payload:product
    }
}
export const delWish=(product)=>{
    return {
        type :"DELWISH",
        payload:product
    }
}