"use client"

import { useState } from "react"
import "./App.css"

interface Task {
  id: number
  title: string
  completed: boolean
  priority: "low" | "medium" | "high"
  createdAt: Date
}

type FilterType = "all" | "active" | "completed"

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Go to Library", completed: false, priority: "low", createdAt: new Date() },
    { id: 2, title: "Read book", completed: true, priority: "low", createdAt: new Date(Date.now() - 86400000) },
    { id: 3, title: "Complete React project", completed: false, priority: "high", createdAt: new Date() },
    {
      id: 4,
      title: "Take an internship application test",
      completed: true,
      priority: "high",
      createdAt: new Date(Date.now() - 172800000),
    },
    { id: 5, title: "Prepare for interview", completed: false, priority: "high", createdAt: new Date() },
  ])

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [newTaskPriority, setNewTaskPriority] = useState<"low" | "medium" | "high">("medium")
  const [filter, setFilter] = useState<FilterType>("all")
  const [error, setError] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [animation, setAnimation] = useState("")

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      setError("Task title cannot be empty")
      setAnimation("shake")
      setTimeout(() => setAnimation(""), 500)
      return
    }

    if (newTaskTitle.length < 3) {
      setError("Task title must be at least 3 characters")
      setAnimation("shake")
      setTimeout(() => setAnimation(""), 500)
      return
    }

    setError("")
    const newTask: Task = {
      id: Math.max(...tasks.map((t) => t.id), 0) + 1,
      title: newTaskTitle.trim(),
      completed: false,
      priority: newTaskPriority,
      createdAt: new Date(),
    }

    setIsAdding(true)
    setTimeout(() => {
      setTasks([...tasks, newTask])
      setNewTaskTitle("")
      setIsAdding(false)
    }, 300)
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    const taskElement = document.getElementById(`task-${id}`)
    if (taskElement) {
      taskElement.classList.add("fade-out")
      setTimeout(() => {
        setTasks(tasks.filter((task) => task.id !== id))
      }, 300)
    }
  }

  const changePriority = (id: number, priority: "low" | "medium" | "high") => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, priority } : task)))
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "#ff5555"
      case "medium":
        return "#ffb86c"
      case "low":
        return "#50fa7b"
      default:
        return "#bd93f9"
    }
  }

  // Format date
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Task Manager</h1>
        </header>

        <div className={`add-task-container ${animation}`}>
          <h2>Add New Task</h2>
          <p className="task-count">
            <span className="badge">
              {completedCount}/{totalCount} completed
            </span>
          </p>
          <div className="add-task-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter task title..."
                value={newTaskTitle}
                onChange={(e) => {
                  setNewTaskTitle(e.target.value)
                  if (e.target.value.trim() !== "") {
                    setError("")
                  }
                }}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                className={error ? "error" : ""}
              />
              {error && <p className="error-message">{error}</p>}
            </div>

            <div className="priority-selector">
              <label>Priority:</label>
              <div className="priority-options">
                <button
                  className={`priority-btn low ${newTaskPriority === "low" ? "selected" : ""}`}
                  onClick={() => setNewTaskPriority("low")}
                >
                  Low
                </button>
                <button
                  className={`priority-btn medium ${newTaskPriority === "medium" ? "selected" : ""}`}
                  onClick={() => setNewTaskPriority("medium")}
                >
                  Medium
                </button>
                <button
                  className={`priority-btn high ${newTaskPriority === "high" ? "selected" : ""}`}
                  onClick={() => setNewTaskPriority("high")}
                >
                  High
                </button>
              </div>
            </div>

            <button onClick={addTask} className={`add-button ${isAdding ? "adding" : ""}`} disabled={isAdding}>
              <span className="button-text">{isAdding ? "Adding..." : "Add Task"}</span>
            </button>
          </div>
        </div>

        <div className="tasks-container">
          <div className="tasks-header">
            <h2>Your Tasks</h2>
            <div className="filter-buttons">
              <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
                All
              </button>
              <button
                className={`filter-btn ${filter === "active" ? "active" : ""}`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>

          <p className="task-description">
            {tasks.length === 0
              ? "No tasks yet. Add one above to get started!"
              : filter === "all"
                ? `Manage your ${tasks.length} task${tasks.length !== 1 ? "s" : ""}`
                : filter === "active"
                  ? `${filteredTasks.length} active task${filteredTasks.length !== 1 ? "s" : ""} remaining`
                  : `${filteredTasks.length} completed task${filteredTasks.length !== 1 ? "s" : ""}`}
          </p>

          {filteredTasks.length === 0 ? (
            <div className="no-tasks">
              <div className="empty-state-icon">📋</div>
              <p>No {filter !== "all" ? filter : ""} tasks to display</p>
              {filter !== "all" && (
                <button className="reset-filter" onClick={() => setFilter("all")}>
                  Show all tasks
                </button>
              )}
            </div>
          ) : (
            <ul className="task-list">
              {filteredTasks.map((task) => (
                <li key={task.id} id={`task-${task.id}`} className={`task-item ${task.completed ? "completed" : ""}`}>
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`status-button ${task.completed ? "completed" : ""}`}
                    aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {task.completed ? "✓" : ""}
                  </button>

                  <div className="task-content">
                    <span className="task-title">{task.title}</span>
                    <div className="task-meta">
                      <span className="task-date">{formatDate(task.createdAt)}</span>
                      <div className="priority-dropdown">
                        <div className="current-priority" style={{ backgroundColor: getPriorityColor(task.priority) }}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </div>
                        <div className="priority-menu">
                          <button className="priority-option low" onClick={() => changePriority(task.id, "low")}>
                            Low
                          </button>
                          <button className="priority-option medium" onClick={() => changePriority(task.id, "medium")}>
                            Medium
                          </button>
                          <button className="priority-option high" onClick={() => changePriority(task.id, "high")}>
                            High
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="task-actions">
                    {task.completed && <span className="completed-badge">Completed</span>}
                    <button onClick={() => deleteTask(task.id)} className="delete-button" aria-label="Delete task">
                      <span className="delete-icon">×</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {tasks.length > 0 && (
          <div className="task-summary">
            <div className="summary-item">
              <div className="status-dot completed"></div>
              <span>{completedCount} completed</span>
            </div>
            <div className="summary-item">
              <div className="status-dot pending"></div>
              <span>{totalCount - completedCount} pending</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

