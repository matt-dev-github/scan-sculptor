import React from 'react';
import { Device } from '../types';  // Adjust the import path as necessary

// Defines the properties that TableRow expects, which is a single device object of type Device.
interface TableRowProps {
    device: Device;
  }
  

  const DeviceTableRow: React.FC<TableRowProps> = ({ device }) => {
    return (
      <tr className="bg-white border">
        <td className="px-4 py-2">{device.hostname}</td>
        <td className="px-4 py-2">{device.ip_address}</td>
        <td className="px-4 py-2">{device.mac_address}</td>
        <td className="px-4 py-2">{device.operating_system}</td>
        <td className="px-4 py-2">{device.device_type}</td>
        <td className="px-4 py-2">{device.network_segment}</td>
        <td className="px-4 py-2">{device.response_time}</td>
      </tr>
    );
  }
  

export default DeviceTableRow;