// import React, {useState} from "react";

// export function GoalCompleteSubtasks ({ todo, index, completeTodo, removeTodo }) {
//     const [completeSubtask, setCompleteSubtask] = useState(false);

//     const completeTodo = index => {
//         const newCompleteSubtask = [...CompleteSubtask];
//         newTodos[index].isCompleted = true;
//         setTodos(newTodos);
//       };

//     return (
//         <div
//         className="todo"
//         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//         >
//         {todo.text}
//         <div>
//             <button onClick={() => completeTodo(index)}>Complete</button>
//             <button onClick={() => removeTodo(index)}>x</button>
//         </div>
//         </div>
//     );
//     }