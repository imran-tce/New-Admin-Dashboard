import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCardMenu from "./courseCardMenu/CourseCardMenu";
import { CourseTemp } from "../../pages/courses/Courses";


interface Props {
  courses: CourseTemp[];
}

export default function CoursesList({ courses }: Props) {
  const navigate = useNavigate();
  const [anchor_el, set_anchor_el] = useState<null | HTMLElement>(null);
  const [selected_course, set_selected_course] = useState<CourseTemp>(
    {} as CourseTemp
  );

  const handleMenuClick = (e: any, batch: CourseTemp) => {
    e.stopPropagation();
    set_anchor_el(e.currentTarget);
    set_selected_course(batch);
  };

  const handleCardClick = (id: string) => {
    navigate(`/courses/${id}`);
  };


  return (
    <div style={{width:"100%", height:"100%"}} >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {courses.map((course: any, index) => {
          return (
            <Card
              key={course.id}
              elevation={0}
              sx={{
                ":hover": { boxShadow: "none" },
                border: "1px solid #000",
                borderRadius: "15px",
                maxWidth: 302,
                minWidth: 302,
                pb: 1.5,
                position: "relative",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image="/card_default_image.svg"
                alt="green iguana"
              />
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  cursor: "pointer",
                }}
                onClick={(e: any) => handleMenuClick(e, course)}
              >
                <img src="/vertical_dots.svg" />
              </div>
              <CardContent
                sx={{ mb: 0, pb: 0 }}
                onClick={() => handleCardClick(course.id)}
              >
                <Typography gutterBottom variant="h5" color="black" noWrap>
                  {course.title}
                </Typography>
              </CardContent>
              <CourseCardMenu
                selected_course={selected_course}
                anchorEl={anchor_el}
                callback={(anchorEl) => {
                  set_anchor_el(anchorEl);
                }}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
