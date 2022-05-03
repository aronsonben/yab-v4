import styled from 'styled-components';
import SearchBar from './SearchBar';
import BusinessTable from './BusinessTable';

const StyledYABSearch = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
`;

const StyledContainer = styled.div`
  text-align: center;
`;

const Spacer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin-bottom: 40px;
`;

function YABSearch(props) {
  return (
    <StyledYABSearch className="YABSearch">
      <StyledContainer>
        <Spacer className="Spacer" />
        <SearchBar categories={props.categories} />
        <BusinessTable businessList={props.businessList} />
      </StyledContainer>
    </StyledYABSearch>
  );
}

export default YABSearch;
