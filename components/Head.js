import styled from 'styled-components';

const Logo = styled.h1`
  outline: 1px dashed #98abb9;
  outline-offset: -5px;
  background-color: blueviolet;
  padding-left: 15px;
  margin-top: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  color: #FFF;
  -webkit-box-shadow: 2px 2px 2px #000;
  -moz-box-shadow: 2px 2px 2px #000;
  box-shadow: 2px 2px 2px #000;
  @media (max-width: 1300px) {
    text-align: center;
  }
`;

const Meta = () => (
  <div>
    <Logo suppressClassNameWarning>
      MBL
    </Logo>
  </div>
)

export default Meta;