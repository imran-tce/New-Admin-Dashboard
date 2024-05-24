import React, { useMemo, useState } from "react";
import useStyles from "./YearWiseBatches.styles";
import Header from "../../../shared/Header/Header";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import Batches from "../../components/batches/Batches";
import { engineering_courses } from "../../../dummy data/engineering_courses";

const TAB_LABELS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function YearWiseBatches() {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const bread_crumbs = useMemo(() => {
    return {
      Batches: "/batches",
    };
  }, []);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Header title="My Batches" bread_crumbs={bread_crumbs} />
      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={TAB_LABELS}
      />
      <BasicTabPanel value={value} index={1}>
        <Batches courses={engineering_courses.filter((b) => b.year === 1)} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <Batches courses={engineering_courses.filter((b) => b.year === 2)} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={3}>
        <Batches courses={engineering_courses.filter((b) => b.year === 3)} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={4}>
        <Batches courses={engineering_courses.filter((b) => b.year === 4)} />
      </BasicTabPanel>
    </div>
  );
}
