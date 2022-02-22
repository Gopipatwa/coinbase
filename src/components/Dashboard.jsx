import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  console.log(data);
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>

      <div className="chart-container">
        {/* <h2>{data}</h2> */}
        <Line data={data} />
      </div>
    </div>
  );
}

export default Dashboard;