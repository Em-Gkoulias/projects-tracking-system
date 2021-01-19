import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

// import './index.css';
import './style.scss';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}