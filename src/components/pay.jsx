import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { grey } from "@mui/material/colors";
export default function Pay() {
  const greya = grey[900]; // #f44336
  return (
    <main className="bg-amber-100 flex justify-center items-center h-screen">
      <Card className="max-w-80 max-h-96">
        <div  className="font-bold mx-1 text-2xl">
          my account :
        </div>

        <div className="flex justify-center items-center mt-1  ">
          <Link href="mailto:ikhmoh01@gmail.com" target="_blank">
            <EmailIcon color="error" className="mx-2" />
          </Link>
          <Link color={greya} href="https://github.com/IkhMoh" target="_blank">
            <GitHubIcon className="mx-2" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mohamed-ikhlef-a16675321/"
            target="_blank"
          >
            <LinkedInIcon className="mx-2" />
          </Link>
        </div>
        <hr className="mt-2"></hr>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            If you like this app, please give it a star on GitHub!
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="flex justify-end items-center">
          <div className="mr-2 mb-1">👉🏻</div>
          <Link
            href="https://github.com/IkhMoh/E-Commerce-Data"
            target="_blank"
          >
            <IconButton color="warning">
              <FavoriteIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </main>
  );
}
