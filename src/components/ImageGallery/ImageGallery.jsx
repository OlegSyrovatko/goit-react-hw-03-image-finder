import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiContent from '../../services/content-api';
import PicturesDataView from '../PicturesDataView';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Button } from './ImageGallery.styled';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureQuery;
    const nextName = this.props.pictureQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      apiContent
        .fetchPicture(nextName, prevName + 1)
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

    if (status === 'rejected') {
      Report.info('The request was not processed');
    }

    if (status === 'resolved') {
      return (
        <>
          <PicturesDataView pictures={pictures} onImageClick={onImageClick} />
          <Button onClick={this.state.page + 1}>Load more</Button>
        </>
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
