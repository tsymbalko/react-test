import { DefaultTemplate } from 'components/templates'
import { Logo } from 'components/elements'
import { TaskManager } from './modules/TaskManager/TaskManager'

const App = () => {
  return (
    <DefaultTemplate>
      <Logo />
      <TaskManager />
    </DefaultTemplate>
  )
}

export default App
