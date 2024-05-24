import React, { useEffect, useState } from "react";
import { CourseTempNew } from "../../../../models/devModels";
import useStyles from "./CourseOverview.styles";
import { Avatar, Typography } from "@mui/material";
import { ClassSharp } from "@material-ui/icons";

interface Props {
  course: CourseTempNew;
}

interface Chapter {
  title: string;
}
interface Unit {
  title: string;
}

export default function CourseOverview({ course }: Props) {
  const classes = useStyles();
  const [selected_chapter, set_selected_chapter] = useState("");
  const [selected_unit, set_selected_unit] = useState("");
  const [unit_index, set_unit_index] = useState(1);

  useEffect(() => {
    if (course && course?.units?.length > 0) {
      set_selected_chapter(course?.units[0]?.title);
      set_selected_unit(course?.units[0]?.modules[0]?.title);
    }
  }, [course]);

  const handleUnitClick = (chapter: string, unit: string, index: number) => {
    set_selected_chapter(chapter);
    set_selected_unit(unit);
    set_unit_index(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.navigationBar}>
        {course?.units?.map((unit, index) => {
          return (
            <div className={classes.navigationCard}>
              <Typography variant="BSb14" fontSize="12px" sx={{ mb: "13px" }}>
                Chapter {index + 1}{" "}
              </Typography>
              <Typography variant="BSb14" sx={{ mb: "0.5rem" }}>
                {unit.title}{" "}
              </Typography>
              {unit.modules.map((module, j) => {
                return (
                  <div
                    className={classes.unitContainer}
                    onClick={() =>
                      handleUnitClick(unit.title, module.title, j + 1)
                    }
                    style={{background:module.title === selected_unit && j+1 === unit_index ? "#585764" : "initial"  }}
                  >
                    <div className={classes.unit}>
                      <Typography variant="h3" fontSize={"10px"}>
                        U{j + 1}
                      </Typography>
                    </div>

                    <Typography
                      sx={{
                        fontFamily: ["SF Pro Display Light", "sans-serif"].join(
                          ","
                        ),
                        fontSize: "12px",
                      }}
                    >
                      {module.title}{" "}
                    </Typography>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={classes.courseDetails}>
        <Typography variant="h3">{selected_chapter} </Typography>

        <div className={classes.unitTitle}>
          <div className={classes.uitTitle1}>
            <Typography variant="BSb14">U{unit_index}</Typography>
          </div>

          <Typography variant="BSb14" fontSize="16px">
            {selected_unit}{" "}
          </Typography>
        </div>

        <Typography variant="BR14" color="#3d3d3d" sx={{ mb: 3 }}>
          With over seven years of experience, I have worked across multiple
          products. I graduated from Srishti School of Art Design and Technology
          after which I went on to work with Akasa labs where the role was of an
          end-to-end designer. Soon I moved to babajob a job marketplace for
          blue-collar workers where my journey of becoming a UX UI designer
          truly began. After which I worked at NDTV Worldwide which looked at
          providing a suite of apps to hospitals, patients, and paramedics.
          Where I had the pleasure of working with hospitals like Moolchand
          Medcity and Columbia Asia. Most recent was my experience with
          Mycujoo.tv in Amsterdam which gave me not only exposure to the
          workings of an International multilingual team but also a vast variety
          of users as the platform looked at the streaming of football matches.
          Currently I am working at YUJ Designs with client interaction at TATA
          Motors and Honeywell.
        </Typography>

        <Typography variant="BR14"  color="#3d3d3d" sx={{ mb: 3 }}>
          With over seven years of experience, I have worked across multiple
          products. I graduated from Srishti School of Art Design and Technology
          after which I went on to work with Akasa labs where the role was of an
          end-to-end designer. Soon I moved to babajob a job marketplace for
          blue-collar workers where my journey of becoming a UX UI designer
          truly began. After which I worked at NDTV Worldwide which looked at
          providing a suite of apps to hospitals, patients, and paramedics.
          Where I had the pleasure of working with hospitals like Moolchand
          Medcity and Columbia Asia. Most recent was my experience with
          Mycujoo.tv in Amsterdam which gave me not only exposure to the
          workings of an International multilingual team but also a vast variety
          of users as the platform looked at the streaming of football matches.
          Currently I am working at YUJ Designs with client interaction at TATA
          Motors and Honeywell.
        </Typography>

        <Typography variant="BR14"  color="#3d3d3d" sx={{ mb: 3 }}>
          With over seven years of experience, I have worked across multiple
          products. I graduated from Srishti School of Art Design and Technology
          after which I went on to work with Akasa labs where the role was of an
          end-to-end designer. Soon I moved to babajob a job marketplace for
          blue-collar workers where my journey of becoming a UX UI designer
          truly began. After which I worked at NDTV Worldwide which looked at
          providing a suite of apps to hospitals, patients, and paramedics.
          Where I had the pleasure of working with hospitals like Moolchand
          Medcity and Columbia Asia. Most recent was my experience with
          Mycujoo.tv in Amsterdam which gave me not only exposure to the
          workings of an International multilingual team but also a vast variety
          of users as the platform looked at the streaming of football matches.
          Currently I am working at YUJ Designs with client interaction at TATA
          Motors and Honeywell.
        </Typography>

        <img
          src="/course_unit_default.svg"
          alt=""
          style={{ margin: "1rem 0" }}
        />
      </div>
    </div>
  );
}
