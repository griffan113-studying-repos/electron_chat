import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { register as registerUser } from '../../redux/actions/auth';

type Inputs = {
  email: string,
  username: string,
  password: string,
  avatar: string,
}

export const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const dispatch = useDispatch()

  const onSubmit = useCallback((data: Inputs) => {
    dispatch(registerUser(data))
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
      <div className="header">Create an account</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            {...register("username")}
            type="text"
            name="username"
            className="form-control"
            id="username"
            aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            {...register("avatar")}
            type="text"
            name="avatar"
            className="form-control"
            id="avatar"
            aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            name="password"
            type="password"
            className="form-control"
            id="password" />
        </div>
        {false && <div className="alert alert-danger small">Some Error</div>}
        <button type="submit" className="btn btn-outline-primary">Register</button>
      </div>
    </form>
  );
}