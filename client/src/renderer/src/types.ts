export interface Device {
    hostname: string;
    ip_address: string;
    mac_address: string;
    operating_system: string;
    device_type: string;
    network_segment: string;
    response_time: string;
}

export interface Port {
    port_number: number;
    protocol: string;
    status: string;
    service: string;
    timestamp: string;
  }
  

// Define the available scan types
export const scanTypes = [
    { label: 'SYN Scan', value: '-sS' },
    { label: 'UDP Scan', value: '-sU' },
    { label: 'TCP Connect Scan', value: '-sT' },
    // Add more scan types as needed
];