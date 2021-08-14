import { Typography, Link } from "@material-ui/core";
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © Feito com 💙 por "}
      <Link color="inherit" href="https://crisler.tech/">
        Crisler Wintler{" "}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
