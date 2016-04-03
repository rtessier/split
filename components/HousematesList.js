import React, { Component } from 'react';
import Housemate from './Housemate';

class HousematesList extends Component {
  render() {
    let defaultHousemates = [
      { name: 'Ryan', amount: 150.00 },
      { name: 'Link', amount: 0.00 },
      { name: 'Gannon', amount: -50.00 },
    ]
    return (
      <ul>
        {defaultHousemates.map(housemate =>
          <li>
            <Housemate
              key={housemate.name}
              name={housemate.name}
              amount={housemate.amount}
              />
          </li>
        )}
      </ul>
    );
  }
}

export default HousematesList;
