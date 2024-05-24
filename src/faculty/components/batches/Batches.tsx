import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseTempNew } from "../../../models/devModels";
import BatchCardMenu from "./batchCardMenu/BatchCardMenu";

interface Props {
  courses: CourseTempNew[];
}

export default function Batches({ courses }: Props) {
  const navigate = useNavigate();
  const [anchor_el, set_anchor_el] = useState<null | HTMLElement>(null);
  const [selected_course, set_selected_batch] = useState<CourseTempNew>(
    {} as CourseTempNew
  );

  const handleMenuClick = (e: any, course: CourseTempNew) => {
    e.stopPropagation();
    set_anchor_el(e.currentTarget);
    set_selected_batch(course);
  };

  const handleCardClick = (id: string) => {
    navigate(`/batches/82ab936a-f969-44b6-8bd6-f09e8317afca/courses/${id}`);
  };

  return (
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
      {courses?.map((course, index) => {
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
                 <Typography gutterBottom variant="BM14" color="#3D3D3D" noWrap sx={{mb:3}} >
                {`Batch_cse0${course.semester}_2024`}
              </Typography>

              <Typography gutterBottom variant="h5" color="black" noWrap>
                {course.title}
              </Typography>
              <Typography gutterBottom variant="BR14" color="rgba(0, 0, 0, 0.5)" noWrap>
                course code : {course.course_code}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 0, pt: 3 }}>
              <img src="/user.svg" alt="U" />
              <Typography variant="BM14" color="black">
                {course.students_enrolled} Students
              </Typography>
            </CardActions>
            <BatchCardMenu
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
  );
}
