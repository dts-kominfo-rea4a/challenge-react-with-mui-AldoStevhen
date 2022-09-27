import "./App.css";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Headers from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const App = () => {
  const [contact, setContact] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handleSubmit = (newContact) => {
    let tempData = [...contact];
    tempData.push(newContact);
    setContact(tempData);
  };
  return (
    <div className="App">
      <Headers />
      <Box sx={{ display: "flex", width: "100%", paddingTop: "5em" }}>
        <Box sx={{ width: "45%", padding: "0em 5em" }}>
          <ContactForm handleSubmit={handleSubmit} />
        </Box>
        <Box sx={{ width: "55%" }}>
          {contact.map((data, i) => (
            <Contact key={i} data={data} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default App;
