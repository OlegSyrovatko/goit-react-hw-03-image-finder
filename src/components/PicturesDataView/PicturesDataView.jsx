import PropTypes from 'prop-types';

const PicturesDataView = ({ pictures }) => (
  <li>
    {pictures.map(({ id, webformatURL, largeImageURL }) => (
      <img key={String(id)} src={webformatURL} alt="" />
    ))}
  </li>
);

export default PicturesDataView;

PicturesDataView.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
