import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => {
      return reject(error);
    };
  });

interface UploadImageInterface {
  onChangeImage: any;
}

const UploadImage = (props: UploadImageInterface) => {
  const { onChangeImage } = props;

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    const newlyUploadedFile = newFileList[newFileList.length - 1];

    if (newlyUploadedFile && newlyUploadedFile.url) {
      const newlyUploadedImageUrl = newlyUploadedFile.url;
    }

    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const customRequest = async ({ file, onSuccess, onError }: any) => {
    console.log("file", file);
    try {
      setTimeout(() => {
        onChangeImage(file.path);
        onSuccess();
      }, 1000); // Simulate a delay (1 second) as if it's uploading
    } catch (error) {
      onError();
      message.error("File upload failed.");
    }
  };

  const customUploadStyle = {
    width: "500px", // Set the width as desired
    height: "500px", // Set the height as desired
  };

  return (
    <div>
      <Upload
        customRequest={customRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        className="custom-upload"
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default UploadImage;
