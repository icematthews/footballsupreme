import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/footballsupremelogo.ico" />
      </Head>

      <Header />
      {/* <Search /> */}
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Football Supreme",
  keywords: "football, soccer, man utd",
  description: "Discussion on the latest football news",
};
