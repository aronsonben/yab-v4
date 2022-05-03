import styled from 'styled-components';
import BusinessCard from './BusinessCard';

const StyledBusinessTable = styled.div`
  max-width: 480px;
  margin: auto;
`;

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 0px 30px;
  border-radius: 6px;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledHeader = styled.h3`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
`;

const ListingContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledListing = styled.ul`
  color: white;
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  color: white;
  background-color: rgba(255,255,255,0.1);
  padding: 20px 0px;
  border-radius: 6px;
  margin-bottom: 20px;
  width: 100%;
`;

function BusinessTable(props) {
  return (
    <StyledBusinessTable className="BusinessTable">
      <StyledContainer>
        <StyledHeader>Business Listing</StyledHeader>
        <ListingContainer>
          <StyledListing className="StyledListing">
            {(props.businessList).map((biz) => (
              <StyledListItem key={biz.alias} className="StyledListItem">
                <BusinessCard business={biz} />
              </StyledListItem>
            ))}
          </StyledListing>
        </ListingContainer>
      </StyledContainer>
    </StyledBusinessTable>
  );
}

export default BusinessTable;
