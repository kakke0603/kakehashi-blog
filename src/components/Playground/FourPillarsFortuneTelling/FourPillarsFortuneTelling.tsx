"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";

const FourPillarsFortuneTelling = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col space-y-5">
      <div>四柱推命占いアプリ</div>
      <Input label="名前" placeholder="名前を入力してください" value={name} onValueChange={setName} />
      <Input label="生年月日" placeholder="生年月日を入力してください" value={date} onValueChange={setDate} type="date" />
      <Select label="生まれた時間" placeholder="" value={value}>
        <SelectItem value="-1" key={"-1"}>
          不明
        </SelectItem>
        <SelectItem value="1" key={"1"}>
          1時
        </SelectItem>
        <SelectItem value="2" key={"2"}>
          2時
        </SelectItem>
        <SelectItem value="3" key={"3"}>
          3時
        </SelectItem>
        <SelectItem value="4" key={"4"}>
          4時
        </SelectItem>
        <SelectItem value="5" key={"5"}>
          5時
        </SelectItem>
        <SelectItem value="6" key={"6"}>
          6時
        </SelectItem>
        <SelectItem value="7" key={"7"}>
          7時
        </SelectItem>
        <SelectItem value="8" key={"8"}>
          8時
        </SelectItem>
        <SelectItem value="9" key={"9"}>
          9時
        </SelectItem>
        <SelectItem value="10" key={"10"}>
          10時
        </SelectItem>
        <SelectItem value="11" key={"11"}>
          11時
        </SelectItem>
        <SelectItem value="12" key={"12"}>
          12時
        </SelectItem>
        <SelectItem value="13" key={"13"}>
          13時
        </SelectItem>
        <SelectItem value="14" key={"14"}>
          14時
        </SelectItem>
        <SelectItem value="15" key={"15"}>
          15時
        </SelectItem>
        <SelectItem value="16" key={"16"}>
          16時
        </SelectItem>
        <SelectItem value="17" key={"17"}>
          17時
        </SelectItem>
        <SelectItem value="18" key={"18"}>
          18時
        </SelectItem>
        <SelectItem value="19" key={"19"}>
          19時
        </SelectItem>
        <SelectItem value="20" key={"20"}>
          20時
        </SelectItem>
        <SelectItem value="21" key={"21"}>
          21時
        </SelectItem>
        <SelectItem value="22" key={"22"}>
          22時
        </SelectItem>
        <SelectItem value="23" key={"23"}>
          23時
        </SelectItem>
        <SelectItem value="24" key={"24"}>
          24時
        </SelectItem>
      </Select>
      <Button color="primary">占う</Button>
    </div>
  );
};

export default FourPillarsFortuneTelling;
