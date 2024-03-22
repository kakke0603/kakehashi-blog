"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useZxing } from "react-zxing";

const QRReader = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>result:</span>
        <Link href={result}>{result}</Link>
      </p>
    </>
  );
};

export default QRReader;
