import React, { useState } from "react";
import SelectInput from "../../../shared/select/SelectInput";
import VerticalBarChart from "../../../shared/charts/VerticalBarChart";
import faker from "faker";


const SEMESTERS = ["1st sem","2nd sem","3rd sem","4th sem","5th sem","6th sem","7th sem","8th sem"];


export default function AcademicStatus() {
  const [sem, set_sem] = useState(SEMESTERS[0]);

  const handleChangeSem = (e: any) => {
    set_sem(e.target.value);
  };


const labels = [
  "MAT 101",
  "PHT 100",
  "CYT 100",
  "EST 100",
  "EST 110",
  "EST 120",
  "EST 130",
  "HUN 101",
];

const data = {
  labels,
  datasets: [
    {
      label: "Attendance",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#FDC20F",
      // borderWidth: 10,
      // borderColor:"transparent",
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barThickness: 12,
      barPercentage: 1,
      categoryPercentage: 0.5,
      
    },
    {
      label: "CIE",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#050418",
      borderWidth: 0,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barThickness: 12,
    },
    {
        label: "Assignment",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#182AD2",
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 12,
      },
  ],
} as any


  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "absolute",
          right: 5,
          top: 5,
        }}
      >
        <SelectInput keys={SEMESTERS} value={sem} onChange={handleChangeSem} />
      </div>

      <div style={{ height: "300px",width:"100%", position:"absolute", bottom:0 }}>
        <VerticalBarChart chart_data={data} />
      </div>
    </div>
  );
}
