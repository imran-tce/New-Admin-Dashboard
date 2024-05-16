import React, { useMemo, useState } from "react";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import MentoringProjectsList from "../../../components/projects/MentoringProjects/MentoringProjectsList";
import Header from "../../../components/Header/Header";
import useStyles from "./MentoringProjects.styles";
import MentoringStudents from "../../../components/projects/MentoringStudents/MentoringStudents";


export default function MentoringProjects() {
  const classes=useStyles()
  const tabLabels = ["Project Mentoring", "Student Mentoring"];
  const [value, setValue] = useState(2);

  const bread_crumbs = useMemo(() => {
    return {
      "Mentoring Projects":"/projects",
    };
  }, []);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
    <Header title="Mentoring Projects" bread_crumbs={bread_crumbs} />
    <div>
      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={tabLabels}
      />
    </div>
    <BasicTabPanel value={value} index={1}>
      <MentoringProjectsList />
    </BasicTabPanel>
    <BasicTabPanel value={value} index={2}>
      <MentoringStudents />
    </BasicTabPanel>
  </div>



   
  );
}
