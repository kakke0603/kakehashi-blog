export default async function Page({ params: { lang } }) {
  console.log(lang);
  return <div>aaaaaa{lang}</div>;
}
