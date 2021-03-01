import React from "react";
import { Wrapper } from "./SelectCategory.styles";

type Props = {
  handler: (e: React.ChangeEvent<HTMLSelectElement>) => any;
};

const SelectCategory: React.FC<Props> = ({ handler }) => {
  return (
    <Wrapper>
      <div className="container">
        <select
          onChange={handler}
          name="trivia_category"
          className="form-control">
          <option id="option" value="any">
            Select Category
          </option>
          <option id="option" value="9">
            General Knowledge
          </option>
          <option id="option" value="10">
            Entertainment: Books
          </option>
          <option id="option" value="11">
            Entertainment: Film
          </option>
          <option id="option" value="12">
            Entertainment: Music
          </option>
          <option id="option" value="13">
            Entertainment: Musicals &amp; Theatres
          </option>
          <option id="option" value="14">
            Entertainment: Television
          </option>
          <option id="option" value="15">
            Entertainment: Video Games
          </option>
          <option id="option" value="16">
            Entertainment: Board Games
          </option>
          <option id="option" value="17">
            Science &amp; Nature
          </option>
          <option id="option" value="18">
            Science: Computers
          </option>
          <option id="option" value="19">
            Science: Mathematics
          </option>
          <option id="option" value="20">
            Mythology
          </option>
          <option id="option" value="21">
            Sports
          </option>
          <option id="option" value="22">
            Geography
          </option>
          <option id="option" value="23">
            History
          </option>
          <option id="option" value="24">
            Politics
          </option>
          <option id="option" value="25">
            Art
          </option>
          <option id="option" value="26">
            Celebrities
          </option>
          <option id="option" value="27">
            Animals
          </option>
          <option id="option" value="28">
            Vehicles
          </option>
          <option id="option" value="29">
            Entertainment: Comics
          </option>
          <option id="option" value="30">
            Science: Gadgets
          </option>
          <option id="option" value="31">
            Entertainment: Japanese Anime &amp; Manga
          </option>
          <option id="option" value="32">
            Entertainment: Cartoon &amp; Animations
          </option>{" "}
        </select>
      </div>
    </Wrapper>
  );
};

export default SelectCategory;
