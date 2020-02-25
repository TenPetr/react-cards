import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";
import { headingStyle, inputStyle, buttonStyle } from "./styles/Styles";

function App() {
  return (
    <Layout>
      <h1 style={headingStyle}>Cards</h1>
      <Form>
        <input style={inputStyle} name="name" placeholder="Name"></input>
        <textarea
          style={inputStyle}
          name="desc"
          placeholder="Description"
        ></textarea>
        <button style={buttonStyle}>Add</button>
      </Form>
    </Layout>
  );
}

export default App;
