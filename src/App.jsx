import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from "react-router-dom";
import Travel from './Components/Travel'; // make sure you have this file

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => setShowFinished(!showFinished)

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => setTodo(e.target.value)

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="mx-3 container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2 shadow-lg">
            <h1 className='font-bold text-center text-2xl mb-6 text-gray-800'>iTask - Manage your todos at one place</h1>

            <div className="addTodo my-6 flex flex-col gap-4">
              <h2 className='text-xl font-bold text-gray-700'>Add a Todo</h2>
              <div className="flex gap-2">
                <input onChange={handleChange} value={todo} type="text" className='flex-1 rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500' placeholder="Enter your todo..." />
                <button onClick={handleAdd} disabled={todo.length < 1} className='bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-bold text-white transition-colors'>Add</button>
              </div>
            </div>

            <div className="my-6 flex items-center gap-2">
              <input className='w-4 h-4' onChange={toggleFinished} type="checkbox" checked={showFinished} id="showFinished" />
              <label htmlFor="showFinished" className="text-gray-700 font-medium">Show Finished Tasks</label>
            </div>

            <h2 className='text-xl font-bold text-gray-700 mb-4'>Your Todos</h2>
            <div className="todos">
              {todos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-lg">No todos yet! Add one above to get started.</p>
                </div>
              ) : (
                todos.map(item => (
                  (showFinished || !item.isCompleted) &&
                  <div key={item.id} className="todo flex items-center my-3 justify-between bg-white rounded-lg p-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className='flex items-center gap-3 flex-1'>
                      <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className="w-4 h-4 text-green-600 focus:ring-green-500" />
                      <div className={item.isCompleted ? "line-through break-words text-gray-500" : "break-words text-gray-800"}>{item.todo}</div>
                    </div>
                    <div className="button flex gap-1">
                      <button onClick={(e) => handleEdit(e, item.id)} className='bg-blue-600 hover:bg-blue-700 p-2 text-sm font-bold text-white rounded-md transition-colors' title="Edit"><FaEdit /></button>
                      <button onClick={(e) => handleDelete(e, item.id)} className='bg-red-600 hover:bg-red-700 p-2 text-sm font-bold text-white rounded-md transition-colors' title="Delete"><MdDelete /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        } />

        <Route path="/travel" element={<Travel />} />
      </Routes>
    </>
  )
}

export default App
