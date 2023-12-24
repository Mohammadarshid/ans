import React from 'react';
import  Components  from './Components';

function App(props) {
  const { name, sname } = props

  const users = [{
    name: "ankush",
    sname: "saxena"
  }, {
    name: "kamlesh",
    sname: "patidar"
  }]
  return (
    <div className='App'>
      <Components sname={name} name={sname} student={users} isverified ={true}/>

    </div>





  );
} export default App;
