import { getAllSucculents } from "../services/getSucculents";
import { deleteSucculentById } from "../services/deleteSucculentById";
import { getSucculentById } from "../services/getSucculentById";

const succulentBoxComponent = (succulentData) => {
    return `
    <div class="box">
    <h2>${succulentData.name}<h2>
    <p>${succulentData.genus}<p>
    <p>${succulentData.family}<p>
    <button class="show-popup" id="box-${succulentData.id}">Show</button>
    <button class="delete-data" id="box-${succulentData.id}">Delete</button>
    </div>
    `;
};

export const renderSucculentList = async (keyword) => {
  const data = await getAllSucculents(keyword);

  const succulentBoxList = data.map((succulent) =>
    succulentBoxComponent(succulent)
  );

  const boxListWrapper = document.querySelector("#succulent-list");

  boxListWrapper.innerHTML = succulentBoxList.join("");

  const showPopup = document.querySelectorAll(".show-popup");

  showPopup.forEach((box) => {
    box.addEventListener("click", async () => {
      const boxId = box.attributes.id.value.slice(6);

      const data = await getSucculentById(boxId);

      document.querySelector("#save-succulent-type").value = "update";
      document.querySelector("#input-succulent-id").value = boxId;

      const popup = document.querySelector("#succulent-popup-form");

      popup.style.display = "block";

      
      const nameInput = document.querySelector("#input-succulent-name");
      const genusInput = document.querySelector("#input-succulent-genus");
      const familyInput = document.querySelector("#input-succulent-family");

      nameInput.value = data.name;
      genusInput.value = data.genus;
      familyInput.value = data.family;
    });
  });

  const deletePopup = document.querySelectorAll(".delete-popup");

  deletePopup.forEach((box) => {
    box.addEventListener("click", async () => {
      const boxId = box.attributes.id.value.slice(7);

      await deleteSucculentById(boxId);

      renderCommunityList("");
    });
  });
};
