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

  const min = 7;
  const max = 11;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const virtualTryon = useSelector((state: any) => state?.virtualTryon);

  const userUploadImageChange = (userImagePath: any) => {
    dispatch(setUserImagePath(userImagePath));
  };

  const userTryonImageChange = (userTryonImagePath: any) => {
    dispatch(setUserTryOnImagePath(userTryonImagePath));
  };

  const getImagePath = (imgPath: string) => {
    return imgPath.split("/").pop();
  };

  //note::
  const processImageResult = () => {
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
    }, randomNumber * 1000);
  };

  useEffect(() => {
    let currentPercent = 0;
    const targetPercent = 100;
    const interval = randomNumber * 1000; // 5 seconds

    const increment = 5;

    let timer: any;

    if (isAnimating) {
      timer = setInterval(() => {
        if (currentPercent < targetPercent) {
          currentPercent += increment;
          setPercent(currentPercent);
        } else {
          setIsAnimating(false);
          clearInterval(timer);
        }
      }, interval / (targetPercent / increment));
    }

    return () => {
      clearInterval(timer);
    };
  }, [isAnimating]);

  const resetData = () => {
    dispatch(setUserImagePath(null));
    dispatch(setUserTryOnImagePath(null));
    dispatch(setResultImagePath(null));
  };

  return (
    <DemoPageWrapper>
      {contextHolder}
      <h1 className="title">Vitural Fit Tryon</h1>

      <div className="wrapper">
        <div className="user-image wrapper-item">
          {virtualTryon?.userImagePath && (
            <img
              src={getImagePath(virtualTryon?.userImagePath)}
              alt="user imgage"
              className="preview-image"
            />
          )}

          <div className="upload-text">Upload your image here!</div>
          <UploadImage onChangeImage={userUploadImageChange} />
        </div>

        <div className="result-image wrapper-item">
          {virtualTryon?.resultImagePath ? (
            <>
              <div className="upload-text">Result!</div>

              <img
                src={virtualTryon?.resultImagePath}
                alt="hehe"
                className="preview-image"
              />
            </>
          ) : (
            <div className="note">Upload image to try</div>
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

          <div className="upload-text">
            Upload your image you want try here!
          </div>
          <UploadImage onChangeImage={userTryonImageChange} />
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
