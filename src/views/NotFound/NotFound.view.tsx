import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';
import { GENERAL_ROUTES } from 'src/constants/routes';
import classes from 'src/views/NotFound/NotFound.module.scss';

const NotFoundView = () => {
  const { t } = useTranslation(I18N_NAMESPACES.notFound);

  return (
    <div className={classes.root}>
      <span>{t('code')}</span>
      <h1>{t('text')}</h1>
      <Link href={GENERAL_ROUTES.home}>
        <a className={classes.btn}>
          {t('buttons.home')}
        </a>
      </Link>
    </div>
  );
};

export default NotFoundView;
