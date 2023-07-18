import React from 'react';
import styled from 'styled-components';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      {error.status === 404 ? (
        <>
          <img src='/404-not-found.svg' alt='Not Found' />
          <h3>Ohh!!!!</h3>
          <p>We cannot seem to find page you are looking for</p>
        </>
      ) : (
        <h4>Something wrong occurred</h4>
      )}
      <Link to='/'>Go back to Home page</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-10);
  min-height: 100vh;
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default ErrorPage;
