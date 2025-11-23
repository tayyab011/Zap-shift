import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../useHooks/useAxiosSecure";
import useAuth from "../../useHooks/useAuth";

const SendParcel = () => {
  const navigate=useNavigate()
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
      const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const serviceCenters=useLoaderData();
    const duplicateRegions = serviceCenters.map((c) => c.region);
    const regions=[ ...new Set(duplicateRegions)];

  const senderRegion = watch("senderRegion");
  const reciverRegion = watch("reciverRegion");

    const districtByRegion=region=>{
        const regionDistrict=serviceCenters.filter(c=>c.region===region);
        console.log("data district region",regionDistrict)
        const districts=regionDistrict.map(r=>r.district);
        return districts;
    }


  const onSendParcelSubmit = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "Document";
    const samedistrict = data.senderDistrict === data.reciverDistrict;
    const parceWeight = parseFloat(data.parcelWeight);
    let cost=0;
    if (isDocument) {
        cost = samedistrict ?60:80;
    }else{
if (parceWeight<3) {
     cost = samedistrict ? 110 : 150;
}else{
 let minCharge = samedistrict ? 110 : 150;
 let extraWeight = parceWeight-3;
 let extraCharge = samedistrict ? (extraWeight * 40) : (extraWeight * 40) + 40;
 cost = minCharge + extraCharge;
}
    }


data.cost=cost;
console.log(data)
Swal.fire({
  title: "Agree With the Cost?",
  text: ` You  will be charged ${cost} Taka`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "confirem and continue payment",
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.post("/parcels", data).then(res=>{
        console.log("after sending",res.data)
      if (res.data.insertedId) {
        navigate("/dashboard/mypercels");
         Swal.fire({
           position :"top-end",
           title: "order confirmed",
           text: "Your order has been confirmed",
           icon: "success",
           timer:1500,
         });
      }
    }).catch(err=>console.log(err))
 /*    
    Swal.fire({
      title: "order confirmed",
      text: "Your order has been confirmed",
      icon: "success",
    }); */
  }
});

    console.log(isDocument, samedistrict, cost);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Send A Parcel
      </h2>
      <p className="text-sm text-gray-500 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(onSendParcelSubmit)} className="space-y-6">
        {/* Parcel Type */}
        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2">
            <input
              id="document"
              type="radio"
              value="Document"
              {...register("parcelType", { required: true })}
              className="radio checked:bg-green-500"
            />
            <label htmlFor="document">Document</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="not-document"
              type="radio"
              value="Not-Document"
              {...register("parcelType", { required: true })}
              className="radio checked:bg-green-500"
            />
            <label htmlFor="not-document">Not-Document</label>
          </div>
        </div>

        {/* Parcel Details */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parcel Name
            </label>
            <input
              type="text"
              placeholder="Parcel Name"
              {...register("parcelName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              {...register("parcelWeight", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-2 gap-6">
          {/* Sender */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Sender Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender Name
              </label>
              <input
                type="text"
                disabled={true}
                defaultValue={user?.displayName}
                placeholder="Sender Name"
                {...register("senderName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender Email
              </label>
              <input
                type="text"
                disabled={true}
                defaultValue={user?.email}
                placeholder="Sender Name"
                {...register("senderEmail", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender Address
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("senderAddress", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender Phone No
              </label>
              <input
                type="text"
                placeholder="Sender Phone No"
                {...register("senderPhone", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender Region
              </label>
              <select
                {...register("senderRegion", { required: true })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your sender Region
                </option>
                {regions.map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender District
              </label>

              <select
                {...register("senderDistrict", { required: true })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your sender District
                </option>
                {districtByRegion(senderRegion).map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Instruction
              </label>
              <textarea
                placeholder="Pickup Instruction"
                {...register("pickupInstruction")}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>

          {/* Receiver */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Receiver Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver Name
              </label>
              <input
                type="text"
                placeholder="Receiver Name"
                {...register("receiverName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver Email
              </label>
              <input
                type="text"
                placeholder="Receiver Email"
                {...register("receiverEmail", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver Address
              </label>
              <input
                type="text"
                placeholder="Receiver Address"
                {...register("receiverAddress", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver Contact No
              </label>
              <input
                type="text"
                placeholder="Receiver Contact No"
                {...register("receiverPhone", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver Region
              </label>
              <select
                {...register("reciverRegion", { required: true })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your sender Region
                </option>
                {regions.map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Receiver District
              </label>
              <select
                {...register("reciverDistrict", { required: true })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your sender District
                </option>
                {districtByRegion(reciverRegion).map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Instruction
              </label>
              <textarea
                placeholder="Delivery Instruction"
                {...register("deliveryInstruction")}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500">* Pickup Time 4pm-7pm Approx.</p>

        {/* Submit */}
        <button
          type="submit"
          className="btn bg-lime-400 hover:bg-lime-500 text-black border-none"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
