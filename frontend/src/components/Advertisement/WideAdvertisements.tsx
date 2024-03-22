"use client";
import React, { useEffect, useState } from "react";

const ads = {
  0: (
    <div>
      {/* wordpress */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTFR5" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006016000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTFR5" alt="" />
    </div>
  ),
  1: (
    <div>
      {/* hobby shop metalbox */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0DF4+EV8PMA+44IY+5ZEMP" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www20.a8.net/svt/bgt?aid=240202480899&wid=001&eno=01&mid=s00000019249001005000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z0DF4+EV8PMA+44IY+5ZEMP" alt="" />
    </div>
  ),
  2: (
    <div>
      {/*  EC site */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EI56B6+2BZM+4ATK5D" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www20.a8.net/svt/bgt?aid=240203490877&wid=001&eno=01&mid=s00000010885026004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0E76+EI56B6+2BZM+4ATK5D" alt="" />
    </div>
  ),
  3: (
    <div>
      {/*  動画スタジオ*/}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EHJQPE+4V0U+ZQV5T" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www26.a8.net/svt/bgt?aid=240203490876&wid=001&eno=01&mid=s00000022683006004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www14.a8.net/0.gif?a8mat=3Z0E76+EHJQPE+4V0U+ZQV5T" alt="" />
    </div>
  ),
  4: (
    <div>
      {/* コインランドリー */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E39C6Q+4RZ4+NVHCX" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www26.a8.net/svt/bgt?aid=240203490852&wid=001&eno=01&mid=s00000022288004010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z0E76+E39C6Q+4RZ4+NVHCX" alt="" />
    </div>
  ),
  5: (
    <div>
      {/* 女性のためのプロテイン【私の完全美容食】(24-0202) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E2NWKY+4ZUQ+HW2Q9" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=240203490851&wid=001&eno=01&mid=s00000023309003005000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0E76+E2NWKY+4ZUQ+HW2Q9" alt="" />
    </div>
  ),
  6: (
    <div>
      {/* 他社VPSを凌駕する圧倒的性能！「シン」世代VPS【シン・VPS】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1VVFQQ+5GDG+NVHCX" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=240201463114&wid=001&eno=01&mid=s00000025450004010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www17.a8.net/0.gif?a8mat=3Z0CMV+1VVFQQ+5GDG+NVHCX" alt="" />
    </div>
  ),
  7: (
    <div>
      {/* 国内最速！進化の極限を目指したエックスサーバーの新たなカタチ【シン・レンタルサーバー】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1U34XE+5GDG+601S1" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www20.a8.net/svt/bgt?aid=240201463111&wid=001&eno=01&mid=s00000025450001008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z0CMV+1U34XE+5GDG+601S1" alt="" />
    </div>
  ),
  8: (
    <div>
      {/* 性能コスパNo.1のXserverVPSがベース！FX自動売買専用VPS『シン・クラウドデスクトップ for FX』(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1SBLE+5GDG+HWI5T" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www28.a8.net/svt/bgt?aid=240201463003&wid=001&eno=01&mid=s00000025450003007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z0CMV+1SBLE+5GDG+HWI5T" alt="" />
    </div>
  ),
  9: (
    <div>
      {/* 100種類以上の求人広告一括取り扱い、求人広告掲載なら【求人広告ドットコム】(24-0213) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q04+D3K36+52NU+C0B9T" rel="nofollow">
        <img width="728" height="90" alt="" src="https://www24.a8.net/svt/bgt?aid=240218788022&wid=001&eno=01&mid=s00000023673002017000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www18.a8.net/0.gif?a8mat=3Z0Q04+D3K36+52NU+C0B9T" alt=""></img>
    </div>
  ),
  10: (
    <div>
      {/* 他社VPSを凌駕する圧倒的性能！「シン」世代VPS【シン・VPS】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1VVFQQ+5GDG+NVHCX" rel="nofollow">
        <img width="728" height="90" alt="" src="https://www29.a8.net/svt/bgt?aid=240201463114&wid=001&eno=01&mid=s00000025450004010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0CMV+1VVFQQ+5GDG+NVHCX" alt=""></img>
    </div>
  ),
  11: (
    <div>
      {/* 株式会社ＮＴＴドコモ（ｄ払いポイントＧＥＴモール） */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2KKY+B0IPO2+5244+5Z6WX" rel="nofollow">
        <img width="468" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=240305074666&wid=001&eno=01&mid=s00000023602001004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z2KKY+B0IPO2+5244+5Z6WX" alt=""></img>
    </div>
  ),
  12: (
    <div>
      {/* 成績保証付きのオンライン家庭教師【ドリーム】 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+1F7ASY+5IAC+60H7L" rel="nofollow">
        <img width="728" height="90" alt="" src="https://www24.a8.net/svt/bgt?aid=240322410086&wid=001&eno=01&mid=s00000025698001010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z2XYI+1F7ASY+5IAC+60H7L" alt=""></img>
    </div>
  ),
  13: (
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+74LUIA+50BY+NVHCX" rel="nofollow">
        <img width="728" height="90" alt="" src="https://www21.a8.net/svt/bgt?aid=240322410431&wid=001&eno=01&mid=s00000023371004010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z2XYI+74LUIA+50BY+NVHCX" alt=""></img>
    </div>
  ),
};

export const WideAdvertisements = () => {
  const [ad, setAd] = useState(null);
  useEffect(() => {
    const random = Math.floor(Math.random() * 14);
    setAd(ads[random]);
  }, []);
  return <>{ad}</>;
};
