import React, { Component } from 'react';
import Housemate from './Housemate';

class HousematesList extends Component {
  render() {
    let defaultHousemates = [
      { name: 'Link', amount: 0.00 },
      { name: 'Ganon', amount: -50.00 },
    ]
    return (
      <div>
        <h2>Balances</h2>
        <ul>
          {defaultHousemates.map(housemate =>
            <li key={housemate.name}>
              <Housemate
                name={housemate.name}
                amount={housemate.amount}
                />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default HousematesList;
