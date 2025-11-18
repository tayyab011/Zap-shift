import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../useHooks/useAuth";
import { Link, useLocation } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const location=useLocation()
  console.log(location)
  const { registerUger, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration=(data)=>{
console.log("After",data.photo[0])
const photo=data.photo[0]
registerUger(data.email,data.password).then(res=>{
  console.log(res.user);

  /* 1 store image  IN FORM DATA*/

  const formData = new FormData();
  formData.append("image", photo);

  /* 2 send the photo and get uri*/
  axios
    .post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`,
      formData
    )
    .then((res) => {
      console.log("after img upld", res.data.data.url);
      const userprofile = {
        displayName: data.name,
        photoURL: res.data.data.url,
      };
      /* 3 firebase e uri ta diye photoURL upload kroa*/
      updateUser(userprofile)
        .then((res) => console.log("after img upld", res))
        .catch((err) => console.log(err));
    });
}).catch(err=>{
  console.log(err)
})
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Register</legend>
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">name is required</p>
          )}

          {/*  photo  */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="input w-full cursor-pointer"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">photo is required</p>
          )}
          <label className="label">Email</label>
          <input
            type="text"
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
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <SocialLogin />
          <p>
            already Have an account to ZaoShift?{" "}
            <Link state={location.state} className="underline" to="/login">
              Login Now
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
