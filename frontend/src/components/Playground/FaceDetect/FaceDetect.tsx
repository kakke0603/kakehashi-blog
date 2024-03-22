"use client";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { CameraOptions, useFaceDetection } from "react-use-face-detection";
import FaceDetection from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
import { Spinner } from "@nextui-org/react";

export const FaceDetect = () => {
  const { webcamRef, boundingBox, isLoading, detected, facesDetected, imgRef } = useFaceDetection({
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
          onUserMedia={(media) => media.removeTrack(media.getVideoTracks()[0])}
        />
      </div>
      {detected ? <div className="text-4xl text-center">Face detected</div> : <div className="text-4xl text-center">Face not detected</div>}
    </div>
  );
};
