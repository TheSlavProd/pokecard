import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const StatDiagram = ({
  statHP,
  statHP_V,
  statAttack,
  statAttack_V,
  statDefense,
  statDefense_V,
  statSpecAttack,
  statSpecAttack_V,
  statSpecDef,
  statSpecDef_V,
  statSpeed,
  statSpeed_V,
}: any) => {
  const data = [
    { name: statHP, uv: statHP_V },
    { name: statAttack, uv: statAttack_V },
    { name: statDefense, uv: statDefense_V },
    { name: statSpecAttack, uv: statSpecAttack_V },
    { name: statSpecDef, uv: statSpecDef_V },
    { name: statSpeed, uv: statSpeed_V },
  ];

  return (
    <>
      <BarChart width={800} height={300} data={data}>
        {/* TODO: store colors in constants */}
        <XAxis dataKey="name" stroke="#850101" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#00ff80" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#0ba718" barSize={30} />
      </BarChart>
    </>
  );
};
