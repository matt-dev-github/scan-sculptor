import React from 'react';
import { Device } from '../types';  // Adjust the import path as necessary

// Defines the properties that TableRow expects, which is a single device object of type Device.
interface TableRowProps {
  device: Device;
}


const DeviceTableRow: React.FC<TableRowProps> = ({ device }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">{device.hostname}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{device.ip_address}</div>
      </td>
      {/* <td className="px-4 py-2">{device.mac_address}</td> */}
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{device.operating_system}</div></td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{device.device_type}</div></td>
      {/* <td className="px-4 py-2">{device.network_segment}</td> */}
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{device.response_time}</div></td>
    </tr>
  );
}


export default DeviceTableRow;