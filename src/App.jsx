import { useState, useEffect } from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
	faCircle,
	faCheckCircle,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div class="app-background">
      <div class="main-container">
        <div class="add-item-box">
          <input class="add-item-input" placeholder="Add an item..." />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div class="item-list">
          <div class="item-container"></div>
        </div>
        <div class="total">Total: </div>
      </div>
    </div>
  );
};