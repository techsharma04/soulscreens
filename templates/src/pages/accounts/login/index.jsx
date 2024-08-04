import { useEffect } from 'react';
import { LoginComponent } from '../../../components/accounts/logincomponent';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);
  return (
    <div className='container-fluid account-bg'>
      <div className='account-row signup-row row'>
        <div className='account-col signup-col'>
          <LoginComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
