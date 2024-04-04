import React, { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import './index.css'; 

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center">
      <h1 className="text-4xl text-gray-500 font-bold my-8">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
