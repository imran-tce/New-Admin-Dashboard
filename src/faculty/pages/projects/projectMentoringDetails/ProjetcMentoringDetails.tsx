import React, { useEffect, useState } from "react";
import Header from "../../../../shared/Header/Header";
import useStyles from "./ProjetcMentoringDetails.styles";
import { BasicTabPanel, BasicTabs } from "../../../../shared/tabs/BasicTabs";
import { useNavigate, useParams } from "react-router-dom";
import { projects_list } from "../../../../dummy data/projects";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { students_list } from "../../../../dummy data/students";
import CheckIcon from "@mui/icons-material/Check";

export default function ProjetcMentoringDetails() {
  const { projectId }: any = useParams();
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const tabLabels = ["Team Details", "Task Updates and Review"];
  const [project, set_project] = useState<any>({} as any);
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      const temp = projects_list.find((obj) => obj.id == projectId);
      if (temp?.id) set_project(temp);
    }
  }, [projectId]);

  const handleClick = (id: string) => {
    navigate(`/students/${id}`);
  };

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <Typography variant="h2" sx={{ m: "1.5rem 0" }}>
        {project?.title}
      </Typography>
      <div>
        <BasicTabs
          value={value}
          handleChangeTab={handleChangeTab}
          tabLabels={tabLabels}
        />
      </div>
      <BasicTabPanel value={value} index={1}>
        <div style={{ margin: "2rem 0" }}>
          <Typography variant="BSb14" sx={{ fontSize: "20px" }}>
            Team Members
          </Typography>
          <div className={classes.container} style={{ marginBottom: "2rem" }}>
            {students_list.slice(0, 4).map((student) => {
              return (
                <div
                  key={student.id}
                  onClick={() => handleClick(student.id)}
                  className={classes.studentCard}
                >
                  <Avatar variant="square" src={student?.photo_url} alt="" />
                  <div className={classes.studentDetails}>
                    <h5>{student.user_meta?.display_name || student?.name} </h5>
                    <Typography variant="BR14" color="#797979">
                      {student.user_meta?.branch}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <Typography variant="BSb14" sx={{ fontSize: "20px", mt: "3rem" }}>
            TRL
          </Typography>
          <div className={classes.trlTable}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>TRL Level </TableCell>
                  {[...Array(9)].map((_, index) => {
                    return (
                      <TableCell key={index}>
                        <Typography variant="h3" sx={{ fontSize: "14px" }}>
                          T{index + 1}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Progress </TableCell>
                  {[...Array(9)].map((_, index) => {
                    return (
                      <TableCell key={index}>
                        {index + 1 < 3 ? <CheckIcon color="success" /> : ""}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <div className={classes.taskUpdateTable} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="BSb14" sx={{ fontSize: "1rem" }}>
                    Parameters
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14" sx={{ fontSize: "1rem" }}>
                    Task
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14" sx={{ fontSize: "1rem" }}>
                    Description
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14" sx={{ fontSize: "1rem" }}>
                    Add Remark
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="BR14">Problem Statement</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">Clarity of the Problem</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    What is the clarity of the team on the Problem statement
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    Outstanding performance! The team's tech project delivery
                    exceeded expectations. Seamless integration, innovative
                    solutions, and flawless execution. Kudos to the entire team
                    for their dedication and expertise!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR14">Problem Statement</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">Clarity of the Problem</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    What is the clarity of the team on the Problem statement
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    Outstanding performance! The team's tech project delivery
                    exceeded expectations. Seamless integration, innovative
                    solutions, and flawless execution. Kudos to the entire team
                    for their dedication and expertise!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR14">Problem Statement</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">Clarity of the Problem</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    What is the clarity of the team on the Problem statement
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    Outstanding performance! The team's tech project delivery
                    exceeded expectations. Seamless integration, innovative
                    solutions, and flawless execution. Kudos to the entire team
                    for their dedication and expertise!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR14">Problem Statement</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">Clarity of the Problem</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    What is the clarity of the team on the Problem statement
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    Outstanding performance! The team's tech project delivery
                    exceeded expectations. Seamless integration, innovative
                    solutions, and flawless execution. Kudos to the entire team
                    for their dedication and expertise!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR14">Problem Statement</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">Clarity of the Problem</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    What is the clarity of the team on the Problem statement
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="BR14">
                    Outstanding performance! The team's tech project delivery
                    exceeded expectations. Seamless integration, innovative
                    solutions, and flawless execution. Kudos to the entire team
                    for their dedication and expertise!
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </BasicTabPanel>
    </div>
  );
}
