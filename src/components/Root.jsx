import React from 'react';
import { Link } from 'react-router-dom';

export default function Root(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-faded">
        <h1 className="navbar-brand mb-0">
          <Link to="/">Home</Link>
        </h1>
      </nav>
      <br/>
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}
