import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./MentoringProjectsList.styles";
import { IProject } from "../../../../../skill-ed-web/src/supabaseServices/extraModels";
import { projects_list } from "../../../dummy data/projects";
import ProjectCardMenu from "../projectCardMenu/ProjectCardMenu";
import Text from "../../../shared/texts/Text";

export default function MentoringProjectsList() {
  const classes = useStyles();
  const [projects, set_projects] = useState<IProject[]>([]);
  const [project, set_project] = useState<IProject>({} as IProject);
  const [selected_project, set_selected_project] = useState<IProject>(
    {} as IProject
  );
  const [anchor_el, set_anchor_el] = useState<null | HTMLElement>(null);
  const [loading, set_loading] = useState(false);

  useEffect(() => {
    set_loading(true);
    setTimeout(() => {
      set_projects(projects_list);
      set_loading(false);
    }, 1500);
  }, []);

  const handleMenuClick = (e: any, project: IProject) => {
    set_anchor_el(e.currentTarget);
    set_selected_project(project);
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Grid sx={{ padding: 0 }} component="ul" container spacing={4}>
        {projects
          .sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1))
          .map((collection, index: number) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    ":hover": { boxShadow: "none" },
                    border: "1px solid #000",
                    borderRadius: "10px",
                  }}
                  className={`${classes.card} ${classes.rootLearnCard} `}
                >
                  {collection.status === "published" ? (
                    <>
                      <div
                        className={classes.dotMenuIcon}
                        onClick={(e: any) => handleMenuClick(e, collection)}
                      >
                        <img src="/vertical_dots.svg" />
                      </div>
                    </>
                  ) : collection.status === "unpublished" ? (
                    <div className={classes.cardMenuContainer}>
                      <div className={classes.label}>
                        <Typography variant="body2" color="primary">
                          Unpublished
                        </Typography>
                      </div>
                      <div
                        className={classes.dotMenuIcon}
                        onClick={(e: any) => handleMenuClick(e, collection)}
                      >
                        <img src="/vertical_dots.svg" />
                      </div>
                    </div>
                  ) : (
                    <div className={classes.label}>
                      <Typography variant="body2" color="primary">
                        Draft
                      </Typography>
                    </div>
                  )}

                  <CardActionArea sx={{ ":hover": { background: "#fff" } }}>
                    <div className={classes.headingContainer}>
                      <div>
                        {collection.problemStatement?.sectors &&
                          collection.problemStatement?.sectors?.length > 0 && (
                            <Typography
                              key={index}
                              variant="body2"
                              color="secondary"
                              align="left"
                            >
                              {collection.problemStatement?.sectors[0]}
                            </Typography>
                          )}
                      </div>
                    </div>

                    <div className={classes.mediaContainer}>
                      <img
                        src={`${collection?.thumbnail}`}
                        width="348"
                        height="196"
                      />
                    </div>
                    <CardContent
                      className={classes.cardContent}
                      style={{ background: "#FFF" }}
                    >
                      <h5>{collection.title}</h5>
                      <Text variant="body4" color="rgba(0, 0, 0, 0.5)">
                        Team Name{" "}
                      </Text>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ mb: "0.2rem" }}>
                    <img src="/user.svg" alt="" />
                    <Text variant="body5" color="#000">
                      {" "}
                      {index + 2} Students{" "}
                    </Text>
                  </CardActions>

                  <ProjectCardMenu
                    selected_project={selected_project}
                    anchorEl={anchor_el}
                    callback={(anchorEl) => {
                      set_anchor_el(anchorEl);
                    }}
                  />
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
