import styled from 'styled-components';

const StyledSearchBar = styled.div`
  max-width: 480px;
  margin: auto;
`;

const StyledSearchContainer = styled.div`
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

const SearchForm = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SearchBoxItem = styled.div`
  margin: 5px;
`;

const SearchLabel = styled.label`
  display: block;
  margin: 20px 0 0;
  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const AddressBar = styled.input`
  border: solid 2px lightgray;
  margin: 5px 0px 0px;
  padding: 0px 12px;
  border-radius: 25px;
  font-size: 15px;
  height: 40px;
  width: 285px;
`;

const CategoryBar = styled.select`
  border: solid 2px lightgray;
  margin: 5px 0px 0px;
  padding: 0px 12px;
  border-radius: 5px;
  font-size: 15px;
  height: 40px;
  width: 300px;
`;

const SearchSubmit = styled.button`
  cursor: pointer;
  border: none;
  margin: 20px 0px 0px;
  padding: 0px 12px;
  border-radius: 4px;
  font-size: 22px;
  height: 55px;
  color: rgb(217, 85, 80);
  font-weight: bold;
  width: 200px;
  background-color: white;
  transform: translateY(6px);
  box-shadow: none;
  transition: color 0.5s ease-in-out 0s;
`;

function SearchBar(props) {
  return (
    <StyledSearchBar className="SearchBar">
      <StyledSearchContainer className="SearchContainer">
        <StyledHeader>
          Search
        </StyledHeader>
        <SearchForm className="SearchForm">
          <SearchBoxItem className="SearchBoxItem">
            <SearchLabel className="SearchLabel">Address:</SearchLabel>
            <AddressBar type="text" name="address" placeholder="123 Main St" />
          </SearchBoxItem>
          <SearchBoxItem className="SearchBoxItem">
            <SearchLabel className="SearchLabel">Category:</SearchLabel>
            <CategoryBar>
              {(props.categories).map((category) => (
                <option key={category.id} value={category.alias}>{category.title}</option>
              ))}
            </CategoryBar>
          </SearchBoxItem>
          <SearchBoxItem className="SearchBoxItem">
            <SearchSubmit type="submit">Submit</SearchSubmit>
          </SearchBoxItem>
        </SearchForm>
      </StyledSearchContainer>
    </StyledSearchBar>
  );
}

export default SearchBar;
