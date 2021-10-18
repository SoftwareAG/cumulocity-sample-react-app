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
npm i c8y/client
```
3. Install your react library package into your react app project.
```
npm i react-library
``` 
4. Add the below code in App.tsx file.
```
function  App() {
const  auth = new  BasicAuth({
user:  'username',
password:  'password',
tenant:  'tenantId'
});
const  client = new  Client(auth, 'tenanturl');
client.setAuth(auth);
const  fetchClient = client.core;
return (
<div>
<div>This is a react app. Below is the react library widget</div>
<div>..................................................................................</div>
<React-Library-Name  fetchClient = {fetchClient}  id={'deviceId'}></React-Library-Name>
<div>.....................................................................................</div>
</div>
);
}
```
 **NOTE:** The fetchClient and device id will be passed as an input from react app into the react library as below:
  *<React-Library-Name  fetchClient = {fetchClient}  id={'deviceId'}></React-Library-Name>*
