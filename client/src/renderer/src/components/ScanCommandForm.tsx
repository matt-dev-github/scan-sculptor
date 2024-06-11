import React, { useState } from 'react';
import { scanTypes } from '@renderer/types';  // Import scan types from the types file
import { ipcRenderer } from 'electron';

/**
 * Validates that an input string is in IPv4 format with Regex.
 * @param {string} ip - user provided IP Address
 * @returns {boolean} If the input string is in IPv4 format.
 */
const isValidIPv4 = (ip: string) => {
  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(ip);
}

const ScanCommandForm: React.FC = () => {
  // State to manage form inputs
  const [scanType, setScanType] = useState<string>(scanTypes[0].value);
  const [options, setOptions] = useState<string>('');
  const [target, setTarget] = useState<string>('');

  // State to manage the validity of the target input
  const [isValidTarget, setIsValidTarget] = useState<boolean>(true);
  
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if the target input is a valid IPv4 address
    if (isValidIPv4(target)) {
      try {
        console.log('Form submitted with:', { scanType, options, target });
        const response = await ipcRenderer.invoke('execute-nmap', { scanType, options, target });
        setResult(response as string);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occured')
        }
        setResult(null);
      }
    } else {
       // Set the target validity state to false if the input is invalid
       setIsValidTarget(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Dropdown for selecting scan type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Scan Type</label>
        <select
          value={scanType}
          onChange={(e) => setScanType(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {scanTypes.map((type) => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>

      {/* Input field for options */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Options</label>
        <input
          type="text"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Input field for target (IPv4) with validation */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Target (IPv4)</label>
        <input
          type="text"
          value={target}
          onChange={(e) => {
            setTarget(e.target.value);
            setIsValidTarget(isValidIPv4(e.target.value));
          }}
          className={`mt-1 block w-full py-2 px-3 border ${isValidTarget ? 'border-gray-300' : 'border-red-500'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {!isValidTarget && (
          <p className="mt-2 text-sm text-red-600">Invalid IPv4 address format.</p>
        )}
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ScanCommandForm;
