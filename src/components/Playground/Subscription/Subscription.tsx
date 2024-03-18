"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
const Subscription = () => {
  return (
    <div>
      <Tabs>
        <Tab key="home" title="ホーム">
          <div></div>
        </Tab>
        <Tab key="bunseki" title="分析">
          <p>Content 2</p>
        </Tab>
        <Tab key="pay" title="支払い履歴">
          <p>Content 3</p>
        </Tab>
        <Tab key="setting" title="設定">
          <p>Content 3</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Subscription;
