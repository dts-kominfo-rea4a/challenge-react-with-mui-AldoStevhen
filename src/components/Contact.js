// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Box, Divider, List, ListItem, Typography } from "@mui/material";
import React, { Fragment } from "react";

const style = {
  width: "100%",
  maxWidth: 600,
  bgcolor: "#DBF6F0",
  padding: "10px",
};

const DetailContact = (props) => {
  const { name, phone, email } = props;

  return (
    <>
      <Box sx={{ marginLeft: "20px" }}>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography>{phone}</Typography>
        <Typography>{email}</Typography>
      </Box>
    </>
  );
};

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email

  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <Fragment>
          <ListItem>
            <Avatar src={data.photo} alt={data.photo} sx={{ width: 80, height: 80 }} />
            <DetailContact name={data.name} email={data.email} phone={data.phone} />
          </ListItem>
          <Divider light />
        </Fragment>
      </List>
    </>
  );
};

export default Contact;
