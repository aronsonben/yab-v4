import styled from 'styled-components';

const StyledNavbar = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
`;

const Navflex = styled.div`
  background-color: inherit;
  width: 100%;
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const AppHeader = styled.h1`
  display: inline-block;
  color: white;
  margin: 0px;
  padding: 10px 0px;
  font-size: 20px;
`;

const NavSet = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const NavButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.9;
  background: none rgba(255, 255, 255, 0.2);
  box-shadow: none;
  margin-left: 10px;
  font-size: 13px;
  padding: 8px 12px;
  min-width: 70px;
  border: none;
  color: white !important;
`;

const ButtonText = styled.div`
  display: block;
  // margin-left: 4px;
`;

function Navbar(props) {
  return (
    <StyledNavbar className="YABNav">
      <Navflex className="Navflex">
        <AppHeader>
          <a href="#">
            Yelp Search by Category
          </a>
        </AppHeader>
        <NavSet>
          <NavButton>
            <ButtonText>Report</ButtonText>
          </NavButton>
          <NavButton>
            <ButtonText>Setting</ButtonText>
          </NavButton>
          <NavButton>
            <ButtonText>Login</ButtonText>
          </NavButton>
        </NavSet>
      </Navflex>
    </StyledNavbar>
  );
}

export default Navbar;
