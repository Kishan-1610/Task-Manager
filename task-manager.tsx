'use client'

import { useState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { addTask, getRandomTask, getTasks } from '../actions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Adding...' : 'Add Task'}
    </Button>
  )
}

export default function TaskManager() {
  const [message, setMessage] = useState('')
  const [randomTask, setRandomTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const result = await getTasks()
    setTasks(result.tasks)
  }

  async function handleAddTask(formData: FormData) {
    const result = await addTask(formData)
    setMessage(result.message)
    fetchTasks()
  }

  async function handleGetRandomTask() {
    const result = await getRandomTask()
    setRandomTask(result.task)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Manage Your Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleAddTask} className="space-y-4">
          <Input type="text" name="task" placeholder="Enter a new task" />
          <SubmitButton />
        </form>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
        <div className="mt-4">
          <Button onClick={handleGetRandomTask} variant="outline" className="w-full">
            Get Random Task
          </Button>
        </div>
        {randomTask && (
          <p className="mt-2 text-sm">
            Random Task: <span className="font-medium">{randomTask}</span>
          </p>
        )}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Tasks:</h3>
          {tasks.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          ) : (
            <p>No tasks added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

