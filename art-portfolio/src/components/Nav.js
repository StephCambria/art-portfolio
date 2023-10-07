import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Nav() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "20%",
        height: "50vh",
        marginTop: "30vh",
        marginBottom: "15vh",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        orientation="vertical"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="About" href="#about"/>
        <Tab value="two" label="Paintings" href="#paintings" />
        <Tab value="three" label="Illustration" href="#illustration" />
      </Tabs>
    </Box>
  );
}

export default Nav;
