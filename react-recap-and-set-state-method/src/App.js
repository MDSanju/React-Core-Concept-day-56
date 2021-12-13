import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // array of object for example
  const products = [
    {name: 'Phone', price: '150000'},
    {name: 'Camera', price: '55000'},
    {name: 'Laptop', price: '168000'},
    {name: 'Smart Watch', price: '48000'},
    {name: 'iPad', price: '89000'},
    {name: 'Drone', price: '189000'}
  ];

  return (
    <div className="App">
      {/* recap previous learning about react.js */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }



      {/* set state here */}
      <Counter></Counter>



      {/* Api call */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// component
function Product(props) {

  // dynamic styles/css
  const productStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '35px'
  };

  return (
    <div style={productStyle}>
      <div className="product">
        <h2>Name: {props.name}</h2>
        <h4>Price: {props.price}</h4>
      </div>
    </div>
  );
}





// set state method/it works like - increase value by every single click, and decrease value by every single click. 
function Counter() {
  // this is how set a state[array destructuring]
  const [count, setCount] = useState(14);

  // this is multi line function about value increase
  const increaseCount = () => {
    const countByClick = count + 1;
    setCount(countByClick);
  }


  // we also can do it in a single line function, like below [this is just for example]
  // const increaseCount = () => setCount(count + 1);


  // decrease value using a single line arrow function
  const decreaseCount = () => setCount(count - 1);

  return (
    // counter UI show from here
    <div className="counter">
      {/* dynamic counter from here */}
      <h1>Count: {count}</h1>
      {/* dynamic buttons, increase and decrease both */}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}



// API call in react
function ExternalUsers() {
  // declare state
  const [users, setUsers] = useState([]);

  // 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div className="container">
      <h1>External Users!</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}


// use another component for sending inside the .map()
function User(props) {
  return (
    <div className="details">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}
export default App;
