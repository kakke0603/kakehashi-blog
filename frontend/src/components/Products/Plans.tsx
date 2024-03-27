"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";

const Plans = () => {
  return (
    <div>
      <div>誠意作成中</div>
      <h1 className="">Plans</h1>
      <div className="flex gap-3 justify-between p-3 w-[100dvw] overflow-scroll">
        <Card className="w-[250px] text-nowrap">
          <CardHeader className="flex gap-3 font-bold text-xl">
            <div className="">
              <div>フリープラン</div>
              <div>0円</div>
            </div>
          </CardHeader>
          <CardBody>
            <div>静的サイト(ホームページ)を作成</div>
            <div>ドメイン指定不可</div>
            <div>１ヶ月トライアル</div>
          </CardBody>
        </Card>
        <Card className="w-[250px] text-nowrap">
          <CardHeader className="flex gap-3 font-bold text-xl">
            <div className="">
              <div>プレミアムプラン</div>
              <div>5000円/月</div>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <div>静的サイト(ホームページ)を作成・更新</div>
              <div>ドメイン指定可能(要相談)</div>
              <div>ブログの新規作成(ブログ更新者は最大3名まで)</div>
              <div>サーバーのメンテナンス及び保守</div>
              <div>お問い合わせフォームページの作成</div>
              <div>デザインの改修</div>
              <div>機能の改善及び改修</div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-[250px] text-nowrap">
          <CardHeader className="flex gap-3 font-bold text-xl">
            <div className="">
              <div>プラチナプラン</div>
              <div>要相談</div>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <div>静的サイト(ホームページ)を作成・更新</div>
              <div>ドメイン指定可能(要相談)</div>
              <div>ブログの新規作成(ブログ更新者は要相談)</div>
              <div>サーバーのメンテナンス及び保守</div>
              <div>お問い合わせフォームページの作成</div>
              <div>デザインの改修</div>
              <div>機能の改善及び改修</div>
              <div>ECサイトの構築・運用・保守</div>
              <div>SEO対策</div>
              <div>多言語対応</div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Plans;
