import React from 'react';
import PropTypes from 'prop-types';

export default class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: '',
    };
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContents = (e) => {
    this.setState({ contents: e.target.value });
  };


  render() {
    const {
      props: {
        to,
      },
      state: {
        title,
        contents
      },
    } = this;

    return (
      <div className="contacts__mailForm">
        <h1 className="contacts__mailForm__title">
          Per prendere un appuntamento o farmi domande non esitare a scrivermi:
        </h1>
        <input
          type="email"
          value={title}
          onChange={this.handleTitle}
          maxLength={50}
          placeholder={'Nome e Cognome'}
        />
        <textarea
          value={contents}
          onChange={this.handleContents}
          rows={8}
          maxLength={500}
          placeholder={'Scrivimi'}
          style={{
            display: 'inline-block',
            maxWidth: '100%'
          }}
        />
        <a href={`mailto:${to}?subject=${title}&body=${contents.replace(/\n/g, '%0D%0A')}`}>
          Invia
        </a>
      </div>
    );
  }
}

MailForm.propTypes = {
  to: PropTypes.string.isRequired,
};

MailForm.defaultProps = {};
