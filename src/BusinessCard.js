import './App.css';

function BusinessCard(props) {
  return (
    <div className="BusinessCard">
      <span>{props.business.name}</span>
    </div>
  );
}

export default BusinessCard;
