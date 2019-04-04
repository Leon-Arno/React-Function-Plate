import React from 'react';
import Header from './Header';

function NotFound() {
    document.title = 'Error 404';

    return (
      <div className="container">
        <Header />
        <div className="alert alert-warning">
          <h2>Page not found</h2>
          <strong>The requested page does not exist.</strong>
        </div>
      </div>
    );
}

export default NotFound;
