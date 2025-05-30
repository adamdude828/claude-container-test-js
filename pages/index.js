import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Container is running...');

  useEffect(() => {
    console.log('Hello from simple test container!');
    
    const interval = setInterval(() => {
      console.log('Container is running...');
      setMessage(`Container is running... ${new Date().toLocaleTimeString()}`);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Test Container</h1>
      <p>{message}</p>
      <p>Check the browser console for logs.</p>
    </div>
  );
}