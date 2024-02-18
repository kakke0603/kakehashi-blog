"use client";
import React from "react";
import { useWindowSize } from "usehooks-ts";

export const HorizontalAdvertisements = () => {
  const random = Math.floor(Math.random() * 10);
  const size = useWindowSize();
  const width = size.width ?? 0;
  if (random < 4) {
    return (
      //無料診断OK Web集客に強いリスティング・SNS広告運用の【アイテクサス】(24-0209)
      <div>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2, maxHeight: 600 }}
            alt=""
            src="https://www21.a8.net/svt/bgt?aid=240218787995&wid=001&eno=01&mid=s00000025604001009000&mc=1"
          />
        </a>
        <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0Q03+GGEBOY+5HK8+609HT" alt=""></img>
      </div>
    );
  } else if (random < 8) {
    return (
      // 100種類以上の求人広告一括取り扱い、求人広告掲載なら【求人広告ドットコム】(24-0213)
      <div>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q04+D3K36+52NU+BZO4H" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2, maxHeight: 600 }}
            alt=""
            src="https://www26.a8.net/svt/bgt?aid=240218788022&wid=001&eno=01&mid=s00000023673002014000&mc=1"
          />
        </a>
        <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0Q04+D3K36+52NU+BZO4H" alt=""></img>
      </div>
    );
  } else {
    return (
      //TVCM放映で知名度UP★ココナラ｜Webサイト・デザイン・動画・イラストなど発注者 募集(18-1129)
      <div>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0Q03+BZNACY+2PEO+1I7QCH" rel="nofollow">
          <img
            style={{ width: (width - 1024) / 2, maxHeight: 600 }}
            alt=""
            src="https://www20.a8.net/svt/bgt?aid=240218787725&wid=001&eno=01&mid=s00000012624009106000&mc=1"
          />
        </a>
        <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0Q03+BZNACY+2PEO+1I7QCH" alt=""></img>
      </div>
    );
  }
};
