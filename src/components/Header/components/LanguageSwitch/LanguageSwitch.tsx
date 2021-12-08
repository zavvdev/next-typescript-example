import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { APP_LANGUAGES } from 'src/constants';
import classes from 'src/components/Header/components/LanguageSwitch/LanguageSwitch.module.scss';

const LanguageSwitch = () => {
  const languages = Object.values(APP_LANGUAGES);
  const { locale, route } = useRouter();

  return (
    <div className={classes.root}>
      {languages.map((lang, index) => (
        <div className={classes.langWrap} key={lang}>
          <Link
            href={route}
            locale={lang}
          >
            <a className={cn(classes.lang, {
              [classes.active]: locale === lang,
            })}
            >
              {lang}
            </a>
          </Link>
          {index === 0 ? <span>|</span> : null}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitch;
