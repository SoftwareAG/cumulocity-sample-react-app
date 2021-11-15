import './App.css';
import { BasicAuth, Client } from '@c8y/client';
import { FetchDeviceDetails } from 'sample-react-library1/lib';

function App() {
  const  auth = new  BasicAuth({
    user:  'username',
    password:  'password',
    tenant:  'tenantId'
    });
    
    const  client = new  Client(auth, 'tenantUrl');
    client.setAuth(auth);
    const  fetchClient = client.core;

  return (
    <div>
    <FetchDeviceDetails fetchClient = {fetchClient} id={'2170'}></FetchDeviceDetails>
    </div>
  );
}

export default App;
