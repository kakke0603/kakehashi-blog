"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";

export const SideAdvertisements = () => {
  const size = useWindowSize();
  const width = size.width ?? 0;
  const random = Math.floor(Math.random() * 10);
  if (random < 2) {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www23.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006017000&mc=1"
          />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" alt="" />
      </>
    );
  } else if (random < 4) {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www22.a8.net/svt/bgt?aid=240202480899&wid=001&eno=01&mid=s00000019249001007000&mc=1"
          />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" alt=""></img>
      </>
    );
  } else if (random < 6) {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www27.a8.net/svt/bgt?aid=240203490877&wid=001&eno=01&mid=s00000010885026006000&mc=1"
          />
        </a>
        <img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" alt=""></img>
      </>
    );
  } else {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2 }}
            alt=""
            src="https://www29.a8.net/svt/bgt?aid=240203490876&wid=001&eno=01&mid=s00000022683006006000&mc=1"
          />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" alt=""></img>
      </>
    );
  }
};
