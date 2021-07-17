import { useCallback, useState } from 'react';

import "../UI/pages/Welcome.css";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export const Welcome = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleChange = useCallback(() => { setIsLoginView(!isLoginView) }, [isLoginView])

  return (
    <div className="centered-view">
      <div className="centered-container">
        {isLoginView ? <LoginForm /> : <RegisterForm />}
        {!isLoginView ?
          (
            <small className="form-text text-muted mt-2">Already registered?
              <span
                onClick={handleChange}
                className="pointer btn-link ml-2">Login</span>
            </small>
          )
          :
          (
            <small className="form-text text-muted mt-2">Not registered yet?
              <span
                onClick={handleChange}
                className="pointer btn-link ml-2">Register</span>
            </small>
          )
        }
      </div>
    </div>
  );
}