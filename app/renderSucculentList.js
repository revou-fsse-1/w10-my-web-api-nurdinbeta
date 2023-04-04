import { getAllSucculents } from "../services/getSucculents";
import { deleteSucculentById } from "../services/deleteSucculentById";
import { getSucculentById } from "../services/getSucculentById";

const succulentCardComponent = (succulentData) => {
    return `
    <div class="card">
    <h2>${succulentData.name}<h2>
    <p>${succulentData.genus}<p>
    <p>${succulentData.family}<p>
    <button class="show-popup" id="card-${succulentData.id}">Show</button>
    <button class="delete-popup" id="card-${succulentData.id}">Delete</button>
    </div>
    `;
};

  export const renderSucculentList = async () => {
  const data = await getAllSucculents();

  const succulentCardList = data.map((succulent) =>
    succulentCardComponent(succulent)
  );

  const cardListWrapper = document.querySelector("#succulent-list");

  cardListWrapper.innerHTML = succulentCardList.join("");

  const showPopup = document.querySelectorAll(".show-popup");

  showPopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      const data = await getSucculentById(cardId);

      document.querySelector("#save-succulent-type").value = "update";
      document.querySelector("#input-succulent-id").value = cardId;

      const popup = document.querySelector("#succulent-popup-form");

      popup.style.display = "block";

      // populate fields into the form
      const nameInput = document.querySelector("#input-succulent-name");
      const genusInput = document.querySelector("#input-succulent-genus");
      const familyInput = document.querySelector("#input-succulent-family");

      nameInput.value = data.name;
      genusInput.value = data.genus;
      familyInput.value = data.family;
    });
  });

  const deletePopup = document.querySelectorAll(".delete-popup");

  deletePopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      await deleteSucculentById(cardId);

      renderSucculentList("");
    });
  });
};
