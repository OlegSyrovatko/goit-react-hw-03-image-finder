import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//  import { SearchHeader, Form, Button, Input } from './Searchbar.styled';
import Api from '../../services/content-api';
const apiContent = new Api();

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

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureQuery;
    const nextName = this.props.pictureQuery;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      console.log(nextName);

      apiContent.query = nextName;
      const items = apiContent.fetchItems();
      items.then(data => {
        // console.log(data);
        // if (data.totalHits === 0) {
        //   return Notify.failure(
        //     'There are no images matching your search query. Please try again'
        //   );
        // }
        // Notify.success(`Hooray! We found ${data.totalHits} images.`);
        // markupPhotos(data);
        // showLoadBtn();
      });

      // setTimeout(() => {
      //   Api.fetchItems(nextName)
      //     .then(pictures =>
      //       this.setState({ pictures, status: Status.RESOLVED })
      //     )
      //     .catch(error => this.setState({ error, status: Status.REJECTED }));
      //   console.log(this.state.pictures);
      // }, 1000);
    }
  }

  render() {
    return <>1111</>;
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  pictureQuery: PropTypes.string.isRequired,
};
