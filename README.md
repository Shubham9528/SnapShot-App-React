🌐 SnapShot Project
Welcome to the SnapShot Project! This project is a simple React application that allows users to browse images based on various categories and search queries.

📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-Tests)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- 
📖 Introduction

The SnapShot Project is built using React and Material-UI. It includes a search functionality and predefined category buttons to fetch and display images based on the user’s input or selection.


✨ Features

Simple user interface with search and category buttons.
State management using React hooks.
Component-based architecture.
Integration with Material-UI for styling and layout.
💻 Installation
To get started with the project, follow these steps:


Clone the repository:
bash
```
git clone https://github.com/your-username/snapshot-project.git
```
Navigate to the project directory:
bash
```
cd snapshot-project
```
Install dependencies:
bash
```
npm install
```
🚀 Usage
To run the project locally, use the following command:


bash
```
npm start
```
Open your browser and navigate to http://localhost:3000 to see the application in action.

📄 Component Description
App Component
The App component is the main entry point of the application. It sets up the structure and includes other components like ImageGallery.

javascript
```
import SearchBox from "./SearchBox";
import ImageGallery from "./ImageGallery";

export default function App() {
  return (
    <div className="App">
      <h1>SnapShot</h1>
      {/* <SearchBox /> */}
      <ImageGallery />
    </div>
  );
}
```
The index.js file is responsible for rendering the App component to the DOM.

javascript
```
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
```
ButtonGroup Component
The ButtonGroup component provides category buttons that users can click to filter images by predefined categories.

javascript
```
import React from "react";
import Button from "@mui/material/Button";

function ButtonGroup(props) {
  function handleClick(event) {
    const { value } = event.target;
    props.onAdd(value);
  }

  return (
    <div className="button">
      <Button onClick={handleClick} variant="contained" value="mountain">
        Mountain
      </Button>
      <Button onClick={handleClick} variant="contained" value="beaches">
        Beaches
      </Button>
      <Button onClick={handleClick} variant="contained" value="bird">
        Bird
      </Button>
      <Button onClick={handleClick} variant="contained" value="food">
        Food
      </Button>
    </div>
  );
}
```

export default ButtonGroup;
SearchBox Component
The SearchBox component allows users to input a search query and submit it to fetch related images.

javascript
```
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    const { value } = event.target;
    setSearch(value);
  }

  function handleClick() {
    props.onAdd(search);
    setSearch("");
  }

  return (
    <div className="search">
      <input
        onChange={handleSearch}
        name="inputBox"
        placeholder="Search"
        value={search}
      />
      <button onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
}
```

export default SearchBox;
🤝 Contributing
Contributions are welcome! If you have any ideas or suggestions to improve the project, feel free to open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

🙏 Acknowledgements
Thanks to the React and Material-UI teams for their amazing libraries and tools.
Made with ❤️ by Shubham Shinde
