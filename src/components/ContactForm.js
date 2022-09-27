// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, TextField } from "@mui/material";
import React, { useState, Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState("Nina");
  const [email, setEmail] = useState("nina@email.com");
  const [phone, setPhone] = useState("087771711777");
  const [photo, setPhoto] = useState("http://placekitten.com/100");
  
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const handleAdd = (event) => {
    event.preventDefault();
    let data = {
        name,
        email,
        phone,
        photo,
    }
    handleSubmit(data);
  };

  return (
    <Fragment>
      <form onSubmit={handleAdd}>
        <Card sx={{ minWidth: 275, backgroundColor: "#F3F1EB" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField label="Name" required id="filled-size-small" variant="filled" sx={{ marginBottom: "1em" }} value={name} onChange={(e)=>setName(e.target.value)} />
            <TextField label="Email" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField label="Phone" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <TextField label="Photo URL" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={photo} onChange={(e)=>setPhoto(e.target.value)}/>
          </CardContent>
          <Button type="submit" onClick={handleAdd} sx={{ marginLeft: "-46em", marginBottom: "1em" }} color="success">
            ADD NEW
          </Button>
        </Card>
      </form>
    </Fragment>
  );
};

export default ContactForm;
