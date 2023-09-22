import React , {createContext, useReducer} from 'react';

const initialState = {
    selectedItems : [] ,
}

const reducer = (state,action) => {
    console.log(state.selectedItems)
    switch(action.type){
        case "Add_Item":
           if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload ,
                    quantity:1
                })
           }
           return{
            ...state,
            selectedItems:[...state.selectedItems]
           }
        case"Increase":
           const indexI = state.selectedItems.findIndex(
            item => item.id === action.payload.id
           )
           state.selectedItems[indexI].quantity++
           return{
            ...state,
           }
    }
}

export const CartContextPro = createContext();

const Cartcontext = (props) => {

    const [state , dispatch] = useReducer(reducer,initialState);
    return (
        <CartContextPro.Provider value={{state,dispatch}}>
            {props.children}
        </CartContextPro.Provider>
    );
};

export default Cartcontext;