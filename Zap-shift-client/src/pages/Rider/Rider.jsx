
import { useForm } from "react-hook-form";

import RIDER_IMG from "/agent-pending.png";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../useHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../useHooks/useAuth";
export default function Rider() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
      reset,
    } = useForm({
      mode: "onTouched",
    });
    const serviceCenter=useLoaderData();
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth()
const regions =serviceCenter.map(data=>data.region);
const  region = [... new Set(regions)];

const regionWatch = watch("region");

  const districtByregion=(region)=>{
 const filteredregion =serviceCenter.filter(data=>data.region === region)
 const district =filteredregion.map(data=>data.district)
 return district
  }

  const onSubmit = async (data) => {
const res = await axiosSecure.post("/riders", data);
    console.log("Submitted data:", data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          title: "Your Application Has Been Submitted",
          icon: "success",
          timer: 1500,
        });
      }

   reset(); 
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-neutral">Be a Rider</h2>
            <p className="text-sm text-muted mt-2">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>

            <hr className="my-6" />

            <h3 className="font-semibold mb-4">Tell us about yourself</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    disabled={true}
                    {...register("name")}
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    className={`input input-bordered w-full `}
                  />
                  {/* {errors.name && (
                    <p className="text-error text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )} */}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Yr age</span>
                  </label>
                  <input
                    type="number"
                    {...register("age", {
                      required: "Age is required",
                      valueAsNumber: true,
                      min: { value: 18, message: "Minimum age is 18" },
                      max: { value: 80, message: "Maximum age is 80" },
                    })}
                    placeholder="Yr age"
                    className={`input input-bordered w-full ${
                      errors.age ? "input-error" : ""
                    }`}
                  />
                  {errors.age && (
                    <p className="text-error text-sm mt-1">
                      {errors.age.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    disabled={true}
                    defaultValue={user?.email}
                    type="email"
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Your Email"
                    className={`input input-bordered w-full ${
                      errors.email ? "input-error" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Your Region</span>
                  </label>
                  <select
                    {...register("region", { required: "Select a region" })}
                    className={`select select-bordered w-full ${
                      errors.region ? "select-error" : ""
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your regions
                    </option>
                    {region.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </select>
                  {errors.region && (
                    <p className="text-error text-sm mt-1">
                      {errors.region.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Your District</span>
                  </label>
                  <select
                    {...register("district", { required: "Select a district" })}
                    className={`select select-bordered w-full ${
                      errors.district ? "select-error" : ""
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your district
                    </option>
                    {districtByregion(regionWatch).map((data) => (
                      <option value={data}>{data}</option>
                    ))}
                  </select>
                  {errors.district && (
                    <p className="text-error text-sm mt-1">
                      {errors.district.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Driving License</span>
                  </label>
                  <input
                    {...register("drivingLicense", {
                      required: "drivingLicense is required",
                    })}
                    placeholder="Your driving License"
                    className={`input input-bordered w-full ${
                      errors.drivingLicense ? "input-error" : ""
                    }`}
                  />
                  {errors.drivingLicense && (
                    <p className="text-error text-sm mt-1">
                      {errors.drivingLicense.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">NID No</span>
                  </label>
                  <input
                    {...register("nid", {
                      required: "NID is required",
                      minLength: { value: 6, message: "NID too short" },
                    })}
                    placeholder="NID"
                    className={`input input-bordered w-full ${
                      errors.nid ? "input-error" : ""
                    }`}
                  />
                  {errors.nid && (
                    <p className="text-error text-sm mt-1">
                      {errors.nid.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Contact</span>
                  </label>
                  <input
                    {...register("contact", {
                      required: "Contact is required",
                      pattern: {
                        value: /^\+?[0-9]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    placeholder="Contact"
                    className={`input input-bordered w-full ${
                      errors.contact ? "input-error" : ""
                    }`}
                  />
                  {errors.contact && (
                    <p className="text-error text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">
                    Which wire-house you want to work?
                  </span>
                </label>
                <select
                  {...register("warehouse", { required: "Select a warehouse" })}
                  className={`select select-bordered w-full ${
                    errors.warehouse ? "select-error" : ""
                  }`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select wire-house
                  </option>
                  <option>Central Warehouse</option>
                  <option>North Warehouse</option>
                  <option>South Warehouse</option>
                </select>
                {errors.warehouse && (
                  <p className="text-error text-sm mt-1">
                    {errors.warehouse.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full bg-lime-300 border-0 text-neutral hover:bg-lime-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Image / Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img
                src={RIDER_IMG}
                alt="Rider"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
