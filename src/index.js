import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// 

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//       return <h1> Hello, {formatName(user)}! </h1>;  
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// const user = {firstName: 'Thendo', lastName: 'Ramashia'};
// const element = (<h1> Hello, {getGreeting(user)}! </h1>);

ReactDOM.render(<App />, document.getElementById('root'));
