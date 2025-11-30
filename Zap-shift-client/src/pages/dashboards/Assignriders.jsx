import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../useHooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Assignriders = () => {
  const [selectedParcel,setSelectedParcel]=useState(null)
    const [modal, setModal] = useState(false);
    const useaxiosSecure=useAxiosSecure()
    const {data:status=[],refetch} = useQuery({
      queryKey: ["deliveryStatus", "pending-pickup"],
      queryFn:async ()=>{
const res = await useaxiosSecure.get(`/parcels?deliveryStatus=pending-pickup`);
/* console.log(res) */
return res.data
      }
    });
    
    const { data: riders = [] } = useQuery({
      queryKey: ["riders", selectedParcel?.senderDistrict, "available"],
      enabled: !!selectedParcel,
      queryFn: async () => {
        const res = await useaxiosSecure.get(
          `/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`
        );
        return res.data;
      },
    });
  
    const assignrider=(data)=>{
      setModal(true)
      setSelectedParcel(data)
    /*   console.log(data?.senderDistrict); */
    }
    const handleAssignRider=async(rider)=>{
      const riderInfo = {
        riderId: rider?._id,
        riderEmail: rider?.email,
        riderName: rider?.name,
        parcelId: selectedParcel?._id,
        trackingId: selectedParcel.trackingId,
      };
await useaxiosSecure.put(`/parcel/${selectedParcel?._id}`, riderInfo).then(res=>{
  if (res.data.modifiedCount) {
    refetch()
     setModal(false);
    Swal.fire({
      title: "order confirmed",
      text: "Rider Has been assigned",
      icon: "success",
    }); 
  }
})
    }
    /*  console.log("ada", selectedParcel);  */
    return (
      <div>
        ar {status.length}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>cost</th>
                <th>Created At</th>
                <th>PickUp District</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {status.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <td>{data?.parcelName}</td>
                  <td>{data?.cost}</td>
                  <td>{new Date(data?.createdAt).toLocaleString()}</td>
                  <td>{data?.senderDistrict}</td>

                  <td>
                    <button
                      onClick={() => assignrider(data)}
                      className="btn text-black font-semibold bg-primary px-4 py-3 rounded-md"
                    >
                      Assign Rider
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*  <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>*/}
          {modal && (
            <dialog className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Riders {riders.length}</h3>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Job</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riders.map((rider, index) => (
                        <tr>
                          <th>{index + 1}</th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img
                                    src={rider?.riderImage}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{rider?.name}</div>
                              </div>
                            </div>
                          </td>
                          <td>{rider?.workStatus}</td>
                          <td>
                            <button
                              onClick={() => handleAssignRider(rider)}
                              className="btn btn-primary text-black"
                            >
                              assign
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button onClick={() => setModal(false)} className="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    );
};

export default Assignriders;