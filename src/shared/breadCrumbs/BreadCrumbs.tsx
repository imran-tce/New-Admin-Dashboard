import { useMemo } from "react";
import useStyles from "./BreadCrumbs.styles";
import { Link } from "react-router-dom";

interface Props {
  item_map: {
    [title: string]: string;
  };
}

export default function BreadCrumbs({ item_map }: Props) {
  const classes = useStyles();

  const items_length = useMemo(() => {
    return Object.keys(item_map).length || 0;
  }, [item_map]);

  return (
    <div className={classes.breadCrumbsWrapper}>
      <Link to="/" className={classes.link}>
        Home
      </Link>
      {Object.keys(item_map).length > 0 &&
        Object.keys(item_map)
          .slice(0, items_length)
          .map((title, index) => {
            return (
              <Link key={index} to={item_map[title]} className={classes.link}>
                / {title}
              </Link>
            );
          })}
    </div>
  );
}
