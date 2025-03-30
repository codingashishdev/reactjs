import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completedToggle: () => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}