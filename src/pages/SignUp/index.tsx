import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import EmailPasswordForm from "../../components/EmailPasswordForm";

const SignUp = (): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const history = useHistory();

  const handleSubmit = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ): void => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/');
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <EmailPasswordForm
      handleSubmit={handleSubmit}
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
      buttonText="Sign Up"
    />
  );
};

export default SignUp;
