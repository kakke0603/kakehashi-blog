"use client";
import React from "react";
import { useLang } from "../../hooks/useLang";

const Privacy = () => {
  const { isJapanese } = useLang();
  return <div className="p-3">{isJapanese ? JpPrivacy() : EnPrivacy()}</div>;
};

const JpPrivacy = () => {
  return (
    <div>
      <h1>プライバシーポリシー</h1>
      <br />
      個人情報の利用目的 当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
      <br />
      取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
      <br />
      <h2>広告について</h2>
      当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
      <br />
      クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
      <br />
      Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。
      <br />
      また、kakke.siteは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
      <br />
      <h2>アクセス解析ツールについて</h2>
      <br />
      当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
    </div>
  );
};

const EnPrivacy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <br />
      At this blog, we may ask you to enter personal information such as your name and email address when you inquire or comment on an article.
      <br />
      The personal information we collect will only be used to respond to inquiries and provide necessary information by email, and will not be used
      for any other purpose.
      <br />
      <h2>About advertising</h2>
      This blog uses third-party advertising services (Google AdSense, A8.net) to display ads for products and services that may be of interest to
      users, using cookies.
      <br />
      By using cookies, the site can identify your computer, but not you as an individual.
      <br />
      For information on how to disable cookies and Google AdSense, please see Advertising - Policies and Terms - Google.
      <br />
      In addition, kakke.site is a participant in the Amazon Associates Program, an affiliate program designed to provide a means for sites to earn
      advertising fees by advertising and linking to Amazon.co.jp.
      <br />
      <h2>About access analysis tools</h2>
      <br />
      This blog uses Google Analytics, a traffic data collection tool provided by Google. Google Analytics uses cookies to collect traffic data. The
      traffic data is collected anonymously and does not identify individuals.
    </div>
  );
};

export default Privacy;
