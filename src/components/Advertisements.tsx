"use client";
import React, { use, useEffect, useState } from "react";

const ads = {
  1: (
    <div>
      {/* wordpress */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006017000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" alt="" />
    </div>
  ),
  2: (
    <div>
      {/* hobby shop metalbox */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240202480899&wid=001&eno=01&mid=s00000019249001007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" alt=""></img>
    </div>
  ),
  3: (
    <div>
      {/*  EC site */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=240203490877&wid=001&eno=01&mid=s00000010885026006000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" alt=""></img>
    </div>
  ),
  4: (
    <div>
      {/*  動画スタジオ*/}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=240203490876&wid=001&eno=01&mid=s00000022683006006000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" alt=""></img>
    </div>
  ),
  5: (
    <div>
      {/* コインランドリー */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E39C6Q+4RZ4+NTZCH" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=240203490852&wid=001&eno=01&mid=s00000022288004003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www18.a8.net/0.gif?a8mat=3Z0E76+E39C6Q+4RZ4+NTZCH" alt=""></img>
    </div>
  ),
  6: (
    <div>
      {/* 女性のためのプロテイン【私の完全美容食】(24-0202) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E2NWKY+4ZUQ+HVV0H" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=240203490851&wid=001&eno=01&mid=s00000023309003004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0E76+E2NWKY+4ZUQ+HVV0H" alt=""></img>
    </div>
  ),
  7: (
    <div>
      {/* 他社VPSを凌駕する圧倒的性能！「シン」世代VPS【シン・VPS】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1VVFQQ+5GDG+NVP2P" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240201463114&wid=001&eno=01&mid=s00000025450004011000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0CMV+1VVFQQ+5GDG+NVP2P" alt=""></img>
    </div>
  ),
  8: (
    <div>
      {/* 国内最速！進化の極限を目指したエックスサーバーの新たなカタチ【シン・レンタルサーバー】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1U34XE+5GDG+609HT" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=240201463111&wid=001&eno=01&mid=s00000025450001009000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0CMV+1U34XE+5GDG+609HT" alt=""></img>
    </div>
  ),
  9: (
    <div>
      {/* 性能コスパNo.1のXserverVPSがベース！FX自動売買専用VPS『シン・クラウドデスクトップ for FX』(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1SBLE+5GDG+HWPVL" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=240201463003&wid=001&eno=01&mid=s00000025450003008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+1SBLE+5GDG+HWPVL" alt=""></img>
    </div>
  ),
};
export const Advertisements = () => {
  const [ad, setAd] = useState(null);
  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    setAd(ads[random]);
  }, []);
  return <>{ad}</>;
};
