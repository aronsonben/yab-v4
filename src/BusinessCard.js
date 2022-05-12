import styled from 'styled-components';

const StyledBusinessCard = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 10px;
`;

/* *** Business Image *** */
const ImageHolder = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const BusinessImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* *** Business Info *** */
const InfoHolder = styled.div`
  flex: 2 1 auto;
  min-height: 100px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px;
`;

const BusinessName = styled.h3`
  margin: 0 2px 5px 2px;
  // font-size: 25px;
`;

const BusinessInfo = styled.span`
  font-size: 12px;
  margin: 0px 0px 3px 0px;
`;

const Category = styled.div`
  background: red;
  border-radius: 25px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 11px;
  margin: 0 2px;
  cursor: pointer;
`;

const CategoryHolder = styled.div`
  display: flex;
`;

/* *** Business Actions *** */
const ActionHolder = styled.div`
  min-height: 100px;
  min-width: 100px;
`;

const ActionButton = styled.div`
  cursor: pointer;
  margin: 0px 0px 5px 0px;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 13px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 10px;
`;

function BusinessCard(props) {
  return (
    <StyledBusinessCard className="BusinessCard">
      <ImageHolder className="ImageHolder">
        <BusinessImage src={props.business.image_url} alt={props.business.name} />
      </ImageHolder>
      <InfoHolder className="InfoHolder">
        <BusinessName className="BusinessName">{props.business.name}</BusinessName>
        <BusinessInfo>Rating: {props.business.rating}</BusinessInfo>
        <BusinessInfo>Price: {props.business.price}</BusinessInfo>
        <CategoryHolder className="CategoryHolder">
          {props.business.categories.map((category) => (
            <Category key={category.alias}>{category.title}</Category>
          ))}
        </CategoryHolder>
      </InfoHolder>
      <ActionHolder className="ActionHolder">
        <ActionButton>Directions</ActionButton>
        <ActionButton>Yelp</ActionButton>
      </ActionHolder>
    </StyledBusinessCard>
  );
}

export default BusinessCard;
