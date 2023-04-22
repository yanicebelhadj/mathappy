const { createSlice, configureStore } = require("@reduxjs/toolkit");

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        open: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.open = !state.open
        }
    }
});

export const { toggleMenu } = menuSlice.actions

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer
    }
})