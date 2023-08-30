import ReactStars from "react-rating-stars-component";
import { BsDot } from "react-icons/bs";
import { BsBasket2 } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import Layout from "../Layout";
import {
  Pics,
  Pic,
  PicsContainer,
  ShownPic,
  MainDetails,
  StyledStock,
  Dot,
  StyledRatingContainer,
  StyledPricing,
  StyledDetails,
  StyledDetail,
  StyledTitle,
  DetailsContainer,
  StyledRow,
  CompanyDetails,
  CompanyName,
  CompanyLocation,
  StyledProductContainer,
  StyledPrice,
  SaveLater,
} from "./style";
import Typography from "../../../../atoms/Typography";

import { details, pics, title_detail, trade_prices } from "../../../../../mock/info";

const ContentMain = () => {
  return (
    <Layout>
      <StyledProductContainer>
        <PicsContainer>
          <ShownPic src="/assets/images/cloth/01.png" alt="clothes" />
          <Pics>
            {pics.map((pic) => (
              <Pic key={pic.id} src={pic.src} alt={pic.title} />
            ))}
          </Pics>
        </PicsContainer>
        <MainDetails>
          <StyledStock>
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00B517" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
            In stock
          </StyledStock>
          <Typography as="h4">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</Typography>
          <StyledRatingContainer>
            <div>
              <ReactStars count={5} onChange={() => {}} size={24} activeColor="#ffd700" />
              <span>0.0</span>
            </div>
            <BsDot className="icon" />
            <div>
              <BiMessageDetail className="icon" />
              <span>32 reviews</span>
            </div>
            <BsDot className="icon" />
            <div>
              <BsBasket2 className="icon" />
              <span>32 reviews</span>
            </div>
          </StyledRatingContainer>
          <StyledPricing>
            {trade_prices.map((price) => (
              <StyledPrice key={price.id} className={price.is_first ? "first" : ""}>
                <Typography as="p" className={price.selected ? "selected" : ""}>
                  ${price.price}.00
                </Typography>
                <span>{price.quantity} pcs</span>
              </StyledPrice>
            ))}
          </StyledPricing>

          {details.map((detail) => (
            <StyledDetails key={detail.id}>
              <DetailsContainer>
                {detail.content.map((row) => (
                  <StyledRow key={row.id}>
                    <StyledTitle>{row.title}:</StyledTitle>
                    <StyledDetail>{row.detail}</StyledDetail>
                  </StyledRow>
                ))}
              </DetailsContainer>
            </StyledDetails>
          ))}
        </MainDetails>
        <div>
          <CompanyDetails>
            <CompanyName>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="4" fill="#C6F3F1" />
                <path
                  d="M16.0085 34V13.6364H23.6449C25.2093 13.6364 26.5218 13.9081 27.5824 14.4517C28.6496 14.9953 29.455 15.7576 29.9986 16.7386C30.5488 17.7131 30.8239 18.8499 30.8239 20.1491C30.8239 21.455 30.5455 22.5885 29.9886 23.5497C29.4384 24.5043 28.6264 25.2434 27.5526 25.767C26.4787 26.2841 25.1596 26.5426 23.5952 26.5426H18.1562V23.4801H23.098C24.0128 23.4801 24.7618 23.3542 25.3452 23.1023C25.9285 22.8437 26.3594 22.4692 26.6378 21.9787C26.9228 21.4815 27.0653 20.8717 27.0653 20.1491C27.0653 19.4266 26.9228 18.8101 26.6378 18.2997C26.3527 17.7827 25.9186 17.3916 25.3352 17.1264C24.7519 16.8546 23.9995 16.7188 23.0781 16.7188H19.6974V34H16.0085ZM26.5284 24.7727L31.5696 34H27.4531L22.5014 24.7727H26.5284Z"
                  fill="#4CA7A7"
                  fill-opacity="0.6"
                />
              </svg>
              <div>
                <p>Supplier</p>
                <p>Guanjoi Trading LLC</p>
              </div>
            </CompanyName>
            <CompanyLocation>
              <div>
                <span></span>
                <p>Germany, Berlin</p>
              </div>
              <div>
                <MdOutlineVerifiedUser className="icon" />
                <p>Verified Seller</p>
              </div>
              <div>
                <TbWorld className="icon" />
                <p>Worldwide shipping</p>
              </div>
              <button>Send inquiry</button>
              <button>Seller's profile</button>
            </CompanyLocation>
          </CompanyDetails>
          <SaveLater>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.6602 3.99004C17.0202 2.19004 13.7602 3.03004 12.0002 5.09004C10.2402 3.03004 6.98021 2.18004 4.34021 3.99004C2.94021 4.95004 2.06021 6.57004 2.00021 8.28004C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27004C21.9402 6.57004 21.0602 4.95004 19.6602 3.99004ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.50004C4.00021 6.50004 5.50021 5.00004 7.50021 5.00004C9.04021 5.00004 10.5402 5.99004 11.0702 7.36004H12.9402C13.4602 5.99004 14.9602 5.00004 16.5002 5.00004C18.5002 5.00004 20.0002 6.50004 20.0002 8.50004C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                fill="#0D6EFD"
              />
            </svg>
            <span>Save for later</span>
          </SaveLater>
        </div>
      </StyledProductContainer>
    </Layout>
  );
};

export default ContentMain;
