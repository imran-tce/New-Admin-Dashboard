import { useEffect, useState } from "react";
import useStyles from "./DisplayPicture.styles";
import { UserProfileDetails } from "../../../../../models/apiModels";
import { Avatar } from "@mui/material";
import Text from "../../../../../shared/texts/Text";

interface Props {
  user_details: UserProfileDetails;
}

export default function DisplayPicture(props: Props) {
  const classes = useStyles();
  const [user_details, set_user_details] = useState<UserProfileDetails>(
    {} as UserProfileDetails
  );

  useEffect(() => {
    set_user_details(props.user_details);
  }, [props.user_details]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <Avatar src={user_details?.user?.photo_url} alt="" />
        </div>

        <div>
          <h3>{user_details?.personal_details?.display_name}</h3>
          <Text variant="body5">
            {user_details?.personal_details?.professional_info?.role}
          </Text>
        </div>
      </div>
    </div>
  );
}
