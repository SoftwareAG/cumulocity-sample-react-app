import './App.css';
import { BasicAuth, Client } from '@c8y/client';
import { FetchDeviceDetails } from 'sample-react-library1/lib';

function App() {
  const auth = new BasicAuth({
    user: 'shilpy.khanna@softwareag.com',
    password: 'Cumulocity@123#',
    tenant: 'env668860'
    });
     
    const client = new Client(auth, 'https://env668860.us.cumulocity.com');
    client.setAuth(auth);
    const fetchClient = client.core;

  return (
    <div>
    <div>This is a react app. Below is the react library widget</div>
    <div>..................................................................................</div>
    <FetchDeviceDetails fetchClient = {fetchClient} id={'2170'}></FetchDeviceDetails>
    <div>.....................................................................................</div>
    </div>
  );
}

export default App;
