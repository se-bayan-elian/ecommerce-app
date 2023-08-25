import styled from 'styled-components';
export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 90px;
`;
export const StyledSearchPart = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 2px solid #0D6EFD;
  border-radius: 10px;
  padding: 10px 100px;
  height:25px;
  .categorey{
    position:relative;
    margin-right:-190px;
    margin-left:190px;
  }
`;
export const StyledTextInput  = styled.div`
border:none;
position:relative;
display:flex;
align-items:center;
width:190px;
height:50px;
 input{
  border:none;
  padding:6px;
  width:400px;
  margin-left:-90px;
  margin-right:-70px;
  font-size:16px;
 }
 button{
  color:white ;
  width:160px;
  background:#0D6EFD;
  border-radius:5px;
  font-size:16px;
  text-align:center;
  position:relative;
  height:47px;
  margin-left:202px;
  margin-right:-70px;
  border-radius: 10px;
}
`;
export const StyledIconsPart = styled.div`
  display: flex;
  gap: 20px;
`;
export const First = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
`;

export const TextInput = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  `;

  export const StyledLabel = styled.label`
  font-family: 'Inter', sans-serif;
  color: #8B96A5;
  margin-top:5px;
`;

export const Button = styled.button`
  background-color: #0D6EFD;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SecondPartHead = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 60px;
  margin-bottom:-10px;
  margin-top:-10px;
  .second{
    margin-left:170px;
    margin-right:-170px
  }
`;
export const FirstDiv = styled.div`
margin-left:-180px;
display:flex;
align-items:center;
font-size:18px;
`;
export const SecondDiv = styled.div`
margin-right:-20px;
`;
export const hrStyle = styled.hr`
color:#8B96A5;
`;
export const Line = styled.div`
color:#8B96A5;
height:68px;
font-size:52px;
width:1px;
`;

export const StyledSelectInputContainer = styled.div`
  position: relative;
  width: fit-content;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  padding: 5px;
`;

export const StyledSelect = styled.select`
  /* Apply the existing styles from .headSelect select, .help select, etc. */
  border: none;
  background-color: transparent;
  padding: 0px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  margin-left: 20px;
  width: 100%;
`;


export const OptionWithImage=styled.div`
display:felx;
align-items:center;
`
export const FooterContainer = styled.div`
bottom:0;
`
export const FooterFirstContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:0px;
  margin:0 0px;
  .first{
    p{
      font-family: 'Inter', sans-serif;
      font-size:18px;
      line-height: 1.4;
      letter-spacing: 0.7px;
    }
    img{
      margin-right:10px;
    }
  }
`;
export const UlListDiv =styled.div`
display:flex;
felx-direction:column;
align-items:center;
margin-left :0px;
justify-content:space-between;
ul{
  list-style:none;
  font-family: 'Inter', sans-serif;
  color: #8B96A5;
  margin-right:90px;
  font-size:17px;
}
ul li{
  padding:4px  7px;
  margin-top:-5px;
  margin-bottom:5px;
  margin-left:-30px
}
h3{
  font-size:17px;
  margin:0 18px;
  font-family:'Inter', sans-serif;
}
`;
export const StoreStyle = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-left:-160px;
margin-top:-30px;
h2{
  font-family:'Inter', sans-serif;
  font-size:18px;
}
img{
  margin-top:10px;
}
`;
export const SecondFooter =styled.div`
display:flex;
position:relative;
align-items:center;
height:20px;
border-top: 1px solid var(--gray-300, #E3E8EE);
background: var(--gray-200, #EFF2F4);
justify-content:space-around;
padding:20px;
width:98%;
p{
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #8B96A5;
  margin: 0 900px 0 -60px; /* Remove default margin */
}
`;