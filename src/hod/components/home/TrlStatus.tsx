import React, { useState } from "react";
import SelectInput from "../../../shared/select/SelectInput";
import VerticalBarChart from "../../../shared/charts/VerticalBarChart";
import faker from "faker";


const ACADEMIC_YEARS = ["All", "1st Year", "2nd Year", "3rd Year", "4th Year"];

const YEARS = ["2020-2024"];

export default function TrlStatus() {
  const [academic_year, set_academic_year] = useState(ACADEMIC_YEARS[0]);
  const [year, set_year] = useState(YEARS[0]);

  const handleChangeAcademicYear = (e: any) => {
    set_academic_year(e.target.value);
  };

  const handleChangeYear = (e: any) => {
    set_year(e.target.value);
  };


const labels = [
  "TRL 1",
  "TRL 2",
  "TRL 3",
  "TRL 4",
  "TRL 5",
  "TRL 6",
  "TRL 7",
  "TRL 8",
  "TRL 9",
];

const data = {
  labels,
  datasets: [
    {
      label: "Pending",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#FDC20F",
      // borderWidth: 10,
      // borderColor:"transparent",
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barThickness: 12,
      barPercentage: 0.5,
      categoryPercentage: 0.2,
    },
    {
      label: "Completed",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#050418",
      borderWidth: 0,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barThickness: 12,
      barPercentage: 0.5,
      categoryPercentage: 0.2,
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
        <SelectInput keys={YEARS} value={year} onChange={handleChangeYear} />

        <SelectInput
          keys={ACADEMIC_YEARS}
          value={academic_year}
          onChange={handleChangeAcademicYear}
        />
      </div>

      <div style={{ height: "300px",width:"100%", position:"absolute", bottom:0 }}>
        <VerticalBarChart chart_data={data} />
      </div>
    </div>
  );
}
