export function Code({ children }: { children: React.ReactNode }): JSX.Element {
  return <code style={{ color: 'green' }}>{children}</code>;
}

export function H1({ children }: { children: React.ReactNode }): JSX.Element {
  return <h1 style={{ fontSize: '42px' }}>{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }): JSX.Element {
  return <h2 style={{ fontSize: '34px' }}>{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }): JSX.Element {
  return <h3 style={{ fontSize: '21px' }}>{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }): JSX.Element {
  return <p style={{ fontSize: '17px' }}>{children}</p>;
}
