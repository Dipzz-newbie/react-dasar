import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld.jsx'
import Container from "./Container.jsx"
import TodoList from '../todolist/TodoList.jsx'
import Table from '../table/Table.jsx'
import AlertButton from '../button/AlertButton.jsx'
import MyButton from '../button/MyButton.jsx'
import Toolbar from '../button/ToolBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table/>
      <AlertButton text="Click Me!" massage="Hello World"/>
      {/* // you can also pass the function directly without creating a function first */}
      <MyButton text="Hit me" onSmash={() => {alert("you hit me")}}/>
      <MyButton text="Smash me" onSmash={() => {alert("you smash me")}}/>

      <Toolbar onClick={(e) => {
        e.stopPropagation() // to stop the event bubbling and stop double init to div
        alert("you click me")
      }}/>
    </Container>
  </StrictMode>,
)