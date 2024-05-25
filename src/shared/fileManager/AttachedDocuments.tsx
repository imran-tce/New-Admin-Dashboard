import {
  Backdrop,
  createStyles,
  Dialog,
  Fade,
  IconButton,
  makeStyles,
  Modal,
  Theme,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import useStyles from "./AttachedDocuments.styles";
import { AppBar, Toolbar } from "@mui/material";
import { getInternationalDateFormat } from "../../utils/utils";

interface UploadDocumentType {
  name: string;
  url: string;
  type?: string;
  storage_path: string;
  size?: number;
  created_at: string;
  content_type?: string;
}

interface Props<T> {
  uploadedDocuments: T[];
}

export const getFileType = (fileName: string) => {
  const fileNameArray = fileName.split(".");
  const fileType = fileNameArray[fileNameArray.length - 1];
  switch (fileType) {
    case "pdf":
      return <img src="/icons/documents_type_icons/pdf_icon.png" alt="" />;
    case "webp":
      return (
        <img
          src="/icons/webp_format_icon.svg"
          width="38px"
          height="38px"
          alt=""
        />
      );
    case "svg":
      return (
        <img
          src="/icons/svg_format_icon.svg"
          width="38px"
          height="38px"
          alt=""
        />
      );
    case "gif":
      return (
        <img
          src="/icons/gif_format_icon.svg"
          width="38px"
          height="38px"
          alt=""
        />
      );
    case "png":
    case "image/png":
    case "image/jpeg":
    case "jpeg":
    case "jpg":
    case "image/svg":
    case "image/svg+xml":
    case "image/webp":
    case "image/gif":
      // return <Png />;
      return <img src="/icons/documents_type_icons/image_icon.png" alt="" />;
    case "xlsx":
      // return <Excel />;
      return <img src="/icons/documents_type_icons/excel_icon.png" alt="" />;
    case "csv":
      // return <Excel />;
      return <img src="/icons/documents_type_icons/csv_icon.png" alt="" />;
    case "docx":
      // return <Docs />;
      return <img src="/icons/documents_type_icons/docs_icon.png" alt="" />;
    case "pptx":
      // return <Ppt />;
      return <img src="/icons/documents_type_icons/ppt_icon.png" alt="" />;
    case "zip":
      // return <Zip />;
      return <img src="/icons/documents_type_icons/zip_icon.png" alt="" />;
    case "mp4":
      // return <Mp4 />;
      return <img src="/icons/documents_type_icons/video_icon.png" alt="" />;
    default:
      return <img src="/icons/web_format_icon.svg" alt="" />;
  }
};

export const AttachedDocuments = <T extends UploadDocumentType>(
  props: Props<T>
) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [uploadUrl, setUploadUrl] = useState<string>("");
  const [selected_item, set_selected_item] = useState<T>();

  const handleClose = () => {
    setOpen(false);
    setUploadUrl("");
  };

  const handleDocumentClick = async (upload: T) => {
    if (upload?.type === "url") {
      window.open(upload.url);
      // window.open(`https://www.` + upload.url);
    }
  };

  return (
    <div className={classes.fileContainer}>
      <div>
        {selected_item?.content_type &&
        selected_item?.content_type.toLowerCase().startsWith("image") ? (
          <Dialog fullWidth open={open}>
            <AppBar>
              <Toolbar>
                <IconButton
                  onClick={handleClose}
                  aria-label="close"
                  color="secondary"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <img
              src={uploadUrl}
              loading="lazy"
              width="100%"
              height="100%"
              alt=""
            />
          </Dialog>
        ) : (
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={`${classes.paper} ${classes.pdf}`}>
                <CloseIcon onClick={handleClose} />
                <iframe
                  title="iframe-title"
                  src={uploadUrl}
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </Fade>
          </Modal>
        )}
      </div>

      <div className={classes.fileContainer}>
        {props.uploadedDocuments.map((upload, index) => (
          <div
            className={classes.file}
            key={index}
            onClick={() => {
              handleDocumentClick(upload);
            }}
          >
            {getFileType(upload.name)}
            <div style={{ marginLeft: "0.5rem" }}>
              <Typography variant="body2" noWrap>
                {upload?.name}
              </Typography>
              {upload?.size && (
                <Typography variant="body1">
                  {(upload?.size / (1024 * 1024))?.toFixed(2)} mb
                </Typography>
              )}
              {upload?.created_at && (
                <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                  <span style={{ color: "#000" }}>Submitted On : </span>
                  {getInternationalDateFormat(upload?.created_at)}
                </Typography>
              )}
            </div>
            {/* <GetAppIcon /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
