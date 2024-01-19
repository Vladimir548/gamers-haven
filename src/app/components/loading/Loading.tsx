import style from './style.module.scss';
export default function Loading() {
  return (
    <div>
      <div className={style.loader}>
        <span className={style.loader_text}>Loading...</span>
        <span className={style.load}></span>
      </div>
    </div>
  );
}
