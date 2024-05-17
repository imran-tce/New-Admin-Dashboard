import React, { useMemo, useState } from "react";
import useStyles from "./Courses.styles";
import Header from "../../components/Header/Header";
import { BasicTabPanel, BasicTabs } from "../../shared/tabs/BasicTabs";
import Batches from "../../components/batches/Batches";
import { batches } from "../../dummy data/batches";
import SelectInput from "../../shared/select/SelectInput";
import { Button } from "@mui/material";

const SEMESTERS_LIST = [
  "Sem 1",
  "Sem 2",
  "Sem 3",
  "Sem 4",
  "Sem 5",
  "Sem 6",
  "Sem 7",
  "Sem 8",
];

const COURSE_TYPES = ["Theory", "Practical"];
const COURSE_ACTIVENESS = ["Active Courses", "Inactive Course"];

export default function Courses() {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [course_type, set_course_type] = useState(COURSE_TYPES[0]);
  const [course_activeness, set_course_activeness] = useState(
    COURSE_ACTIVENESS[0]
  );

  const bread_crumbs = useMemo(() => {
    return {
      Courses: "/courses",
    };
  }, []);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Header title="Yearwise Batch details" bread_crumbs={bread_crumbs} />
      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={SEMESTERS_LIST}
      />

      <div className={classes.filterContainer}>
        <SelectInput
          value={course_type}
          onChange={(e) => set_course_type(e.target.value)}
          keys={COURSE_TYPES}
        />
        <SelectInput
          value={course_activeness}
          onChange={(e) => set_course_activeness(e.target.value)}
          keys={COURSE_ACTIVENESS}
        />

        <Button variant="contained" color="primary" sx={{height:40}} >
            Create Subject
        </Button>
      </div>

      <BasicTabPanel value={value} index={1}>
        <Batches
          batches={batches.filter((b) => b.semester === 1) as any[]}
        />
      </BasicTabPanel>
    </div>
  );
}
