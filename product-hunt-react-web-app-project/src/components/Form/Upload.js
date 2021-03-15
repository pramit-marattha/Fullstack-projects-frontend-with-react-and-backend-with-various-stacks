import React from "react";
import PropTypes from "prop-types";
import { IonButton, isPlatform } from "@ionic/react";
import { Plugins, CameraResultType } from "@capacitor/core";
import { dataURItoBlob } from "../../utils/file";
import "./Upload.css";

const { Camera } = Plugins;

function Upload({ onChange, placeholder, files, multiple, ...rest }) {
  const handleSelectFile = async (evt) => {
    if (isPlatform("mobile")) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      const blob = dataURItoBlob(image.dataUrl);

      onChange([blob]);
    } else {
      onChange([...evt.target.files]);
    }
  };

  return (
    <div className="file-input-container">
      {!isPlatform("mobile") && (
        <input
          id="file"
          type="file"
          className="file-input"
          accept="image/*"
          multiple={multiple}
          onChange={handleSelectFile}
        />
      )}
      <IonButton onClick={handleSelectFile} {...rest}>
        {files.length ? `${files.length} file selected` : placeholder}
      </IonButton>
    </div>
  );
}

Upload.propTypes = {
  multiple: PropTypes.bool,
  files: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Upload;
