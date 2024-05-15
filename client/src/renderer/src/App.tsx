import DeviceTable from './components/DeviceTable'
import './main.css'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <DeviceTable />
  )
}

export default App
