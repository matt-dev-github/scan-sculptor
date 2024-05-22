import React from 'react'
import ports from '../../../../resources/dummy-data/ports'
import PortTableRow from './PortTableRow';

const PortTable = () => {
    return (
        <>
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Ports</h2>
            </header>
            <div className="p-3">
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Port Number</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Protocol</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Service</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-centerS">Timestamp</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-sm divide-y divide-gray-100'>
                            {ports.map(port => (
                                <PortTableRow key={port.port_number} port={port} />
                            ))}
                        </tbody>
                    </table></div>
            </div>
        </>
    );
}

export default PortTable