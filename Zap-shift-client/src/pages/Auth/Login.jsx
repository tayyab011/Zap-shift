import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../useHooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {
     const { signinUser } = useAuth();
      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handlerLoginSubmit=(data)=>{
signinUser(data.email, data.password)
  .then((res) => {
    console.log(res.user);
  })
  .catch((err) => {
    console.log(err);
  });
  }
    return (
      <div className= "">
        <form onSubmit={handleSubmit(handlerLoginSubmit)}>
          <fieldset className="fieldset bg-base-200 mx-auto border-base-300  md:w-8/12 w-full rounded-box  border  p-4 ">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={}\[\]|:;'"<>,.?/~`]).+$/,
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                password must be 6 characters or longer
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain at least 1 uppercase, 1 lowercase, and 1
                special character
              </p>
            )}
            <button className="btn btn-neutral mt-4">Login</button>
            <SocialLogin />
            <p>
              new to ZaoShift?{" "}
              <Link className="underline" to="/registration">
                Register Now
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    );
};

export default Login;