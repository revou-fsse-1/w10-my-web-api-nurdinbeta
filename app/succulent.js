import { renderSucculentList } from "./renderSucculentList";

const renderSucculentApp = async () => {
    const layoutApp = `
        <div class="filter"> 
        <button id="add-succulent">Add New Succulent</button>
        </div>
        <div id="succulent-list"></div>
    <div id="succulent-popup-form">
      <form>
        <input type="hidden" id="save-succulent-type" />
        <input type="hidden" id="input-succulent-id" />
        <label>
          <span>Succulent Name</span>
          <input id="input-succulant-name" type="text">
        </label>
        <br/>
        <label>
          <span>Succulent Genus</span>
          <input id="input-succulent-genus" type="text">
        </label>
        <br/>
        <label>
          <span>Succulent Family</span>
          <input id="input-succulent-family" type="text">
        </label>
        <br/>
        <button id="save-succulent-button">Save</button>
        <button id="close-popup">Close</button>
      </form>
    </div>
  `;

// inject layout to the container
const succulentContainer = document.querySelector("#succulent-container");

succulentContainer.innerHTML = layoutApp;

// load
renderSucculentList("");
}

addEventListener("DOMContentLoaded", () => {
    renderSucculentApp();
});