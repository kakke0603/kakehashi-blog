"use client";
import React, { useReducer, useState } from "react";
import {
  Tabs,
  Tab,
  Button,
  Modal,
  useDisclosure,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  Select,
  SelectItem,
  Card,
} from "@nextui-org/react";
import DeleteButton from "./DeleteButton";
import { TEChart } from "tw-elements-react";
import InfoButton from "./InfoButton";
type SubscriptionType = {
  serviceName: string;
  paymentCycle: string;
  monthlyFee: string;
  firstPaymentDate: string;
};
const Subscription = () => {
  const initialState = {
    serviceName: "",
    paymentCycle: "",
    monthlyFee: "",
    firstPaymentDate: "",
  };

  const value = localStorage.getItem("subscription");
  const [list, setList] = useState<Array<SubscriptionType>>(value ? JSON.parse(value) : []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formState, setFormState] = useReducer((previous, next) => ({ ...previous, ...next }), initialState);
  const [selected, setSelected] = useState<SubscriptionType>({ ...(JSON.parse(value) ?? { ...initialState }) });
  return (
    <div>
      <div className="px-3 flex justify-between">
        <InfoButton />
        <div className="w-full text-center">
          <Tabs className="flex justify-center">
            <Tab className="" key="home" title="ホーム">
              <div className="p-2 w-full">
                {list.map((pay, index) => (
                  <Card
                    isPressable
                    className="my-1 p-2 w-full"
                    key={index}
                    onClick={() => {
                      setSelected(pay);
                      onOpen();
                    }}
                  >
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <div>{pay.serviceName}</div>
                        <div>¥{pay.monthlyFee}/月</div>
                      </div>
                      <div className="flex justify-between w-full">
                        <div>{pay.paymentCycle}</div>
                        <div>{pay.firstPaymentDate}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Tab>
            <Tab className="" key="bunseki" title="分析">
              <div>
                <TEChart
                  type="pie"
                  data={{
                    labels: list.map((pay) => pay.serviceName),
                    datasets: [
                      {
                        label: "Traffic",
                        data: list.map((pay) => Number(pay.monthlyFee)),
                        backgroundColor: [
                          "rgba(63, 81, 181, 0.5)",
                          "rgba(77, 182, 172, 0.5)",
                          "rgba(66, 133, 244, 0.5)",
                          "rgba(156, 39, 176, 0.5)",
                          "rgba(233, 30, 99, 0.5)",
                          "rgba(66, 73, 244, 0.4)",
                          "rgba(66, 133, 244, 0.2)",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
        <DeleteButton
          onDelete={() => {
            setList([]);
            setFormState(initialState);
            setSelected(initialState);
          }}
        />
      </div>

      <div className="flex justify-end pb-2 pr-2">
        <Button isIconOnly onClick={onOpen} color="warning" variant="faded">
          {/* plus icon */}
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 45.402 45.402">
            <g>
              <path
                d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
              c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
              c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
              c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
              />
            </g>
          </svg>
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">追加</ModalHeader>
              <ModalBody>
                <Input
                  label="サービス名"
                  isRequired
                  value={selected.serviceName ?? formState.serviceName}
                  onChange={(e) => setFormState({ serviceName: e.target.value })}
                />
                <p>支払い周期</p>
                <Select
                  label="支払い周期を選択してください"
                  className="max-w-xs"
                  value={selected.paymentCycle ?? formState.paymentCycle}
                  onChange={(e) => setFormState(e.target.value)}
                >
                  <SelectItem key="1" value="1ヶ月に1回">
                    1ヶ月に1回
                  </SelectItem>
                  <SelectItem key="2" value="1年に1回">
                    1年に1回
                  </SelectItem>
                </Select>
                <p>月額料金</p>
                <Input
                  type="number"
                  isRequired
                  value={selected.monthlyFee ?? formState.monthlyFee}
                  onChange={(e) => setFormState({ monthlyFee: e.target.value })}
                />
                <p>初回支払日</p>
                <div className="flex">
                  <Input
                    size="sm"
                    type="date"
                    isRequired
                    value={selected.firstPaymentDate ?? formState.firstPaymentDate}
                    onChange={(e) => setFormState({ firstPaymentDate: e.target.value })}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  閉じる
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    setList([...list, formState]);
                    localStorage.setItem("subscription", JSON.stringify([...list, formState]));
                    setFormState(initialState);
                    onClose();
                  }}
                >
                  登録
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Subscription;
