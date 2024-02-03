import React from "react";

export const Advertisements = () => {
  const random = Math.floor(Math.random() * 10);
  if (random < 3) {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" rel="nofollow">
          <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006017000&mc=1" />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" alt="" />
      </>
    );
  } else if (random < 6) {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" rel="nofollow">
          <img width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240202480899&wid=001&eno=01&mid=s00000019249001007000&mc=1" />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" alt=""></img>
      </>
    );
  } else {
    return (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" rel="nofollow">
          <img width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=240203490877&wid=001&eno=01&mid=s00000010885026006000&mc=1" />
        </a>
        <img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" alt=""></img>
      </>
    );
  }
};
