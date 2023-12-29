"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import React, { useReducer, useState } from "react"
import html2canvas from "html2canvas"

export const OurGoals = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const value = localStorage.getItem("our-goals")
  const [goal, setGoal] = useState(value ? JSON.parse(value).goal : "")
  const [subGoal1, setSubGoal1] = useState(value ? JSON.parse(value).subGoal1 : "")
  const [subGoal2, setSubGoal2] = useState(value ? JSON.parse(value).subGoal2 : "")
  const [subGoal3, setSubGoal3] = useState(value ? JSON.parse(value).subGoal3 : "")
  const [subGoal4, setSubGoal4] = useState(value ? JSON.parse(value).subGoal4 : "")
  const [subGoal5, setSubGoal5] = useState(value ? JSON.parse(value).subGoal5 : "")
  const [subGoal6, setSubGoal6] = useState(value ? JSON.parse(value).subGoal6 : "")
  const [subGoal7, setSubGoal7] = useState(value ? JSON.parse(value).subGoal7 : "")
  const [subGoal8, setSubGoal8] = useState(value ? JSON.parse(value).subGoal8 : "")
  const [todo1, setTodo1] = useState(value ? JSON.parse(value).todo1 : "")
  const [todo2, setTodo2] = useState(value ? JSON.parse(value).todo2 : "")
  const [todo3, setTodo3] = useState(value ? JSON.parse(value).todo3 : "")
  const [todo4, setTodo4] = useState(value ? JSON.parse(value).todo4 : "")
  const [todo5, setTodo5] = useState(value ? JSON.parse(value).todo5 : "")
  const [todo6, setTodo6] = useState(value ? JSON.parse(value).todo6 : "")
  const [todo7, setTodo7] = useState(value ? JSON.parse(value).todo7 : "")
  const [todo8, setTodo8] = useState(value ? JSON.parse(value).todo8 : "")
  const [todo9, setTodo9] = useState(value ? JSON.parse(value).todo9 : "")
  const [todo10, setTodo10] = useState(value ? JSON.parse(value).todo10 : "")
  const [todo11, setTodo11] = useState(value ? JSON.parse(value).todo11 : "")
  const [todo12, setTodo12] = useState(value ? JSON.parse(value).todo12 : "")
  const [todo13, setTodo13] = useState(value ? JSON.parse(value).todo13 : "")
  const [todo14, setTodo14] = useState(value ? JSON.parse(value).todo14 : "")
  const [todo15, setTodo15] = useState(value ? JSON.parse(value).todo15 : "")
  const [todo16, setTodo16] = useState(value ? JSON.parse(value).todo16 : "")
  const [todo17, setTodo17] = useState(value ? JSON.parse(value).todo17 : "")
  const [todo18, setTodo18] = useState(value ? JSON.parse(value).todo18 : "")
  const [todo19, setTodo19] = useState(value ? JSON.parse(value).todo19 : "")
  const [todo20, setTodo20] = useState(value ? JSON.parse(value).todo20 : "")
  const [todo21, setTodo21] = useState(value ? JSON.parse(value).todo21 : "")
  const [todo22, setTodo22] = useState(value ? JSON.parse(value).todo22 : "")
  const [todo23, setTodo23] = useState(value ? JSON.parse(value).todo23 : "")
  const [todo24, setTodo24] = useState(value ? JSON.parse(value).todo24 : "")
  const [todo25, setTodo25] = useState(value ? JSON.parse(value).todo25 : "")
  const [todo26, setTodo26] = useState(value ? JSON.parse(value).todo26 : "")
  const [todo27, setTodo27] = useState(value ? JSON.parse(value).todo27 : "")
  const [todo28, setTodo28] = useState(value ? JSON.parse(value).todo28 : "")
  const [todo29, setTodo29] = useState(value ? JSON.parse(value).todo29 : "")
  const [todo30, setTodo30] = useState(value ? JSON.parse(value).todo30 : "")
  const [todo31, setTodo31] = useState(value ? JSON.parse(value).todo31 : "")
  const [todo32, setTodo32] = useState(value ? JSON.parse(value).todo32 : "")
  const [todo33, setTodo33] = useState(value ? JSON.parse(value).todo33 : "")
  const [todo34, setTodo34] = useState(value ? JSON.parse(value).todo34 : "")
  const [todo35, setTodo35] = useState(value ? JSON.parse(value).todo35 : "")
  const [todo36, setTodo36] = useState(value ? JSON.parse(value).todo36 : "")
  const [todo37, setTodo37] = useState(value ? JSON.parse(value).todo37 : "")
  const [todo38, setTodo38] = useState(value ? JSON.parse(value).todo38 : "")
  const [todo39, setTodo39] = useState(value ? JSON.parse(value).todo39 : "")
  const [todo40, setTodo40] = useState(value ? JSON.parse(value).todo40 : "")
  const [todo41, setTodo41] = useState(value ? JSON.parse(value).todo41 : "")
  const [todo42, setTodo42] = useState(value ? JSON.parse(value).todo42 : "")
  const [todo43, setTodo43] = useState(value ? JSON.parse(value).todo43 : "")
  const [todo44, setTodo44] = useState(value ? JSON.parse(value).todo44 : "")
  const [todo45, setTodo45] = useState(value ? JSON.parse(value).todo45 : "")
  const [todo46, setTodo46] = useState(value ? JSON.parse(value).todo46 : "")
  const [todo47, setTodo47] = useState(value ? JSON.parse(value).todo47 : "")
  const [todo48, setTodo48] = useState(value ? JSON.parse(value).todo48 : "")
  const [todo49, setTodo49] = useState(value ? JSON.parse(value).todo49 : "")
  const [todo50, setTodo50] = useState(value ? JSON.parse(value).todo50 : "")
  const [todo51, setTodo51] = useState(value ? JSON.parse(value).todo51 : "")
  const [todo52, setTodo52] = useState(value ? JSON.parse(value).todo52 : "")
  const [todo53, setTodo53] = useState(value ? JSON.parse(value).todo53 : "")
  const [todo54, setTodo54] = useState(value ? JSON.parse(value).todo54 : "")
  const [todo55, setTodo55] = useState(value ? JSON.parse(value).todo55 : "")
  const [todo56, setTodo56] = useState(value ? JSON.parse(value).todo56 : "")
  const [todo57, setTodo57] = useState(value ? JSON.parse(value).todo57 : "")
  const [todo58, setTodo58] = useState(value ? JSON.parse(value).todo58 : "")
  const [todo59, setTodo59] = useState(value ? JSON.parse(value).todo59 : "")
  const [todo60, setTodo60] = useState(value ? JSON.parse(value).todo60 : "")
  const [todo61, setTodo61] = useState(value ? JSON.parse(value).todo61 : "")
  const [todo62, setTodo62] = useState(value ? JSON.parse(value).todo62 : "")
  const [todo63, setTodo63] = useState(value ? JSON.parse(value).todo63 : "")
  const [todo64, setTodo64] = useState(value ? JSON.parse(value).todo64 : "")

  const reset = () => {
    setGoal("")
    setSubGoal1("")
    setSubGoal2("")
    setSubGoal3("")
    setSubGoal4("")
    setSubGoal5("")
    setSubGoal6("")
    setSubGoal7("")
    setSubGoal8("")
    setTodo1("")
    setTodo2("")
    setTodo3("")
    setTodo4("")
    setTodo5("")
    setTodo6("")
    setTodo7("")
    setTodo8("")
    setTodo9("")
    setTodo10("")
    setTodo11("")
    setTodo12("")
    setTodo13("")
    setTodo14("")
    setTodo15("")
    setTodo16("")
    setTodo17("")
    setTodo18("")
    setTodo19("")
    setTodo20("")
    setTodo21("")
    setTodo22("")
    setTodo23("")
    setTodo24("")
    setTodo25("")
    setTodo26("")
    setTodo27("")
    setTodo28("")
    setTodo29("")
    setTodo30("")
    setTodo31("")
    setTodo32("")
    setTodo33("")
    setTodo34("")
    setTodo35("")
    setTodo36("")
    setTodo37("")
    setTodo38("")
    setTodo39("")
    setTodo40("")
    setTodo41("")
    setTodo42("")
    setTodo43("")
    setTodo44("")
    setTodo45("")
    setTodo46("")
    setTodo47("")
    setTodo48("")
    setTodo49("")
    setTodo50("")
    setTodo51("")
    setTodo52("")
    setTodo53("")
    setTodo54("")
    setTodo55("")
    setTodo56("")
    setTodo57("")
    setTodo58("")
    setTodo59("")
    setTodo60("")
    setTodo61("")
    setTodo62("")
    setTodo63("")
    setTodo64("")
  }

  const onSave = () => {
    const data = {
      goal,
      subGoal1,
      subGoal2,
      subGoal3,
      subGoal4,
      subGoal5,
      subGoal6,
      subGoal7,
      subGoal8,
      todo1,
      todo2,
      todo3,
      todo4,
      todo5,
      todo6,
      todo7,
      todo8,
      todo9,
      todo10,
      todo11,
      todo12,
      todo13,
      todo14,
      todo15,
      todo16,
      todo17,
      todo18,
      todo19,
      todo20,
      todo21,
      todo22,
      todo23,
      todo24,
      todo25,
      todo26,
      todo27,
      todo28,
      todo29,
      todo30,
      todo31,
      todo32,
      todo33,
      todo34,
      todo35,
      todo36,
      todo37,
      todo38,
      todo39,
      todo40,
      todo41,
      todo42,
      todo43,
      todo44,
      todo45,
      todo46,
      todo47,
      todo48,
      todo49,
      todo50,
      todo51,
      todo52,
      todo53,
      todo54,
      todo55,
      todo56,
      todo57,
      todo58,
      todo59,
      todo60,
      todo61,
      todo62,
      todo63,
      todo64,
    }
    localStorage.setItem("our-goals", JSON.stringify(data))
  }

  const saveAsImage = (uri: any) => {
    const downloadLink = document.createElement("a")
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri
      // ファイル名
      downloadLink.download = "goals.png"
      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink)
      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click()
      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink)
    } else {
      window.open(uri)
    }
  }
  const onClickExport = () => {
    // 画像に変換する component の id を指定
    const target = document.getElementById("target-component")
    if (!target) return
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png")
      saveAsImage(targetImgUri)
    })
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button onClick={onOpen}>info</Button>
        <div className="pt-1 text-xl font-bold">Our Goals</div>
        <Button onClick={onSave} color="primary">
          save
        </Button>
      </div>
      <div className="border w-full" id="target-component">
        <div className="flex flex-col">
          <div className="flex w-full">
            <textarea className="border w-full resize-none" rows={3} value={todo1} onChange={(e) => setTodo1(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo2} onChange={(e) => setTodo2(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo3} onChange={(e) => setTodo3(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo4} onChange={(e) => setTodo4(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo5} onChange={(e) => setTodo5(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo6} onChange={(e) => setTodo6(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo7} onChange={(e) => setTodo7(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo8} onChange={(e) => setTodo8(e.target.value)} />
            <textarea className="border w-full resize-none" rows={3} value={todo9} onChange={(e) => setTodo9(e.target.value)} />
          </div>
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo10} onChange={(e) => setTodo10(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal1} onChange={(e) => setSubGoal1(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo11} onChange={(e) => setTodo11(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo12} onChange={(e) => setTodo12(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal2} onChange={(e) => setSubGoal2(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo13} onChange={(e) => setTodo13(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo14} onChange={(e) => setTodo14(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal3} onChange={(e) => setSubGoal3(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo15} onChange={(e) => setTodo15(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo16} onChange={(e) => setTodo16(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo17} onChange={(e) => setTodo17(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo18} onChange={(e) => setTodo18(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo19} onChange={(e) => setTodo19(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo20} onChange={(e) => setTodo20(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo21} onChange={(e) => setTodo21(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo22} onChange={(e) => setTodo22(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo23} onChange={(e) => setTodo23(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo24} onChange={(e) => setTodo24(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo25} onChange={(e) => setTodo25(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo26} onChange={(e) => setTodo26(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo27} onChange={(e) => setTodo27(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal1} onChange={(e) => setSubGoal1(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal2} onChange={(e) => setSubGoal2(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal3} onChange={(e) => setSubGoal3(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo28} onChange={(e) => setTodo28(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo29} onChange={(e) => setTodo29(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo30} onChange={(e) => setTodo30(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo31} onChange={(e) => setTodo31(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal4} onChange={(e) => setSubGoal4(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo32} onChange={(e) => setTodo32(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal4} onChange={(e) => setSubGoal4(e.target.value)} />
          <textarea className="border border-red-500 w-full resize-none" rows={3} value={goal} onChange={(e) => setGoal(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal5} onChange={(e) => setSubGoal5(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo33} onChange={(e) => setTodo33(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal5} onChange={(e) => setSubGoal5(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo34} onChange={(e) => setTodo34(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo35} onChange={(e) => setTodo35(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo36} onChange={(e) => setTodo36(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo37} onChange={(e) => setTodo37(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal6} onChange={(e) => setSubGoal6(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal7} onChange={(e) => setSubGoal7(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal8} onChange={(e) => setSubGoal8(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo38} onChange={(e) => setTodo38(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo39} onChange={(e) => setTodo39(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo40} onChange={(e) => setTodo40(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo41} onChange={(e) => setTodo41(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo42} onChange={(e) => setTodo42(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo43} onChange={(e) => setTodo43(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo44} onChange={(e) => setTodo44(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo45} onChange={(e) => setTodo45(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo46} onChange={(e) => setTodo46(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo47} onChange={(e) => setTodo47(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo48} onChange={(e) => setTodo48(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo49} onChange={(e) => setTodo49(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo50} onChange={(e) => setTodo50(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal6} onChange={(e) => setSubGoal6(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo51} onChange={(e) => setTodo51(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo52} onChange={(e) => setTodo52(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal7} onChange={(e) => setSubGoal7(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo53} onChange={(e) => setTodo53(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo54} onChange={(e) => setTodo54(e.target.value)} />
          <textarea className="border border-blue-500 w-full resize-none" rows={3} value={subGoal8} onChange={(e) => setSubGoal8(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo55} onChange={(e) => setTodo55(e.target.value)} />
        </div>
        <div className="flex w-full">
          <textarea className="border w-full resize-none" rows={3} value={todo56} onChange={(e) => setTodo56(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo57} onChange={(e) => setTodo57(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo58} onChange={(e) => setTodo58(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo59} onChange={(e) => setTodo59(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo60} onChange={(e) => setTodo60(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo61} onChange={(e) => setTodo61(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo62} onChange={(e) => setTodo62(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo63} onChange={(e) => setTodo63(e.target.value)} />
          <textarea className="border w-full resize-none" rows={3} value={todo64} onChange={(e) => setTodo64(e.target.value)} />
        </div>
      </div>
      <Button fullWidth color="primary" className="mt-5" onClick={onClickExport}>
        画像化
      </Button>
      <Button fullWidth className="mt-5" onClick={reset}>
        リセット
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Our Goals</ModalHeader>
              <ModalBody>
                <p>
                  1.中心に主題や目標を記述する: チャートの中心に、取り組みたい主題や達成したい目標を書きます。
                  <p className="text-red-500">赤枠</p>
                </p>
                <p>
                  2.主題や目標を達成するために必要な行動を記述する
                  <p className="text-blue-500">青枠</p>
                </p>
                <p>3.2.で記載した行動を達成するために必要な具体的な行動を記述する</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
