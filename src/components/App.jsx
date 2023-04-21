import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    pictureQuery: '',
    showModal: false,
    selectedImage: null,
  };

  search = pictureQuery => {
    this.setState({ pictureQuery });
  };

  handleImageClick = (id, largeImageURL, tags) => {
    this.setState({
      showModal: true,
      selectedImage: { id, largeImageURL, tags },
    });
  };

  handleClose = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { showModal, selectedImage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.search} />
        <ImageGallery
          pictureQuery={this.state.pictureQuery}
          onImageClick={this.handleImageClick}
        />
        {showModal && selectedImage && (
          <Modal image={selectedImage} onClose={this.handleClose} />
        )}
      </Container>
    );
  }
}
