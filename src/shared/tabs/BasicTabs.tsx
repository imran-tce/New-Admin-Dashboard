import { Box, Tab, Tabs, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabsContainer: {
      width: "100%",
      textAlign: "left",
      margin: 0,
      "& .MuiTabs-root": {
        background: "#FFF",
        "& .MuiTab-root": {
          textTransform: "capitalize",
          fontSize: "14px",
          fontFamily: "SF Pro Display Bold",
        },
      },
    },
  })
);

interface BasicTabPanelProps {
  children?: JSX.Element;
  index: number;
  value: number;
}

export function BasicTabPanel(props: BasicTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={2} >
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

interface BasicTabProps {
  value: number;
  handleChangeTab: (_event: React.ChangeEvent<{}>, newValue: number) => void;
  tabLabels: string[];
  tabColor?: string;
  full_width?: boolean;
}

export function BasicTabs({
  value,
  handleChangeTab,
  tabLabels,
  tabColor,
  full_width = false,
}: BasicTabProps) {
  const classes = useStyles();

  const getActiveTabColors = (tabIndex: number) => {
    return value === tabIndex ? "#19184a" : "rgba(25,24,74,0.4)";
  };

  return (
    <div className={classes.tabsContainer}>
      <Tabs
        variant={full_width ? "fullWidth" : "standard"}
        value={value}
        onChange={handleChangeTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: tabColor ? tabColor : "#FDC20F",
            height:"3px"
          },
        }}
        style={{ height: 0 }}
        sx={{
          color: "red",
          padding: "-1rem",
        }}
      >
        {tabLabels.map((label: string, index: number) => {
          const activeColor = getActiveTabColors(index + 1);
          return (
            <Tab
              sx={{
                color: activeColor,
              }}
              label={label}
              value={index + 1}
            />
          );
        })}
      </Tabs>
    </div>
  );
}
