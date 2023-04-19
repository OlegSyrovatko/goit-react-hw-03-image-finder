import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  import { SearchHeader, Form, Button, Input } from './Searchbar.styled';
// import ApiContent from '../services/content-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
    status: Status.IDLE,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.pokemonName;
  //   const nextName = this.props.pokemonName;

  //   if (prevName !== nextName) {
  //     this.setState({ status: Status.PENDING });

  //     setTimeout(() => {
  //       pokemonAPI
  //         .fetchPokemon(nextName)
  //         .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
  //         .catch(error => this.setState({ error, status: Status.REJECTED }));
  //     }, 3000);
  //   }
  // }
  componentDidUpdate() {
    console.log(this.props.pictureQuery);
  }

  render() {
    return <>1111</>;
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  pictureQuery: PropTypes.string.isRequired,
};
