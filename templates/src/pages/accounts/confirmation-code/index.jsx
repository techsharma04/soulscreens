import { useEffect } from 'react';
import { LoginComponent } from '../../../components/accounts/logincomponent';
import { useNavigate, useParams } from 'react-router-dom';
import { ForgotPasswordComponent } from '../../../components/accounts/forgot-password';
import { ConfirmationCodeComponent } from '../../../components/accounts/confirmation-code';


const ConfirmationCode = () => {

  const navigate = useNavigate();
  const{email} = useParams();
  
  return (
    <div className='container-fluid account-bg'>
      <div className='account-row signup-row row'>
        <div className='account-col signup-col'>
          <ConfirmationCodeComponent email={email}/>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCode;
