import styled from 'styled-components';
export const DealesandOfferTable = styled.div`
display:grid;
width:87%;
margin:50px 94px;
border-radius:10px;
grid-template-columns:2fr repeat(5,1fr);
.item{
  flex:1;
  padding:23px;
  text-align:center;
  border:1px solid ${(props) => props.theme.colors.gray300};
  border-radius: 2px;
}
.item-double{
  flex:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  .deal{
    display:flex;
    margin-left:-110px;
    flex-direction:column;
    align-items:center;
  p{
    margin-left:-40px;
  }
  }
  h4{
    margin:0;
    margin-bottom:-5px;
    font-family: 'Inter', sans-serif;
  }
}
img{
  width:150px;
  height:130px;
}
p{
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: ${(props) => props.theme.colors.dark};
  margin-top:10px;
  margin-bottom:10px;
}
span{
  color: #EB001B;
  display: inline-flex;
  height: 28px;
  padding: 3px 17px 4px 17px;
  justify-content: center;
  align-items: center;
  border-radius: 29px;
  background: #FFE3E3;
}

`