import { useEffect } from 'react';
import { LoginComponent } from '../../../components/accounts/logincomponent';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordComponent } from '../../../components/accounts/forgot-password';


const ForgotPassword = () => {

  const navigate = useNavigate();

 
  return (
    <div className='container-fluid account-bg'>
      <div className='account-row signup-row row'>
        <div className='account-col signup-col'>
          <ForgotPasswordComponent />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
