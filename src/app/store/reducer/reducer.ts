import Homedata from './../../../assets/prod.json'
import * as actions from '../actions/actions' 


const intialState= {
    Products : Homedata.products,
    Cart:{
        cartProducts:[],
        totalPrice:0
    },
    Categories:Homedata.categories,
    pageSize:6,
    currentPage:1
}
 


export const ProducListReducer = (state = intialState, action) => {
    switch (action.type){
        case actions.LOAD_PRODUCTS:{
           return {...state}
        }
        case actions.ADD_TO_CART:{
            debugger;
                const Products = [...state.Products];
                const item ={...Products.find(p=>p._id===action.id)};
                const index = state.Products.findIndex(p=>p._id ===action.id);
                item.purchased = true;
                Products[index] = item;
                const Cart = {...state.Cart};
                Cart.cartProducts.push({...item,quantity:1});
                Cart.totalPrice += item.price;
            return {...state,Products, Cart}
         }
         case actions.INC_QUANTITY:{
            
            const Cart = {...state.Cart};
            const item = {...state.Cart.cartProducts[action.index]};
            item.quantity +=1;
            Cart.cartProducts[action.index] = item;
            Cart.totalPrice += item.price;

        return {...state, Cart}
        
     }
     case actions.DEC_QUANTITY:{
            
        const Cart = {...state.Cart};
        const item = {...state.Cart.cartProducts[action.index]};
        item.quantity -=1;
        Cart.cartProducts[action.index] = item;
        Cart.totalPrice -= item.price;
    return {...state, Cart}
    }
    case actions.CHANGE_CURRENT_PAGE:{
        const currentPage = action.currentPage;
    return {...state,currentPage }
}
case actions.REMOVE_ITEM:{
    const Cart= {...state.Cart};
    Cart.cartProducts=[...state.Cart.cartProducts];
    Cart.totalPrice -= Cart.cartProducts[action.index].price*Cart.cartProducts[action.index].quantity;
    Cart.cartProducts.splice(action.index,1);
return {...state,Cart }
}
        default:
         return {...state};
    }
    


}