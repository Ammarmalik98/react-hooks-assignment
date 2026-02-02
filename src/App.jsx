import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserData from './components/UserData'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Profile />
      <h1 className="app-title">React Hooks App</h1>
      <div className="app-container">
        <Counter />
        <TodoList />
        <UserData />
      </div>
    </>
  )
}

export default App
