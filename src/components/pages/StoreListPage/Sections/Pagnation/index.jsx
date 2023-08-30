import React from "react";
import { PageButton, PaginationContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagnation = () => {
  return (
    <div>
      <PaginationContainer>
        <select>
          <option value="1">Show 10</option>
        </select>
        <div>
          <PageButton>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#929396" }}
            />
          </PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#080909" }}
            />
          </PageButton>
        </div>
      </PaginationContainer>
    </div>
  );
};

export default Pagnation;
