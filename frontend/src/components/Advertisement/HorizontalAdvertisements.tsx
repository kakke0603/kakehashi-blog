"use client";
import React, { useEffect, useState } from "react";

const ads = {
  0: (
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www21.a8.net/svt/bgt?aid=240218787995&wid=001&eno=01&mid=s00000025604001009000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" alt=""></img>
    </div>
  ),
  1: (
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q04+D3K36+52NU+BZO4H" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www26.a8.net/svt/bgt?aid=240218788022&wid=001&eno=01&mid=s00000023673002014000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0Q04+D3K36+52NU+BZO4H" alt=""></img>
    </div>
  ),
  2: (
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q03+BZNACY+2PEO+1I7QCH" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www20.a8.net/svt/bgt?aid=240218787725&wid=001&eno=01&mid=s00000012624009106000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0Q03+BZNACY+2PEO+1I7QCH" alt=""></img>
    </div>
  ),
  3: (
    // 成績保証付きのオンライン家庭教師【ドリーム】
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+1F7ASY+5IAC+614CX" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www26.a8.net/svt/bgt?aid=240322410086&wid=001&eno=01&mid=s00000025698001013000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z2XYI+1F7ASY+5IAC+614CX" alt=""></img>
    </div>
  ),
  4: (
    //アウトドアに特化！簡単便利・食べきりサイズ【孤高のキャンプ飯・アルファー食品】(24-0321)
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+74LUIA+50BY+NUES1" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www21.a8.net/svt/bgt?aid=240322410431&wid=001&eno=01&mid=s00000023371004005000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z2XYI+74LUIA+50BY+NUES1" alt=""></img>
    </div>
  ),
  5: (
    //本物に価するレザーアイテムを厳選し、出逢いをお届けするセレクトショップ(17-0607)
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+7IW90Y+3QLK+8ZN8H" rel="nofollow">
        <img
          style={{ width: 120, maxHeight: 600 }}
          alt=""
          src="https://www26.a8.net/svt/bgt?aid=240322410455&wid=001&eno=01&mid=s00000017444001510000&mc=1"
        />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z2XYI+7IW90Y+3QLK+8ZN8H" alt=""></img>
    </div>
  ),
};
export const HorizontalAdvertisements = () => {
  const [ad, setAd] = useState(null);
  useEffect(() => {
    const random = Math.floor(Math.random() * 6);
    setAd(ads[random]);
  }, []);
  return <>{ad}</>;
};
