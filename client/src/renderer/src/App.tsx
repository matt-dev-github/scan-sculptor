import DeviceTable from './components/DeviceTable'
import PortTable from './components/PortTable'
import './main.css'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <DeviceTable />
      <PortTable />
    </>
  )
}

export default App
