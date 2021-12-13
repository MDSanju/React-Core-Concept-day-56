import logo from './logo.svg';
import './App.css';

function App() {

  // use dynamically in html
  // const number = 4517;
  // const country = 'Canada';
  // const about = {
  //   name: 'MD Sanju',
  //   profession: 'Web Developer'
  // };

  // styles css apply on here
  // const developerStyles = {
  //   backgroundColor: '#333',
  //   color: 'white',
  //   padding: '10px',
  //   borderRadius: '10px'
  // }




  // digital devices
  const products = [
    {device: 'Laptop', brand: 'HP EliteBook'},
    {device: 'Phone', brand: 'Apple iPhone'},
    {device: 'Camera', brand: 'Canon 5Ds'},
    {device: 'Laptop', brand: 'MacBook Pro'},
    {device: 'Phone', brand: 'Galaxy A32 5G'}
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h2>Hello World, Getting Started React!</h2>
          <h3 style={developerStyles}>Name: {about.name + ' ' + about.profession}</h3>
          <h2>My Number: {number}</h2>
          <h1 style={{ backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '10px' }}>Country: {country}</h1>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}







      {/* my custom creation */}
      <First hello="Hello World!" getting="Getting Started React JS!"></First>
      <First hello="I had compelted React JS." getting="And now I started Node.js already!"></First>
      <First hello="Hi, I did't learn JavaScript." getting="I learned PHP, so that's why I started Laravel!"></First>

      {/* friends details */}
      <Friend number="01786649178" division="Khulna"></Friend>
      <Friend number="01851454555" division="Sylhet"></Friend>



      {/* digital devices */}
      {
        products.map(product => <Digital kits={product.device} company={product.brand}></Digital>)
      }
    </div>
  );
}



// custom function create/this is called ('react component')
function First(props) {
  // we can write styles css on here as well
  const hello = {
    backgroundColor: 'aqua',
    color: '#222',
    padding: '5px'
  }
  return (
    <div className="container">
      <div className='person'>
        <h1 style={hello}>{props.hello}</h1>
        <h2 style={{backgroundColor: '#f2f2f2', color: '#222', padding: '10px'}}>{props.getting}</h2>
      </div>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <div className="friend-details">
        <h1>Phone no: {props.number}</h1>
        <h2>Address: {props.division}</h2>
      </div>
    </div>
  );
}


// full strong dynamic this component's data
function Digital(props) {
  return (
    <div className="container">
      <div className="digital-devices">
        <h1>Device Name: {props.kits}</h1>
        <h2>Brand: {props.company}</h2>
      </div>
    </div>
  );
}

export default App;
