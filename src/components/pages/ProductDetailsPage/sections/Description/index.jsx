"use client";

import { AiOutlineCheck } from "react-icons/ai";

import React from "react";
import {
  StyledTabs,
  StyledTab,
  StyledContent,
  StyledContentMain,
  StyledTable,
  StyledTableHeader,
  StyledTableData,
  YouMayLike,
  ItemsContainer,
  Item,
  StyledContainer,
  Features,
  Feature,
} from "./style";
import Layout from "../Layout";
import Typography from "../../../../atoms/Typography";
import Image from "next/image";
import { detailsTable, features } from "../../../../../mock/info";

const Description = () => {
  return (
    <Layout>
      <StyledContainer>
        <StyledContentMain>
          <StyledTabs>
            <StyledTab className="active">Description</StyledTab>
            <StyledTab>Reviews</StyledTab>
            <StyledTab>Shipping</StyledTab>
            <StyledTab>About company</StyledTab>
          </StyledTabs>
          <StyledContent>
            <Typography as="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <StyledTable>
              {detailsTable.map((row) => (
                <div key={row.id}>
                  <StyledTableHeader>{row.title}</StyledTableHeader>
                  <StyledTableData>{row.value}</StyledTableData>
                </div>
              ))}
            </StyledTable>
            <Features>
              {features.map((feature) => (
                <Feature>
                  <AiOutlineCheck />
                  <p key={feature.id}>{feature.title}</p>
                </Feature>
              ))}
            </Features>
          </StyledContent>
        </StyledContentMain>

        <YouMayLike>
          <Typography as="h5">You may like</Typography>
          <ItemsContainer>
            <Item>
              <Image src="/assets/images/cloth/01.png" width={100} height={100} />
              <div>
                <Typography as="p">Apple Watch Series Space Gray</Typography>
                <span>$7.00 - $99.50</span>
              </div>
            </Item>
            <Item>
              <Image src="/assets/images/cloth/01.png" width={100} height={100} />
              <div>
                <Typography as="p">Apple Watch Series Space Gray</Typography>
                <span>$7.00 - $99.50</span>
              </div>
            </Item>
            <Item>
              <Image src="/assets/images/cloth/01.png" width={100} height={100} />
              <div>
                <Typography as="p">Apple Watch Series Space Gray</Typography>
                <span>$7.00 - $99.50</span>
              </div>
            </Item>
            <Item>
              <Image src="/assets/images/cloth/01.png" width={100} height={100} />
              <div>
                <Typography as="p">Apple Watch Series Space Gray</Typography>
                <span>$7.00 - $99.50</span>
              </div>
            </Item>
          </ItemsContainer>
        </YouMayLike>
      </StyledContainer>
    </Layout>
  );
};

export default Description;
