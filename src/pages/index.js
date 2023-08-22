import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Js Home Page</title>
        <meta name="homepage" description="this is next js home page"/>
      </Head>
      <h1>This is Next.JS page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
