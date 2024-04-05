"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { use, useEffect, useState } from "react";

const ads = {
  0: (
    <div>
      {/* wordpress */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www23.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006017000&mc=1" />
      </a>
      <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" alt="" />
    </div>
  ),
  1: (
    <div>
      {/* hobby shop metalbox */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240202480899&wid=001&eno=01&mid=s00000019249001007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0DF4+EV8PMA+44IY+5ZU29" alt=""></img>
    </div>
  ),
  2: (
    <div>
      {/*  EC site */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www27.a8.net/svt/bgt?aid=240203490877&wid=001&eno=01&mid=s00000010885026006000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0E76+EI56B6+2BZM+4ATZKX" alt=""></img>
    </div>
  ),
  3: (
    <div>
      {/*  動画スタジオ*/}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www29.a8.net/svt/bgt?aid=240203490876&wid=001&eno=01&mid=s00000022683006006000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0E76+EHJQPE+4V0U+ZRALD" alt=""></img>
    </div>
  ),
  4: (
    <div>
      {/* MEN'S SELCA */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E8M8MQ+5EA6+BYDTT" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240203490861&wid=001&eno=01&mid=s00000025179002008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0E76+E8M8MQ+5EA6+BYDTT" alt=""></img>
    </div>
  ),
  5: (
    <div>
      {/* コインランドリー */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E39C6Q+4RZ4+NTZCH" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www20.a8.net/svt/bgt?aid=240203490852&wid=001&eno=01&mid=s00000022288004003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www18.a8.net/0.gif?a8mat=3Z0E76+E39C6Q+4RZ4+NTZCH" alt=""></img>
    </div>
  ),
  6: (
    <div>
      {/* 女性のためのプロテイン【私の完全美容食】(24-0202) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0E76+E2NWKY+4ZUQ+HVV0H" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240203490851&wid=001&eno=01&mid=s00000023309003004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0E76+E2NWKY+4ZUQ+HVV0H" alt=""></img>
    </div>
  ),
  7: (
    <div>
      {/* 他社VPSを凌駕する圧倒的性能！「シン」世代VPS【シン・VPS】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1VVFQQ+5GDG+NVP2P" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240201463114&wid=001&eno=01&mid=s00000025450004011000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z0CMV+1VVFQQ+5GDG+NVP2P" alt=""></img>
    </div>
  ),
  8: (
    <div>
      {/* 国内最速！進化の極限を目指したエックスサーバーの新たなカタチ【シン・レンタルサーバー】(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1U34XE+5GDG+609HT" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www28.a8.net/svt/bgt?aid=240201463111&wid=001&eno=01&mid=s00000025450001009000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z0CMV+1U34XE+5GDG+609HT" alt=""></img>
    </div>
  ),
  9: (
    <div>
      {/* 性能コスパNo.1のXserverVPSがベース！FX自動売買専用VPS『シン・クラウドデスクトップ for FX』(24-0201) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+1SBLE+5GDG+HWPVL" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240201463003&wid=001&eno=01&mid=s00000025450003008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+1SBLE+5GDG+HWPVL" alt=""></img>
    </div>
  ),
  10: (
    <div>
      {/* 日本エイサー株式会社 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2KKY+B2WG36+5G54+5YZ75" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www21.a8.net/svt/bgt?aid=240305074670&wid=001&eno=01&mid=s00000025420001003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z2KKY+B2WG36+5G54+5YZ75" alt=""></img>
    </div>
  ),
  11: (
    <div>
      {/* 株式会社Ｉ・Ａｃｃｅｓｓ */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2KKY+B2B0HE+58A2+601S1" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www28.a8.net/svt/bgt?aid=240305074669&wid=001&eno=01&mid=s00000024401001008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www18.a8.net/0.gif?a8mat=3Z2KKY+B2B0HE+58A2+601S1" alt=""></img>
    </div>
  ),
  12: (
    <div>
      {/* 株式会社ＮＴＴドコモ（ｄ払いポイントＧＥＴモール） */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2KKY+B0IPO2+5244+61C2P" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www20.a8.net/svt/bgt?aid=240305074666&wid=001&eno=01&mid=s00000023602001014000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z2KKY+B0IPO2+5244+61C2P" alt=""></img>
    </div>
  ),
  13: (
    <div>
      {/* 株式会社ＮＴＴドコモ（ｄ払いポイントＧＥＴモール）2 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2KKY+B0IPO2+5244+5ZU29" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240305074666&wid=001&eno=01&mid=s00000023602001007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z2KKY+B0IPO2+5244+5ZU29" alt=""></img>
    </div>
  ),
  14: (
    <div>
      {/* ポジウィル株式会社 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z0RKK+FJNHF6+5H76+5Z6WX" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240220820940&wid=001&eno=01&mid=s00000025557001004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z0RKK+FJNHF6+5H76+5Z6WX" alt=""></img>
    </div>
  ),
  15: (
    <div>
      {/* 成績保証付きのオンライン家庭教師【ドリーム】 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+1F7ASY+5IAC+60OXD" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240322410086&wid=001&eno=01&mid=s00000025698001011000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z2XYI+1F7ASY+5IAC+60OXD" alt=""></img>
    </div>
  ),
  16: (
    <div>
      {/* 大切な方へ贈る特別なオーダー国産腕時計【ルノータス】(24-0321) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+76E5BM+5I9I+5YZ75" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www27.a8.net/svt/bgt?aid=240322410434&wid=001&eno=01&mid=s00000025695001003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z2XYI+76E5BM+5I9I+5YZ75" alt=""></img>
    </div>
  ),
  17: (
    <div>
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+74LUIA+50BY+NUU7L" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240322410431&wid=001&eno=01&mid=s00000023371004007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z2XYI+74LUIA+50BY+NUU7L" alt=""></img>
    </div>
  ),
  18: (
    <div>
      {/* 本物に価するレザーアイテムを厳選し、出逢いをお届けするセレクトショップ(17-0607) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+7IW90Y+3QLK+6TEVL" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www28.a8.net/svt/bgt?aid=240322410455&wid=001&eno=01&mid=s00000017444001145000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z2XYI+7IW90Y+3QLK+6TEVL" alt=""></img>
    </div>
  ),
  19: (
    <div>
      {/* 未経験からITエンジニアに！初めての転職も徹底サポート【IT専門転職エージェント＠PRO人】(24-0319) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z2XYI+1FSQEQ+4GWI+HVNAP" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www25.a8.net/svt/bgt?aid=240322410087&wid=001&eno=01&mid=s00000020853003003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z2XYI+1FSQEQ+4GWI+HVNAP" alt=""></img>
    </div>
  ),
  20: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TUVZL" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005015000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www10.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TUVZL" alt=""></img>
    </div>
  ),
  21: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TUO9T" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www21.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005014000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www13.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TUO9T" alt=""></img>
    </div>
  ),
  22: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TUGK1" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www27.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005013000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TUGK1" alt=""></img>
    </div>
  ),
  23: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TU8U9" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www22.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005012000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TU8U9" alt=""></img>
    </div>
  ),
  24: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TU14H" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www21.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005011000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www16.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TU14H" alt=""></img>
    </div>
  ),
  25: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TTTEP" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www27.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005010000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TTTEP" alt=""></img>
    </div>
  ),
  26: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TTLOX" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www24.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005009000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www12.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TTLOX" alt=""></img>
    </div>
  ),
  27: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TTDZ5" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www27.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www15.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TTDZ5" alt=""></img>
    </div>
  ),
  28: (
    <div>
      {/* 送料無料 /スタイリッシュで洗練された家具「INNERPEACE」とともに、ナチュラル(24-0325) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z31VS+FP0DV6+55BE+TT69D" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www26.a8.net/svt/bgt?aid=240327496949&wid=001&eno=01&mid=s00000024017005007000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www17.a8.net/0.gif?a8mat=3Z31VS+FP0DV6+55BE+TT69D" alt=""></img>
    </div>
  ),
  29: (
    <div>
      {/* 【A8.net】メディア会員募集(01-0501) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3HE1AZ+41V7ZM+0K+10YDIP" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www21.a8.net/svt/bgt?aid=210606875245&wid=001&eno=01&mid=s00000000002006207000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www13.a8.net/0.gif?a8mat=3HE1AZ+41V7ZM+0K+10YDIP" alt=""></img>
    </div>
  ),
  30: (
    <div>
      {/* サブスク型ホームページが制作費用0円！月々8800円で運用可能！【andHP】(24-0329) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7IATF6+5I8E+5YZ75" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www25.a8.net/svt/bgt?aid=240405684454&wid=001&eno=01&mid=s00000025691001003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z4Q7O+7IATF6+5I8E+5YZ75" alt=""></img>
    </div>
  ),
  31: (
    <div>
      {/* ＜個人事業主向け＞確定申告書等を自動作成で効率化！【マネーフォワード クラウド】(24-0401) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7L9ZG2+3SPO+C8MHDT" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www21.a8.net/svt/bgt?aid=240405684459&wid=001&eno=01&mid=s00000017718074008000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www13.a8.net/0.gif?a8mat=3Z4Q7O+7L9ZG2+3SPO+C8MHDT" alt=""></img>
    </div>
  ),
  32: (
    <div>
      {/* 未経験・微経験のITエンジニア転職なら【ツギノシゴト】(24-0329) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7LVF1U+5I8O+5YZ75" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www23.a8.net/svt/bgt?aid=240405684460&wid=001&eno=01&mid=s00000025692001003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www17.a8.net/0.gif?a8mat=3Z4Q7O+7LVF1U+5I8O+5YZ75" alt=""></img>
    </div>
  ),
  33: (
    <div>
      {/* 美しさを保つ秘訣 【ORIVIN】(24-0403) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXB8X" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www23.a8.net/svt/bgt?aid=240405684465&wid=001&eno=01&mid=s00000025105002003000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www17.a8.net/0.gif?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXB8X" alt=""></img>
    </div>
  ),
  34: (
    <div>
      {/* 美しさを保つ秘訣 【ORIVIN】(24-0403) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXIYP" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www23.a8.net/svt/bgt?aid=240405684465&wid=001&eno=01&mid=s00000025105002004000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www11.a8.net/0.gif?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXIYP" alt=""></img>
    </div>
  ),
  35: (
    <div>
      {/* 美しさを保つ秘訣 【ORIVIN】(24-0403) */}
      <a href="https://px.a8.net/svt/ejp?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXQOH" rel="nofollow">
        <img style={{ maxWidth: 300 }} alt="" src="https://www23.a8.net/svt/bgt?aid=240405684465&wid=001&eno=01&mid=s00000025105002005000&mc=1" />
      </a>
      <img style={{ width: 1, height: 1 }} src="https://www19.a8.net/0.gif?a8mat=3Z4Q7O+7OUL2Q+5DPM+BXQOH" alt=""></img>
    </div>
  ),
};
export const SideAdvertisements = () => {
  const [ad, setAd] = useState(null);
  const { width } = useWindowSize();
  useEffect(() => {
    const random = Math.floor(Math.random() * 30);
    setAd(ads[random]);
  }, []);
  return <div style={{ width: (width - 1024) / 2 }}>{ad}</div>;
};
