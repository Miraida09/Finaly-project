import { createSlice } from '@reduxjs/toolkit';


const loadWishlistFromStorage = () => {
  try {
    const stored = localStorage.getItem('wishlist_ids');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading wishlist from localStorage:', error);
    return [];
  }
};


const saveWishlistToStorage = (ids) => {
  try {
    localStorage.setItem('wishlist_ids', JSON.stringify(ids));
  } catch (error) {
    console.error('Error saving wishlist to localStorage:', error);
  }
};

const initialState = {
  ids: loadWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const productId = action.payload;
      const index = state.ids.indexOf(productId);
      if (index === -1) {
        state.ids.push(productId);
      } else {
        state.ids.splice(index, 1);
      }
      saveWishlistToStorage(state.ids);
    },
    removeWishlist: (state, action) => {
      const productId = action.payload;
      state.ids = state.ids.filter(id => id !== productId);
      saveWishlistToStorage(state.ids);
    },
    clearWishlist: (state) => {
      state.ids = [];
      saveWishlistToStorage(state.ids);
    },
  },
});

export const { toggleWishlist, removeWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

