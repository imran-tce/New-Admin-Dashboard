import useStyles from "./Header.styles";
import BreadCrumbs from "../../shared/breadCrumbs/BreadCrumbs";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  bread_crumbs?: {
    [title: string]: string;
  };
  title?: string;
}

export default function Header({ bread_crumbs, title }: Props) {
  const classes = useStyles();
  const navigate=useNavigate();

  const handleBackClick=()=>{
    navigate(-1)
  }

  return (
    <div className={classes.root} >
      {bread_crumbs && title ? (
        <>
          <BreadCrumbs item_map={bread_crumbs} />
          <h2>{title} </h2>
          
        </>
      ) : (
        <img src="/Arrow back.svg" alt="" onClick={handleBackClick} />
      )}


    </div>
  );
}
