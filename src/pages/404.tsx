import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';
import NotFoundView from 'src/views/NotFound/NotFound.view';

const NotFound: NextPage = () => {
  return (
    <NotFoundView />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale as string,
      [I18N_NAMESPACES.notFound],
    )),
  },
});

export default NotFound;
