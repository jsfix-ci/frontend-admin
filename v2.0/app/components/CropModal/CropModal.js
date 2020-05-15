import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { getAspectRatioFloat, fileToBase64 } from './helpers.js';

class CropModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      crop: {
        aspect: getAspectRatioFloat(this.props.aspectRatio), // eslint-disable-line
        unit: '%',
        width: 90
      }
    };

    this.doCrop = this.doCrop.bind(this);
    this.cancelCrop = this.cancelCrop.bind(this);
  }

  componentDidMount() {
    const { imageFile } = this.props;

    fileToBase64(imageFile, (base64Data) => {
      this.setState({ imageData: base64Data });
    });
  }


  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  getCroppedImg = (image, crop, fileName, fileType) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    console.log(fileName, fileType);

    return new Promise((resolve) => {
      canvas.toBlob(blob => {
        blob.name = fileName;
        resolve(blob);
      }, fileType);
    });
  }

  async doCrop() {
    const { onCropCompleted, imageFile } = this.props;
    const { crop } = this.state;

    console.log(crop);

    if (this.imageRef && crop.width && crop.height) {
      const croppedImageBlob = await this.getCroppedImg(this.imageRef, crop, imageFile.name, imageFile.type);
      const croppedImageFile = new File([croppedImageBlob], croppedImageBlob.name);
      onCropCompleted(croppedImageFile);
      this.setState({ isOpen: false });
    } else {
      this.cancelCrop();
    }
  }

  cancelCrop() {
    const { onCropCancelled } = this.props;
    onCropCancelled();
    this.setState({ isOpen: false });
  }

  render() {
    const { crop, imageData, isOpen } = this.state;

    return (
      <Modal
        open={isOpen}
      >
        <div>
          <ReactCrop
            src={imageData}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onChange={this.onCropChange}
          />
          <Button onClick={this.cancelCrop}>Cancel</Button>
          <Button onClick={this.doCrop}>Done</Button>
        </div>
      </Modal>
    );
  }
}

CropModal.propTypes = {
  imageFile: PropTypes.object.isRequired,
  aspectRatio: PropTypes.string.isRequired,
  onCropCompleted: PropTypes.func.isRequired,
  onCropCancelled: PropTypes.func.isRequired,
};

export default CropModal;
