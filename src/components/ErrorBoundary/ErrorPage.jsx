import ErrorBoundary from "./ErrorBoundary";
import { Helmet } from "react-helmet-async";

function Greeting({ subject }) {
  if(!subject){
    throw new Error("cannot read properties of undefined")
  }
  return <div>Hello {subject.toUpperCase()}</div>;
}

export default function ErrorPage() {
  return (
    <>
    <Helmet>
    <title>Error page</title>
    <meta name="description" content='error profile'/>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <link rel="canonical" href="/error" />
   </Helmet>
    <div className="errorpage">
      <div className="error">
        <ErrorBoundary>
          <Greeting />
        </ErrorBoundary>
      </div>
    </div>
    </>
  );
}
