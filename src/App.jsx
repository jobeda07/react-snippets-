
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Device name="Father"></Device>
      <Student className="class 2" point="3.87"></Student>

    </>
  )
}

export default App

function Person() {
  return (
    < div >
      <h2>hi liza...whats up</h2>
    </div >
  )
}
function Device(props) {
  return (
    <div>
      This device gifted by {props.name}
    </div>
  )
}
function Student({ className, point }) {
  return (
    <div>
      classadd:{className}
      point:{point}
    </div>
  )
}