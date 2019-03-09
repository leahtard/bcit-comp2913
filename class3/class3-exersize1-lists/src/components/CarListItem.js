import React, { Component } from 'react';
import CurrencyFormat from '../../node_modules/react-currency-format';

class CarListItem extends Component {
  render() {
    return (
      <div className="CarListItem">
        <tr key={this.props.price + this.props.brand + this.props.make}>
          <td>
            <img src={this.props.imageUrl} alt={this.props.year + " " + this.props.brand + " " + this.props.make}
                  style={{ "width": "100px" }}/>
          </td>
          <td>
            {this.props.new === true &&
              <span style={{ "background-color": "red", "color": "white", "padding": "5px" }}>NEW</span>
            }
            {this.props.year} {this.props.brand} {this.props.make} <br />
            <CurrencyFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </td>
        </tr>
      </div>
    );
  }
}

export default CarListItem;
