import React, { Component } from 'react';

class Heading extends Component {
  componentDidMount() {
    // access to array, containing <div>test</div><div>test</div>
    console.log();
    // would log childtext, because I am grabbing the child of the first <div> in the array
    // console.log(this.props.children[1].props.children);
  }

  render() {
    const { children } = this.props;
    const arr = [1231, 123, 3, 4];
    const buleano = true;
    return (
      <div className="row">
        <div className="col-sm-12">
          <h6 className="uppercase">{children}</h6>
          {buleano && (
            <ul>
              {arr.map((element, index, array) => (
                <li>
                  {index + 1}) {element} / {array.length}
                </li>
              ))}
            </ul>
          )}
          <hr className="mb160 mb-xs-24" />
        </div>
      </div>
    );
  }
}

export default Heading;
