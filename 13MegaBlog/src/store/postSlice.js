import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload.post)
        },

        updatePost: (state, action) => {
            const { $id } = action.payload.post
            const existingPost = state.posts.find((post) => post.$id === $id)
            existingPost.post = action.payload.post
        },

        removePost: (state, action) => {
            return state.posts.filter((post) => post !== action.payload.post)
        },
    },
});

export const { addPost, updatePost, removePost } = postSlice.reducer;
export default postSlice.actions;
