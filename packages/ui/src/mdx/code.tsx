export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code style={{ color: 'green' }} className={className}>
      {children}
    </code>
  );
}
