import React from "react";

import "./ImageUpload.css";

class ImageUpload extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (!nextProps.file) {
      return;
    }
    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file, id } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return <img src={thumb} key={id} alt={file.name} />;
  }
}

export default ImageUpload;
