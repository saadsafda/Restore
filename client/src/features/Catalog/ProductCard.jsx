import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ elem }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar>{elem.name.charAt(0).toUpperCase()}</Avatar>}
        title={elem.name}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain" }}
        image={elem.picturUrl}
        title={elem.name}
        alt={elem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          {elem.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elem.brand} / {elem.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to card</Button>
        <Button size="small" component={Link} to={`/catalog/${elem.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
