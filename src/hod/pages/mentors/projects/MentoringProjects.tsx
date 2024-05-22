import React, { useMemo, useState } from "react";
import { BasicTabPanel, BasicTabs } from "../../../../shared/tabs/BasicTabs";
import MentoringProjectsList from "../../../../hod/components/projects/MentoringProjects/MentoringProjectsList";
import Header from "../../../../shared/Header/Header";
import useStyles from "./MentoringProjects.styles";
import MentoringStudents from "../../../../hod/components/projects/MentoringStudents/MentoringStudents";

export default function MentoringProjects() {
  const classes = useStyles();
  const tabLabels = ["Project Mentoring", "Student Mentoring"];
  const [value, setValue] = useState(1);

  const bread_crumbs = useMemo(() => {
    return {
      "Mentoring Projects": "/projects",
    };
  }, []);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
