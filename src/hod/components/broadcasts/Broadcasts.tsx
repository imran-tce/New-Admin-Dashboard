import React, { useState } from "react";
import useStyles from "./Broadcasts.styles";
import { Avatar, Button, Drawer, IconButton, Typography } from "@mui/material";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import { broadcasts_list } from "../../../dummy data/broadcasts";
import { Form, Formik } from "formik";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextInput from "../../../shared/formComponents/TextInput";

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
  const [open, set_open] = React.useState(false);

  const initial_values = {
    title: "",
    description: "",
    via_mail: "",
    via_group: "",
    send_type: "",
  };

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

  const toggleDrawer = (newOpen: boolean) => () => {
    set_open(newOpen);
  };

  const handleSubmit = () => {
    set_open(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Broadcasts</Typography>
        <Button variant="outlined" color="primary" onClick={toggleDrawer(true)}>
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

      <div>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{ width: "500px" }}
          classes={{
            paper: classes.formContainer,
          }}
        >
          <div
            style={{ width: "100%", textAlign: "right", marginBottom: "2rem" }}
            onClick={() => set_open(false)}
          >
            <IconButton sx={{ background: "#dedede" }}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Create Message{" "}
          </Typography>
          <Formik initialValues={initial_values} onSubmit={handleSubmit}>
            <Form className={classes.form}>
              <TextInput label="Broadcast Title" name="title" />
              <TextInput name="description" label="Description" />
              <TextInput name="via_mail" label="Via Mail (optinal)" />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => set_open(false)}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Create Alert
                </Button>
              </div>
            </Form>
          </Formik>
        </Drawer>
      </div>
    </div>
  );
}
