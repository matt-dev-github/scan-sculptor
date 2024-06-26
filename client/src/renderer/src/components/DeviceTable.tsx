import React from 'react';
import { Device } from '@renderer/types';
import DeviceTableRow from './DeviceTableRow';
import devices from '../../../../resources/dummy-data/devices'
import '../main.css'

const DeviceTable = () => {
    return (
        <>
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Devices</h2>
            </header>
            <div className="p-3">
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Hostname</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">IP Address</div>
                                </th>
                                {/* <th className="px-4 py-2">MAC Address</th> */}
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Operating System</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Device Type</div>
                                </th>
                                {/* <th className="px-4 py-2">Network Segment</th> */}
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-centerS">Response Time</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-sm divide-y divide-gray-100'>
                            {devices.map(device => (
                                <DeviceTableRow key={device.ip_address} device={device} />
                            ))}
                        </tbody>
                    </table></div>
            </div>
        </>
    );
}

export default DeviceTable;
