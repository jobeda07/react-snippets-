// export default function Todo({ task }) {
//     return (
//         // <h6>i come form todo</h6>
//         <li>task : {task}</li>
//     )
// }
export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished task : {task}</li>
    } else {
        return <li>Do task : {task}</li>
    }

}
