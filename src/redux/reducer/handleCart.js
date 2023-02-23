const initProduct = {
    numberCart:0,
    numberWish :0,
    Wishs:[],
    Carts:[],
    _products:[]
}
const handleCart = (state = initProduct, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDWISH":
            if(state.numberWish==0){
                let wish = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    category:action.payload.category,
                    image:action.payload.image,
                    price:action.payload.price
                } 
                state.Wishs.push(wish); 
            }
            else{
                let check1 = false;
                state.Wishs.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Wishs[key].quantity++;
                        check1=true;
                    }
                });
                if(!check1){
                    let _wish1 = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        category:action.payload.category,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Wishs.push(_wish1);
                }
            }
           
            return{
                ...state,
                numberWish:state.numberWish +1
            }

            case "DELWISH":
                    let quantity1_ = state.Wishs[action.payload].quantity;
                    return{
                        ...state,
                        numberWish:state.numberWish - quantity1_,
                        Wishs:state.Wishs.filter(item=>{
                            return item.id!=state.Wishs[action.payload].id
                        })
                       
                    }
        case "ADDITEM":
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    category:action.payload.category,
                    image:action.payload.image,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        category:action.payload.category,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }

            case "INCREASE_QUANTITY":
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case "DECREASE_QUANTITY":
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
                case "DELETE_CART":
                    let quantity_ = state.Carts[action.payload].quantity;
                    return{
                        ...state,
                        numberCart:state.numberCart - quantity_,
                        Carts:state.Carts.filter(item=>{
                            return item.id!=state.Carts[action.payload].id
                        })
                       
                    }
            default:
                return state;
    }
}
export default handleCart;