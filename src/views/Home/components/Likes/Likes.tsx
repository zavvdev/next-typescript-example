import { useTranslation } from 'next-i18next';
import I18N_NAMESPACES from 'src/constants/i18nNamespaces';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectLikesAmount } from 'src/store/likes/selectors';
import { likesActions } from 'src/store/likes/slice';
import classes from 'src/views/Home/components/Likes/Likes.module.scss';

const Likes = () => {
  const dispatch = useAppDispatch();
  const likesAmount = useAppSelector(selectLikesAmount);
  const { t } = useTranslation(I18N_NAMESPACES.home);

  const handleLike = () => {
    dispatch(likesActions.increment());
  };

  return (
    <button
      type="button"
      className={classes.btn}
      onClick={handleLike}
    >
      {t('buttons.likes')}
      <span>{likesAmount}</span>
    </button>
  );
};

export default Likes;
