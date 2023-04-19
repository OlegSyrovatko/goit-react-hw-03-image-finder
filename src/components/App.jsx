import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

export class App extends Component {
  state = {
    pictureQuery: '',
  };

  search = pictureQuery => {
    this.setState({ pictureQuery });
    this.setState({ pictureQuery: pictureQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.search} />
        <ImageGallery pictureQuery={this.state.pictureQuery} />
        {/* <ImageGalleryItem />  */}
        {/* <Loader></Loader>  */}

        {/* <Button></Button> */}
        {/* </ImageGallery>
      <Modal></Modal> */}
      </>
    );
  }
}
