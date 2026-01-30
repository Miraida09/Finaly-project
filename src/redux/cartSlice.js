import { createSlice } from '@reduxjs/toolkit';


const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem('cart_items');
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};


const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('cart_items', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState = {
  items: loadCartFromStorage(),
};


if (!Array.isArray(initialState.items)) {
  initialState.items = [];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          discount: product.discount,
          qty: 1,
        });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      saveCartToStorage(state.items);
    },
    incQty: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.qty += 1;
        saveCartToStorage(state.items);
      }
    },
    decQty: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== productId);
        }
        saveCartToStorage(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, incQty, decQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

