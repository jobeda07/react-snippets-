
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['khushhal khan', 'Siam Ahmad', 'Wahaj Ali', 'Bilal Abbas', 'Kartik Arian', 'Sallu Vai'];
  const singers = [
    { id: 1, name: 'Atif Aslam', age: '43' },
    { id: 2, name: 'Pritom', age: '29' },
    { id: 3, name: 'Tahsam Khan', age: '46' },
    { id: 4, name: 'Minar', age: '41' },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Singer></Singer> */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Person></Person>
      <Actor actor="Mitu meya behen"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="core concept" isDone={false}></Todo>
      <Todo task="try JSX" isDone={true}></Todo>
      <Device name="Father"></Device>
      <Student className="class 2" point="3.87"></Student> */}

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