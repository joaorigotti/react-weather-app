import React, { Component } from 'react';

/**
 * @class
 * @classdesc LoadingComponent é responsável por exibir uma mensagem enquanto os dados são carregados.
 */
class LoadingComponent extends Component {
  constructor(props) {
    super(props);

    this.getClassName = this.getClassName.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  getClassName() {
    return this.props.hasData.length ? 'loading-component -disabled' : 'loading-component';
  }

  getMessage() {
    return this.props.hasError ? this.props.hasError : 'Aguarde, carregando dados...';
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <div className="notification">
          <p>{this.getMessage()}</p>
        </div>
      </div>
    );
  }
};

LoadingComponent.propTypes = {
  hasData: React.PropTypes.array.isRequired,
  hasError: React.PropTypes.string
}

export default LoadingComponent;
