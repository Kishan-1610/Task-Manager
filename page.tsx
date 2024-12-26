import TaskManager from './components/task-manager'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <TaskManager />
    </div>
  )
}
