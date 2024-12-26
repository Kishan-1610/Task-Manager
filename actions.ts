'use server'

import { revalidatePath } from 'next/cache'

let tasks: string[] = []

export async function addTask(formData: FormData) {
  const task = formData.get('task') as string
  if (task && task.trim()) {
    tasks.push(task.trim())
    revalidatePath('/')
    return { message: 'Task added successfully!' }
  }
  return { message: 'Please enter a valid task.' }
}

export async function getRandomTask() {
  if (tasks.length === 0) {
    return { task: 'No tasks available.' }
  }
  const randomIndex = Math.floor(Math.random() * tasks.length)
  return { task: tasks[randomIndex] }
}

export async function getTasks() {
  return { tasks }
}

