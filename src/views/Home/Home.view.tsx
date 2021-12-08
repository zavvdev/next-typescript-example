import { useTranslation } from 'next-i18next';
import Button from 'src/components/Button/Button';
import GitHubIcon from 'src/components/svg-icons/GitHubIcon/GitHubIcon';
import MainLayout from 'src/components/layouts/MainLayout/MainLayout';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';
import classes from 'src/views/Home/Home.module.scss';
import Likes from 'src/views/Home/components/Likes/Likes';

const HomeView = () => {
  const { t } = useTranslation([I18N_NAMESPACES.home, I18N_NAMESPACES.common]);

  return (
    <MainLayout>
      <div className={classes.root}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <div className={classes.buttonsWrap}>
          <Button
            target="_blank"
            href={t(`${I18N_NAMESPACES.common}:links.repository`)}
            icon={<GitHubIcon />}
          >
            {t('buttons.repository')}
          </Button>
          <Likes />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeView;
