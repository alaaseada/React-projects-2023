import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import not_found from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <div>
        {error.status == 404 && (
          <>
            <img src={not_found} alt='not-found' />
            <h3>Ohh!!!!</h3>
            <p>We can't seem to find page you are looking for</p>
          </>
        )}
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
