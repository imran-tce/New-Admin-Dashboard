import { Menu, Typography } from "@material-ui/core";
import { useState } from "react";

import { IProject } from "../../../../../skill-ed-web/src/supabaseServices/extraModels";
import Share from "../../../shared/SocialShare/Share";
import {
  get_time_zone_offset_date,
  getFormattedDate,
} from "../../../utils/utils";
import useStyles from "./ProjectCardMenu.style";

interface IProp {
  selected_project: IProject;
  anchorEl: any;
  callback: (anchorEl: null) => void;
}

export default function ProjectCardMenu(prop: IProp) {
  const classes = useStyles();
  const selected_project = prop.selected_project;

  const [copied_link, set_copied_link] = useState<string | undefined>(
    undefined
  );
  const [share_open, set_share_open] = useState<boolean>(false);

  const handleClose = () => {
    prop.callback(null);
  };

  // copy link to clipboard
  const handleCopiedLink = (id: string) => {
    const env_domain = process.env.REACT_APP_DOMAIN;
    const domain = `https://${env_domain}`;
    const path = `projects/${id}`;

    navigator.clipboard
      .writeText(`${domain}/${path}`)
      .then(() => {
        set_copied_link("Link is copied");
        setTimeout(() => {
          set_copied_link(undefined);
        }, 1000);
      })
      .catch(() => {
        set_copied_link("Something went wrong while copying.");
        setTimeout(() => {
          set_copied_link(undefined);
        }, 1000);
      });
  };

  const handleShare = () => {
    set_share_open((share) => !share);
  };

  return (
    <>
      <Menu
        anchorEl={prop.anchorEl}
        keepMounted
        open={Boolean(prop.anchorEl)}
        className={classes.popupMenu}
        anchorOrigin={{
          vertical: -65,
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: -65,
          horizontal: "left",
        }}
        onClose={handleClose}
      >
        <div className={classes.popupMenuActions}>
          <div onClick={() => handleShare()}>
            <div>
              <img src="/icons/social-media-share-dark.svg" />
            </div>
            <div>
              <Typography variant="body1">Share with a friend</Typography>
            </div>
            {share_open && (
              <div className={classes.shareContainer}>
                <Share
                  description={`Checkout project- ${selected_project.title}`}
                />
              </div>
            )}
          </div>
          <div
            className={classes.copyLink}
            onClick={() => handleCopiedLink(selected_project?.id)}
          >
            <div>
              <img src="/icons/copy-link-dark.svg" />
            </div>
            <div>
              <Typography variant="body1">Copy link</Typography>
            </div>
            {copied_link && (
              <div className={classes.linkCopiedLabel}>
                <Typography variant="body2" color="primary">
                  {copied_link}
                </Typography>
              </div>
            )}
          </div>
        </div>

        <div className={classes.projectDetails}>
          <div>
            <Typography variant="body1" color="secondary">
              Project Details
            </Typography>
          </div>
          <div>
            <div>
              <div>
                <Typography
                  className={classes.projectDetailsTitle}
                  variant="caption"
                  component={"p"}
                >
                  Creator
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.projectDetailsInfo}
                  variant="caption"
                  component={"p"}
                >
                  {selected_project?.author?.display_name}
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography
                  className={classes.projectDetailsTitle}
                  variant="caption"
                  component={"p"}
                >
                  Created
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.projectDetailsInfo}
                  variant="caption"
                  component={"p"}
                >
                  {getFormattedDate(
                    get_time_zone_offset_date(
                      new Date(selected_project?.created_at)
                    )
                  )}
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography
                  className={classes.projectDetailsTitle}
                  variant="caption"
                  component={"p"}
                >
                  Last Modified
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.projectDetailsInfo}
                  variant="caption"
                  component={"p"}
                >
                  {getFormattedDate(
                    get_time_zone_offset_date(
                      new Date(selected_project?.updated_at)
                    )
                  )}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
}
