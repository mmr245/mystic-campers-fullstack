import React, { createContext, useReducer, useContext, useEffect } from 'react'

// 1. Define actions
const ADD_ITEM    = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_QTY  = 'UPDATE_QTY'

// 2. Initial state
const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || []
}

// 3. Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      // if item exists, bump qty; otherwise add new
      const exists = state.items.find(i => i.id === action.payload.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + 1 }
              : i
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }]
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload.id)
      }

    case UPDATE_QTY:
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, qty: action.payload.qty }
            : i
        )
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// 4. Create context and provider
const CartStateContext    = createContext()
const CartDispatchContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

// 5. Custom hooks for convenience
export function useCart() {
  return useContext(CartStateContext)
}

export function useDispatchCart() {
  return useContext(CartDispatchContext)
}