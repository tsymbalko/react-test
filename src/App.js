import { useReducer } from 'react'

import { DefaultTemplate } from 'components/templates'
import { Logo } from 'components/elements'
import { TaskManager } from 'modules/TaskManager/TaskManager'

import { TaskContext, initialState } from './context.js'
import { taskReducer } from './reducer.js'

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{ dispatch, state }}>
      <DefaultTemplate>
        <Logo />
        <TaskManager />
      </DefaultTemplate>
    </TaskContext.Provider>
  )
}

export default App
