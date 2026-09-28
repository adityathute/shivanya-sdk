export function PageContainer({ children, className = "", }) {
    return (<main className={`shivanya-page-container ${className}`.trim()}>
      {children}
    </main>);
}
