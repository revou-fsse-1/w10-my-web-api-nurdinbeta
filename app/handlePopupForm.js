import { addSucculent } from "../services/addSucculent";
import { updateSucculentById } from "../services/updateSucculentById";
import { renderSucculentList } from "../app/renderSucculentList";

export const applyPopupFormFunctionality = () => {
  const openPopupButton = document.querySelector("#add-succulent");
  const closePopupButton = document.querySelector("#close-popup");

  openPopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#succulent-popup-form");

    document.querySelector("#save-succulent-type").value = "add";

    const nameInput = document.querySelector("#input-succulent-name");
    const genusInput = document.querySelector("#input-succulent-genus");
    const familyInput = document.querySelector("#input-succulent-family");
   
    nameInput.value = "";
    genusInput.value = "";
    familyInput.value ="";

    popup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#succulent-popup-form");

    popup.style.display = "none";
  });

  
  const saveSucculentButton = document.querySelector("#save-succulent-button");

  saveSucculentButton.addEventListener("click", async (e) => { 
    e.preventDefault(); // to prevent form to reload somewheres
  
    const id = document.querySelector("#input-succulent-id").value;
    const name = document.querySelector("#input-succulent-name").value;
    const genus = document.querySelector("#input-succulent-genus").value;
    const family = document.querySelector("#input-succulent-family").value;

    const saveType = document.querySelector("#save-succulent-type");

    if (saveType === "add") {
      await addSucculent({ name, genus, family });
    }


    if (saveType === "update") {
      await updateSucculentById({ name, genus, family, id });
    }

    renderSucculentList("");

    const popup = document.querySelector("#succulent-popup-form");

    popup.style.display = "none";
  });
};