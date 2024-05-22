import React, { useState } from "react";
import useStyles from "./Broadcasts.styles";
import { Avatar, Button, Typography } from "@mui/material";
import { BasicTabPanel, BasicTabs } from "../../shared/tabs/BasicTabs";
import { broadcasts_list } from "../../dummy data/broadcasts";

const TAB_LABELS = ["Unread", "Read"];

export interface Broadcast {
  id: number;
  title: string;
  created_at: string;
  read: boolean;
}

export default function Broadcasts() {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [broadcasts, set_broadcasts] = useState<Broadcast[]>(broadcasts_list);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (id: number) => {
    let temp = [...broadcasts];
    temp.forEach((t) => {
      if (t.id === id) {
        t.read = true;
      }
    });
    set_broadcasts(temp);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Broadcasts</Typography>
        <Button variant="outlined" color="primary">
          + Create message
        </Button>
      </div>

      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={TAB_LABELS}
      />
      <BasicTabPanel value={value} index={1}>
        <div>
          {broadcasts
            .filter((item) => !item.read)
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((obj, index) => {
              return (
                <div key={obj.id} style={{ margin: "1rem 0" }}>
                  <Typography variant="BM14" sx={{ mb: 0.5 }}>
                    {new Date(obj.created_at).toLocaleDateString()}
                  </Typography>
                  <div className={classes.broadcastCard}>
                    <Avatar variant="square" src="P" alt="P" />
                    <Typography variant="BM14" color="#5D5C69">
                      {obj.title}
                    </Typography>

                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(obj.id)}
                    >
                      <Typography variant="BM14">OK</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <div>
          {broadcasts
            .filter((item) => item.read)
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((obj, index) => {
              return (
                <div key={obj.id} style={{ margin: "1rem 0" }}>
                  <Typography variant="BM14" sx={{ mb: 0.5 }}>
                    {new Date(obj.created_at).toLocaleDateString()}
                  </Typography>
                  <div className={classes.broadcastCard}>
                    <Avatar variant="square" src="P" alt="P" />
                    <Typography variant="BM14" color="#5D5C69">
                      {obj.title}
                    </Typography>
                  </div>
                </div>
              );
            })}
        </div>
      </BasicTabPanel>
    </div>
  );
}
