import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from 'src/views/Home/Home.view';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';

const Home: NextPage = () => {
  return (
    <HomeView />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        [I18N_NAMESPACES.home, I18N_NAMESPACES.common],
      )),
    },
  };
};

export default Home;
