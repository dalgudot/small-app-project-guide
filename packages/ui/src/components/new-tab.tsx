export const NewTab = ({
  children,
  href,
}: {
  children: JSX.Element;
  href: string;
}) => {
  return (
    <a href={href} target='_blank'>
      {children}
    </a>
  );
};
