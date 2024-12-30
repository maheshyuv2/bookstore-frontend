import React from 'react';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  return (
      <div className="App">
        <Header />
        <BookList />
      </div>
  );
}

export default App;