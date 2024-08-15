import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ConfirmationCodeComponent } from '../../../components/accounts/confirmation-code';
import { CreateNewPasswordComponent } from '../../../components/accounts/create-new-password';


const CreateNewPassword = () => {

  const navigate = useNavigate();
  const {email} = useParams()
 
  return (
    <div className='container-fluid account-bg'>
      <div className='account-row signup-row row'>
        <div className='account-col signup-col'>
          <CreateNewPasswordComponent email={email} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
