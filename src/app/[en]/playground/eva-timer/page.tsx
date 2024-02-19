import { EvaTimer } from "@/components/Playground/EvaTimer/EvaTimer";

export const runtime = "edge";

/**
 * メタデータの設定
 */
const siteName = "eva-timer:エヴァっぽいタイマー作ってみた";
export const metadata = {
  title: {
    default: "eva-timer:エヴァっぽいタイマー作ってみた",
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    title: siteName,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: "/ogp-eva-timer.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    site: "@kkhs0603",
    creator: "@kkhs0603",
  },
  verification: {
    google: "",
  },
};
export default async function Page() {
  return (
    <div>
      <EvaTimer />
      <table cellPadding="0" cellSpacing="0" style={{ border: "1px solid #ccc", width: "300px" }}>
        <tbody>
          <tr style={{ borderStyle: "none" }}>
            <td style={{ verticalAlign: "top", borderStyle: "none", padding: "10px", width: "44px" }}>
              <a
                href="https://rpx.a8.net/svt/ejp?a8mat=3HE1AZ+42GNLE+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00q0724.2bo11c45.g00q0724.2bo12179%2Fa21060605684_3HE1AZ_42GNLE_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fbook%252F17303933%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fbook%252Fi%252F20790846%252F"
                rel="nofollow"
              >
                <img alt="" src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8627/4988003878627_1_2.jpg?_ex=64x64" />
              </a>
            </td>
            <td style={{ fontSize: "12px", verticalAlign: "middle", borderStyle: "none", padding: "10px" }}>
              <p style={{ padding: 0, margin: 0 }}>
                <a
                  href="https://rpx.a8.net/svt/ejp?a8mat=3HE1AZ+42GNLE+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00q0724.2bo11c45.g00q0724.2bo12179%2Fa21060605684_3HE1AZ_42GNLE_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fbook%252F17303933%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fbook%252Fi%252F20790846%252F"
                  rel="nofollow"
                >
                  シン・エヴァンゲリオン劇場版　EVANGELION:3.0 1.11 THRICE UPON A TIME【初回限定版】(Blu-ray 4K Ultra HD Blu-ray)【4K ULTRA HD】 [
                  庵野秀明 ]
                </a>
              </p>
              <p style={{ color: "#666", marginTop: "5px", lineHeight: 1.5 }}>
                価格:
                <span style={{ fontSize: "14px", color: "#C00", fontWeight: "bold" }}>8624円</span>
                <br />
                <span style={{ fontSize: "10px", fontWeight: "normal" }}>(2024/2/1 16:29時点)</span>
                <br />
                <span style={{ fontWeight: "bold" }}>感想(16件)</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3HE1AZ+42GNLE+2HOM+BWGDT" alt=""></img>
    </div>
  );
}
