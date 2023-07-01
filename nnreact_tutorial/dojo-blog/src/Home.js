import { useState } from 'react';

const Home = () => {
    // e is a default parameter describing the event object
    // array destructuring to get two values, name of var and func to change it
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = (e) => {
        setName('luigi');
        setAge('30');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* write func that needs to pass in a parameter */}
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
    );
}

export default Home;