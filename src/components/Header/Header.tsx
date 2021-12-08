import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import logo from 'src/assets/images/Logo.svg';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';
import classes from 'src/components/Header/Header.module.scss';
import LanguageSwitch from 'src/components/Header/components/LanguageSwitch/LanguageSwitch';

const Header = () => {
  const { t } = useTranslation(I18N_NAMESPACES.common);

  return (
    <header className={classes.root}>
      <Image
        height={40}
        width={75.5}
        src={logo}
        alt={t('appName')}
      />
      <LanguageSwitch />
    </header>
  );
};

export default Header;
