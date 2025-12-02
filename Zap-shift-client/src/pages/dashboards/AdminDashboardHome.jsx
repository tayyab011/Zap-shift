import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../useHooks/useAxios';
import { Legend, Pie, PieChart, Tooltip } from "recharts";
const AdminDashboardHome = () => {
    const useaxios=useAxios()
    const { data: deliveryStatus = [] } = useQuery({
      queryKey: ["delivery-status"],
      queryFn: async () => {
        const res =await useaxios.get(`/parcels/delivery-status/states`);

        return res.data;
      },
    });
  /*   console.log("as",deliveryStatus); */
  const getpidatadata=(data)=>{
return data.map(items=>{
 return {name:items.status,value:items.count}
})
  }
    return (
      <>
        <div className="flex justify-center items-center ">
          <div className="stats shadow py-5">
            {deliveryStatus?.map((data, i) => (
              <div key={i} className="stat place-items-center">
                <div className="stat-title font-bold text-base">
                  {data?._id}
                </div>
                <div className="stat-value">{data?.count}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12  mx-auto ">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 2,
            }}
            responsive
          >
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={getpidatadata(deliveryStatus)}
              cx="50%"
              cy="100%"
              outerRadius="120%"
              fill="#8884d8"
              label
              isAnimationActive={true}
            />
            <Legend></Legend>
            <Tooltip/>
          </PieChart>
        </div>
      </>
    );
};

export default AdminDashboardHome;