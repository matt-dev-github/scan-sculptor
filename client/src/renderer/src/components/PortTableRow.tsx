import React from 'react';
import { Port } from '../types';  // Adjust the import path as necessary

// Defines the properties that TableRow expects, which is a single device object of type Device.
interface TableRowProps {
  port: Port;
}


const PortTableRow: React.FC<TableRowProps> = ({ port }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-centeoperating_systemr">
          <div className="font-medium text-gray-800">{port.port_number}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{port.protocol}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{port.status}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{port.service}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{port.timestamp}</div>
      </td>
    </tr>
  );
}


export default PortTableRow;PortTableRow