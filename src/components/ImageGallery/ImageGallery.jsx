import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiContent from '../../services/content-api';
import PicturesDataView from '../PicturesDataView';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pictureQuery;
    const nextName = this.props.pictureQuery;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      apiContent
        .fetchPicture(nextName, 1)
        .then(pictures => this.setState({ pictures, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { pictures, status } = this.state;
    const { onImageClick } = this.props;

    if (status === Status.PENDING) {
      Loading.circle('Loading...');
      return null;
    } else {
      Loading.remove();
    }

    if (status === 'resolved') {
      return (
        <PicturesDataView pictures={pictures} onImageClick={onImageClick} />
      );
    }
    return null;
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  pictureQuery: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

// const { pictures, error, status } = this.state;
// const { pictureQuery } = this.props;

// if (status === 'idle') {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ margin: '20px auto' }}>Enter your query.</div>
//     </div>
//   );
// }

// if (status === 'rejected') {
//   return <PokemonErrorView message={error.message} />;
// }
