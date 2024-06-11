import DeviceTable from './components/DeviceTable'
import PortTable from './components/PortTable'
import ScanCommandForm from './components/ScanCommandForm' 
import './main.css'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <ScanCommandForm />
      <DeviceTable />
      <PortTable />
    </>
  )
}

export default App
