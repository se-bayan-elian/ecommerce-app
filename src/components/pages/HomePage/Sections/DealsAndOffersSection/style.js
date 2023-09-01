'use client'
import styled from 'styled-components';
export const DealesandOfferTable = styled.div`
display:flex;
border-radius:10px;
background-color: ${props => props.theme.colors.whiteColor};
border:1px solid ${(props) => props.theme.colors.gray300};
margin-bottom:25px ;
.left-box{
  width: 281px;
  .time-left{
    display : flex;
    gap : 5px;
    justify-content: center;

}
.deal-info{
  padding : 20px 15px;

}
.deals-desc{
  margin-bottom: 20px;
}
}
.deals-boxes{
  width :calc(100% - 281px);
  display: flex;
.item{
  padding:10px;
  text-align:center;
  border:1px solid ${(props) => props.theme.colors.gray300};
  border-radius: 2px;
  flex:1;
}
.item-double{
  flex:2;
  padding-left : 20px;
  .deal{
  .deals-desc{
    margin-bottom:20px;
  }
  }

}
.product-img{
  width:150px;
  height:130px;
  margin-bottom: 11px;
}
.product-name{
  font-weight : 400;
  margin-bottom:7px;
}
.discount{
  display: inline-block;
  height: 28px;
  padding: 3px 17px 4px 17px;
  justify-content: center;
  align-items: center;
  border-radius: 29px;
  font-weight:bold;
  ${props => `
    color: ${props.theme.colors.baseColorRed};
    background-color: ${props.theme.colors.baseColorRed100};
  `}
}
}


`