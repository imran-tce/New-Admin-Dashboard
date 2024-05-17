import React, { useMemo, useState } from "react";
import useStyles from "./YearWiseBatches.styles";
import Header from "../../components/Header/Header";
import { BasicTabPanel, BasicTabs } from "../../shared/tabs/BasicTabs";
import Batches from "../../components/batches/Batches";
import { batches } from "../../dummy data/batches";

const TAB_LABELS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function YearWiseBatches() {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const bread_crumbs = useMemo(() => {
    return {
      "yearwise batch details": "/batches",
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
        tabLabels={TAB_LABELS}
      />
      <BasicTabPanel value={value} index={1}>
        <Batches batches={batches.filter(b => b.academic_year === 1 ) as any[] } />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <Batches batches={batches.filter(b => b.academic_year === 2 ) as any[] } />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={3}>
        <Batches batches={batches.filter(b => b.academic_year === 3 ) as any[] } />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={4}>
        <Batches batches={batches.filter(b => b.academic_year === 4 ) as any[] } />
      </BasicTabPanel>
    </div>
  );
}
