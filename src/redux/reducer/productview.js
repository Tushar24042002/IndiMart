const productview = [];
const productViewpage = (state = productview, action) => {
  if(action.type ==="PRODUCTVIEW"){
    return action.payload;
  }
  else{
    return state;
  }
 
}
export default productViewpage