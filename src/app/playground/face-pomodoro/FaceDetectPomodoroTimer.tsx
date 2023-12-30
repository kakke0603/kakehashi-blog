"use client"
import React, { useEffect, useState } from "react"
import Webcam from "react-webcam"
import { CameraOptions, useFaceDetection } from "react-use-face-detection"
import FaceDetection from "@mediapipe/face_detection"
import { Camera } from "@mediapipe/camera_utils"
import { useTimer } from "use-timer"
import { Modal, Input, Progress, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

const width = 500
const height = 500
export const FaceDetectPomodoroTimer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isActive, setIsActive] = useState<boolean>(true)
  const [min, setMin] = useState(25)
  const [restMin, setRestMin] = useState(5)
  const { time, start, pause, reset, status } = useTimer({
    initialTime: isActive ? min * 60 : restMin * 60,
    timerType: "DECREMENTAL",
    endTime: 0,
    interval: 1000,
    onTimeOver: () => {
      setIsActive((v) => !v)
      start()
      reset()
    },
  })
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
        width,
        height,
      }),
  })
  const onClickSetting = () => {
    reset()
    onOpenChange()
    start()
  }
  useEffect(() => {
    if (facesDetected) {
      start()
    } else {
      pause()
    }
  }, [facesDetected])
  return (
    <div>
      <div style={{ width, height, position: "relative" }}>
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
            height,
            width,
          }}
        />
      </div>
      <Progress value={isActive ? (min * 60) / time : (restMin * 60) / time} />
      <div className="text-8xl text-center">
        {Math.floor(time / 60)}:{Math.floor(time % 60)}
      </div>
      {/* <Button onClick={onOpen}>設定</Button> */}
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">顔認証ポモドーロタイマー</ModalHeader>
              <ModalBody>
                <p>顔認証ポモドーロタイマーは、顔が認識されている間だけポモドーロタイマーが動作するタイマーです。</p>
                <Input label="作業時間(分)" type="number" defaultValue="25" value={min.toString()} onChange={(e) => setMin(e.target.valueAsNumber)} />
                <Input
                  label="休憩時間(分)"
                  type="number"
                  defaultValue="5"
                  value={restMin.toString()}
                  onChange={(e) => setRestMin(e.target.valueAsNumber)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClickSetting}>
                  設定
                </Button>
                <Button color="primary" variant="light" onPress={onClose}>
                  閉じる
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  )
}
