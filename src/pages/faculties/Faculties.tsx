import { useMemo } from "react";
import useStyles from "./Faculties.styles";
import { Avatar, Divider } from "@mui/material";
import BreadCrumbs from "../../shared/breadCrumbs/BreadCrumbs";
import { faculties } from "../../dummy data/faculties";
import Text from "../../shared/texts/Text";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Faculties() {
  const classes = useStyles();
  const navigate = useNavigate();

  const bread_crumbs = useMemo(() => {
    return {
      Faculties: "/faculties",
    };
  }, []);

  const handleFacultyClick = (id: string) => {
    navigate(`/faculties/${id}`);
  };

  return (
    <div className={classes.root}>
      <Header title="Faculties" bread_crumbs={bread_crumbs} />

      <div className={classes.container}>
        {faculties.map((faculty) => {
          return (
            <div
              key={faculty.id}
              className={classes.facultyCard}
              onClick={() => handleFacultyClick(faculty.id)}
            >
              <Avatar variant="circular" src={faculty.user?.photo_url} alt="" />
              <div className={classes.facultyDetails}>
                <h4>
                  {faculty.personal_details?.display_name || faculty.user?.name}{" "}
                </h4>
                <Text variant="body5" color="#797979">
                  {faculty.personal_details?.professional_info?.role}{" "}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
