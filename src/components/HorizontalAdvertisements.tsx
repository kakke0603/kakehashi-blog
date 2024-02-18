"use client";
import React from "react";
import { useWindowSize } from "usehooks-ts";

export const HorizontalAdvertisements = () => {
  const random = Math.floor(Math.random() * 10);
  const size = useWindowSize();
  const width = size.width ?? 0;
  if (random === 0) {
    return (
      <div>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www21.a8.net/svt/bgt?aid=240218787995&wid=001&eno=01&mid=s00000025604001009000&mc=1"
          />
        </a>
        <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" alt=""></img>
      </div>
    );
  } else {
    return (
      <div>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q04+D3K36+52NU+BZO4H" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www26.a8.net/svt/bgt?aid=240218788022&wid=001&eno=01&mid=s00000023673002014000&mc=1"
          />
        </a>
        <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0Q04+D3K36+52NU+BZO4H" alt=""></img>
      </div>
    );
  }
};
