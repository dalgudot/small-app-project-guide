export function H1({ children }: { children: React.ReactNode }): JSX.Element {
  return <h1 style={{ fontSize: '34px', fontWeight: '700' }}>{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }): JSX.Element {
  return <h2 style={{ fontSize: '22px', fontWeight: '600' }}>{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }): JSX.Element {
  return <h3 style={{ fontSize: '19px', fontWeight: '600' }}>{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }): JSX.Element {
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

export function Li({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <li
      style={{
        fontSize: '19px',
        fontWeight: '400',
        color: 'var(--g1)',
        lineHeight: '1.6',
      }}
    >
      {children}
    </li>
  );
}

export function BlockQuote({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <blockquote
      style={{
        fontSize: '19px',
        fontWeight: '400',
        color: 'var(--g1)',
        background: 'var(--g8)',
        borderLeft: '8px solid var(--g7)',
        padding: '8px 12px',
        borderRadius: '8px',
        margin: '8px 0',
      }}
    >
      {children}
    </blockquote>
  );
}

export function Code({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <code
      style={{
        fontSize: '17px',
        background: '#2a2828',
        border: '1px solid #3e3c3c',
      }}
    >
      {children}
    </code>
  );
}

export function HR({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <hr style={{ border: '1px solid var(--g7)', margin: '32px 0' }}>
      {children}
    </hr>
  );
}
