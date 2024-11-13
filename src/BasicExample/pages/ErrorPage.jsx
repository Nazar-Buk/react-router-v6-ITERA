import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // допомагає відловити помилки
  return (
    <div>
      <h1>OOOPS !</h1>
      <h1>Smth went wrong</h1>
      <h1>{error.statusText ?? error.message}</h1>
    </div>
  );
};

export default ErrorPage;
