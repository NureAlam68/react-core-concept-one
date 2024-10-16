// export default function Todo({task}) {
//     return(
//         <li>Todo list: {task}</li>
//     )
// }

// // conditional rendering option -1
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// conditional rendering option -2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work on: {task}</li>;
// }

// conditional rendering option -3 : ternary operator
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone? 'Finished' : 'Work on'}: {task}</li>
//     )
// }

// conditional rendering option -4 : && left side condition true hole execute right side

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// conditional rendering option -5 : || left side condition false hole execute right side

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// conditional rendering option -6  variable 
export default function Todo({ task, isDone }) {
  let listItems;
  if (isDone) {
    listItems = <li>Finished: {task}</li>;
  } else {
    listItems = <li>Work on: {task}</li>;
  }
  return listItems;
}
