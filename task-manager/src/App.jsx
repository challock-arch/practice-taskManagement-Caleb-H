import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import TaskList, { dummyTasks } from './components/TaskList'
import TaskDetail from './components/TaskDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="*" element={<h1>Task Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
