import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../../components/header';
import './style.css';
import { useEffect } from 'react';
import { fetchProfile } from '../../../redux/action/FetchProfileAction';
import { useParams } from 'react-router-dom';
import dummy from '../../../assets/images/dummy.png'

const Profile = () => {
    const { email } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.users)

    useEffect(() => {
        dispatch(fetchProfile(email));
    }, [dispatch, email]);

    return (
        <div className="container-fluid profile-container dark-mode">
            <Header />
            <div className="profile-banner">
                <div className="profile-details">
                    <div className="profile-heading">
                        <h1 className="profile-title">Profile</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
