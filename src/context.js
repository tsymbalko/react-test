import { createContext } from 'react'
import { mockTasks } from './utils'

export const TaskContext = createContext()

export const initialState = {
  tasks: mockTasks
}
