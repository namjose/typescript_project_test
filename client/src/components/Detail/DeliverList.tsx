import * as React from "react";
import {
  Grid,
  ListItem,
  List,
  Avatar,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Collapse,
  Typography
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  LocalShippingOutlined
} from "@material-ui/icons";

interface Props {
  handleClickCollapse: (stateName: string) => void;
  open: boolean;
}

export const DeliverList = (props: Props) => {
  const { handleClickCollapse, open } = props;
  return (
    <Grid item>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: "#212121" }}>
              <LocalShippingOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delivery" />
          {open ? (
            <IconButton onClick={e => handleClickCollapse("openD")}>
              <ExpandLess />
            </IconButton>
          ) : (
            <IconButton onClick={e => handleClickCollapse("openD")}>
              <ExpandMore />
            </IconButton>
          )}
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h5">Vietnam</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Standard Shipping" />
              $5.00
            </ListItem>
            <ListItem>
              <ListItemText primary="Free Standard Shipping" />
              $0.00
            </ListItem>
            <ListItem>
              <ListItemText primary="Express Standard Shipping" />
              $15.00
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Grid>
  );
};
