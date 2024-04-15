import s from './FigureCaption.module.css';

export function FigureCaption({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) {
  return (
    <figure className={s.figure}>
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
