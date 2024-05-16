import {
  Box,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabsContainer: {
      width: "100%",
      textAlign: "left",
      margin: "2rem 0",
      "& .MuiTabs-root": {
        background: "#FFF",
        "& .MuiTab-root": {
          textTransform: "capitalize",
          fontWeight: 700,
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
        <Box p={3}>
          <Typography>{children}</Typography>
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
          style: { backgroundColor: tabColor ? tabColor : "#19184a" },
        }}
      >
        {tabLabels.map((label: string, index: number) => {
          const activeColor = getActiveTabColors(index + 1);
          return (
            <Tab
              fullWidth={full_width}
              label={
                <Typography
                  variant="body1"
                  style={{ color: activeColor, margin: 0, fontWeight: 700 }}
                >
                  {label}
                </Typography>
              }
              value={index + 1}
            />
          );
        })}
      </Tabs>
    </div>
  );
}
