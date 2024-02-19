"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraOptions, useFaceDetection } from "react-use-face-detection";
import FaceDetection from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
import { Button, Spinner } from "@nextui-org/react";
import { useTimer } from "use-timer";

export const FaceDetect = () => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const { time, start, pause, reset, status } = useTimer({
    initialTime: sec + min * 60,
    timerType: "DECREMENTAL",
    endTime: 0,
    interval: 1000,
    onTimeOver: () => {},
  });
  const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: "short",
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
    camera: ({ mediaSrc, onFrame }: CameraOptions) =>
      new Camera(mediaSrc, {
        onFrame,
        width: 640, // Provide a value for the width property
        height: 480, // Provide a value for the height property
      }),
  });

  return (
    <div>
      {isLoading && <Spinner />}
      <div style={{ width: "100%", height: 500, position: "relative" }}>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: "4px solid white",
              position: "absolute",
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
            }}
          />
        ))}
        <Webcam
          ref={webcamRef}
          forceScreenshotSourceSize
          style={{
            height: 500,
            width: "100%",
            position: "absolute",
          }}
        />
      </div>
      {/* <Button color="primary" onClick={start}>
        start
      </Button>
      {Math.floor(time / 60)} : {time} */}

      {detected ? <div className="text-4xl text-center">Face detected</div> : <div className="text-4xl text-center">Face not detected</div>}
    </div>
  );
};
