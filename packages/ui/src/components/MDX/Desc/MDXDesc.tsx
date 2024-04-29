interface Props {
  children: React.ReactNode;
}

export function MDXDesc({ children }: Props) {
  return (
    <p
      style={{
        fontSize: '19px',
        fontWeight: '400',
        color: 'var(--g1)',
        lineHeight: '1.6',
      }}
    >
      {children}
    </p>
  );
}
