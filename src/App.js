import DefaultTemplate from './components/templates/Default'
import TaskManager from './modules/TaskManager'
import { ReactComponent as Logo } from './assets/logo.svg'

const App = () => {
  return (
    <DefaultTemplate>
      <Logo width={'9.5rem'} height={'4rem'} />
      <TaskManager />
    </DefaultTemplate>
  )
}

export default App
