import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const LogIn = (props: any): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const history = useHistory();

  const handleSubmit = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ): void => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
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
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" value={email} onChange={handleEmail} />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <button onClick={handleSubmit}>Log In</button>
    </form>
  );
};

export default LogIn;
