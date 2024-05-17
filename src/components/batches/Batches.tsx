import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { useState } from "react";
import BatchCardMenu from "../batchCardMenu/BatchCardMenu";
import { UserMeta } from "../../models/apiModels";
import { Batch } from "../../../../skill-ed-web/src/supabaseServices/models";
import { useNavigate } from "react-router-dom";

export interface IBatch extends Batch {
  author: UserMeta;
  academic_year:number;
  semester:number
}

interface Props{
  batches:IBatch[]
}

export default function Batches({batches}:Props) {
  const navigate = useNavigate();
  const [anchor_el, set_anchor_el] = useState<null | HTMLElement>(null);
  const [selected_batch, set_selected_batch] = useState<IBatch>({} as IBatch);

  const handleMenuClick = (e: any, batch: IBatch) => {
    set_anchor_el(e.currentTarget);
    set_selected_batch(batch);
  };

  const handleCardClick = (id: string) => {
    navigate(`/batches/${id}`);
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
      {batches.map((batch: any, index) => {
        return (
          <Card
            key={batch.id}
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
            onClick={() => handleCardClick(batch.id)}
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
              onClick={(e: any) => handleMenuClick(e, batch)}
            >
              <img src="/vertical_dots.svg" />
            </div>
            <CardContent sx={{ mb: 0, pb: 0 }}>
              <Typography gutterBottom variant="h5" color="black" noWrap>
                {batch.title}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 0, pt: 1 }}>
              <img src="/user.svg" alt="U" />
              <Typography variant="BM14" color="black">
                {batch.capacity} Students
              </Typography>
            </CardActions>
            <BatchCardMenu
              selected_batch={selected_batch}
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
