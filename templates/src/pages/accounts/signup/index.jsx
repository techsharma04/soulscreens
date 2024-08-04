import "./style.css"
import { SignupComponent } from '../../../components/accounts/signupcomponent';

const Signup = () => {
  return (
    <div className='container-fluid account-bg'>
      <div className='account-row signup-row row'>
        <div className='account-col signup-col'>
          <SignupComponent />
        </div>
      </div>
    </div>
  );
};

export default Signup;
