 ## Sample React App which uses react library to fetch and display device details. It also updates the device details by taking an input from the user.

### Create a react app
Follow the below steps to create a react app.

1.  Create a folder with the name of your choice. eg. react-app
2. Navigate inside the folder and run the below command.
```
 npx create-react-app sample-app --template typescript
 ```
 
 3.  In order to use Cumulocity Inventory Service, we need to install c8y/client in our react project.
  ```
npm i @c8y/client@1009.0.19
```
4. Install your react library package into your react app project.
```
npm i sample-react-library1
``` 
5. Replace the code in App.tsx file with the below block of code.
```
import { BasicAuth, Client } from  "@c8y/client";
import { FetchDeviceDetails } from  "sample-react-library1/lib";

 
function  App() {
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
<div>This is a react app. Below is the react library widget</div>
<div>..................................................................................</div>
<FetchDeviceDetails  fetchClient = {fetchClient}  id={'deviceId'}></FetchDeviceDetails>
<div>.....................................................................................</div>
</div>
);
}
 
export  default  App;
```
 
  
6. Run the command
```
 npm run start 
 ```

```
 **NOTE:** The fetchClient and device id will be passed as an input from react app into the react library as below:
  *<React-Library-Name  fetchClient = {fetchClient}  id={'deviceId'}></React-Library-Name>*
