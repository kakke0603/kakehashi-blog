import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";

const InfoButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button isIconOnly onClick={onOpen} color="warning" variant="faded">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
          <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
        </svg>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">使い方</ModalHeader>
          <ModalBody>
            <p>サブスクリプションの管理アプリです</p>
            <p>プラスボタン押下で新規サブスクリプションの追加を行います</p>
            <p>ゴミ箱ボタンで登録されたサブスクを全件削除します</p>
            <p>分析タブで使用額のグラフを表示</p>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onOpenChange}>
                閉じる
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default InfoButton;
