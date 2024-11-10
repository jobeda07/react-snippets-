// export default function Todo({ task }) {
//     return (
//         // <h6>i come form todo</h6>
//         <li>task : {task}</li>
//     )
// }
//conditional rendering 1
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished task : {task}</li>
//     } else {
//         return <li>Do task : {task}</li>
//     }
// }

//conditional rendering 2
// export default function Todo({ task, isDone }) {

//     return (
//         <li>{isDone ? 'finished' : 'work on '} {task}</li>
//     )

// }
//conditional rendering 3

export default function Todo({ task, isDone }) {

    return (
        // <li>{task} {isDone && 'done'} </li>
        <li>{task} {isDone || 'work on'} </li>
    )

}
