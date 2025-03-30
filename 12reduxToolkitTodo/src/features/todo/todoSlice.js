import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

//automatically generates actions creators and action types
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)          
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id == action.payload.id ? todo.text = action.payload.text : todo.text)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id == action.payload.id ? state.todos.pop(todo) : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer