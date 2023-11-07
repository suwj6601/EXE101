import {
  setResultImagePath,
  setUserImagePath,
  setUserTryOnImagePath,
} from "@/redux/virtualTryon";
import { Button, message, Progress } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../UploadImage";
import { DemoPageWrapper } from "./style";

const DemoPage = () => {
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const [listUserImage, setListUserImage] = useState([]);
  const [listTryOnImage, setListTryOnImage] = useState([]);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const virtualTryon = useSelector((state: any) => state?.virtualTryon);

  const [listFileUser, setListFileUser] = useState([]);
  const [listFileTryon, setListFileTryon] = useState([]);

  const userUploadImageChange = (userImagePath: any) => {
    dispatch(setUserImagePath(userImagePath));
  };

  const userTryonImageChange = (userTryonImagePath: any) => {
    dispatch(setUserTryOnImagePath(userTryonImagePath));
  };

  const getImagePath = (imgPath: string) => {
    return imgPath.split("/").pop();
  };

  const fakeTimer = randomNumber(7, 10);

  //note::
  const processImageResult = () => {
    if (virtualTryon?.userImagePath && virtualTryon?.userTryonImagePath) {
      setLoading(true);
      setIsAnimating(true);

      setTimeout(() => {
        setLoading(false);
        messageApi.open({
          type: "success",
          content: "Try on successfully!",
        });

        const imageNamePath = virtualTryon?.userImagePath?.split("/").pop();
        const imageName = imageNamePath.split(".")[0];

        return dispatch(setResultImagePath(imageName + ".png"));
      }, fakeTimer * 1000);

      setPercent(0);
    } else {
      messageApi.open({
        type: "error",
        content: "Upload image to try",
      });
    }
  };

  const finalPercent = randomNumber(98, 99);
  useEffect(() => {
    const maxIncrement = 7; // Maximum increment
    const minIncrement = 1; // Minimum increment
    const totalTime = fakeTimer * 1000 + 5000; // Total time in milliseconds
    const interval = 150; // Update interval in milliseconds

    const increments = Math.floor(totalTime / interval);
    const incrementRange = maxIncrement - minIncrement + 1;
    let currentIncrement = 0;
    let timer: any;

    if (isAnimating) {
      const updateProgress = () => {
        if (currentIncrement < increments) {
          const randomIncrement =
            minIncrement + Math.floor(Math.random() * incrementRange);
          setPercent((prevPercent) => {
            const newPercent = prevPercent + 100 / increments + randomIncrement;
            currentIncrement++;
            return newPercent <= 100 ? Math.round(newPercent) : finalPercent; // Ensure it doesn't exceed 100%
          });
        } else {
          setIsAnimating(false);
          clearInterval(timer);
        }
      };

      timer = setInterval(updateProgress, interval);
    }

    return () => {
      clearInterval(timer); // Clean up the interval when the component unmounts
    };
  }, [isAnimating, fakeTimer]);

  const resetData = () => {
    dispatch(setUserImagePath(null));
    dispatch(setUserTryOnImagePath(null));
    dispatch(setResultImagePath(null));

    setListFileUser([]);
    setListFileTryon([]);
  };

  const onImageUserRemove = () => {
    dispatch(setUserImagePath(null));
    setListFileUser([]);
  };

  const onImageTryOnRemove = (newFileList: any) => {
    dispatch(setUserTryOnImagePath(null));
    setListFileTryon([]);
  };

  return (
    <DemoPageWrapper>
      {contextHolder}

      <div className="header">
        <img src="/logo.png" alt="" />
        <h1 className="title">VirtualFit</h1>
      </div>

      <div className="wrapper">
        <div className="user-image wrapper-item">
          {virtualTryon?.userImagePath && (
            <img
              src={getImagePath(virtualTryon?.userImagePath)}
              alt="user imgage"
              className="preview-image"
            />
          )}

          <div className="upload-text">Upload your image</div>
          <UploadImage
            onChangeImage={userUploadImageChange}
            fileList={listFileUser}
            onChangeFunction={setListFileUser}
            onRemoveImage={onImageUserRemove}
          />
        </div>

        <div className="result-image wrapper-item">
          {virtualTryon?.resultImagePath ? (
            <>
              <div className="upload-text">Result!</div>

              <img
                src={virtualTryon?.resultImagePath}
                alt="image result"
                className="preview-image"
              />
            </>
          ) : (
            <div className="note">Upload an image to try</div>
          )}
          {loading && (
            <Progress
              percent={percent}
              strokeColor="var(--color-success)"
              trailColor="var(--background-success)"
              strokeLinecap="butt"
              status="active"
            />
          )}
        </div>

        <div className="tryon-image wrapper-item">
          {virtualTryon?.userTryonImagePath && (
            <img
              src={getImagePath(virtualTryon?.userTryonImagePath)}
              alt="user imgage"
              className="preview-image"
            />
          )}

          <div className="upload-text">Upload the image you want to try</div>
          <UploadImage
            onChangeImage={userTryonImageChange}
            fileList={listFileTryon}
            onChangeFunction={setListFileTryon}
            onRemoveImage={onImageTryOnRemove}
          />
        </div>
      </div>

      <div className="progress"></div>

      <div className="button-wrapper">
        <Button
          className="process"
          onClick={processImageResult}
          loading={loading}
          type="primary"
        >
          Process
        </Button>

        <Button type="primary" danger className="reset" onClick={resetData}>
          Reset
        </Button>
      </div>
    </DemoPageWrapper>
  );
};

export default DemoPage;
