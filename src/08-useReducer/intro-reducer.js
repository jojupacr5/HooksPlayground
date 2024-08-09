const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    // state.push(action.payload) Esto no se debe hacer para evitar modificar el state original
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del Poder",
  done: false,
};

// todos.push({ Esto no se debe hacer
//   id: 2,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
