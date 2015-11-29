import React  from 'react';
import Button from '../atoms/button';

export default class DemoApp extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            A React, PostCSS, Webpack Seed Project
          </h1>
        </header>

        <Button />
      </div>
    );
  }
}
