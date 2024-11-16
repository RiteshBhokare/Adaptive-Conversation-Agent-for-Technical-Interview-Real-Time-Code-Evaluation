
export default function ErrorPage({ statusCode }) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }
  
  ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };