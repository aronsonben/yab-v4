import './App.css';
import styled from 'styled-components';
import YABSearch from './YABSearch';
import Navbar from './Navbar';

const bizListTemp = [
  { alias: 'lapis-washington',
    categories: [{ alias: 'afghani', title: 'Afghan' }, { alias: 'cocktailbars', title: 'Cocktail Bars' }, { alias: 'halal', title: 'Halal' }],
    coordinates: { latitude: 38.9213, longitude: -77.04392 },
    display_phone: '(202) 299-9630',
    distance: 6213.657380054281,
    id: 'xeOXTasySvPyKTZC6-BxFQ',
    image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/B4kvI5MntU1BW9j1UDlrUw/o.jpg',
    is_closed: false,
    location: {
      address1: '1847 Columbia Rd NW', address2: '', address3: '', city: 'Washington, DC', country: 'US', display_address: ['1847 Columbia Rd NW', 'Washington, DC 20009'], state: 'DC', zip_code: '20009',
    },
    name: 'Lapis',
    phone: '+12022999630',
    price: '$$',
    rating: 4.5,
    review_count: 588,
    transactions: ['delivery', 'pickup'],
    url: 'https://www.yelp.com/biz/lapis-washington?adjust_creative=UBP9-ctBfIQcQ_5xVmk5UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=UBP9-ctBfIQcQ_5xVmk5UA',
  }, 
  { alias: 'fresh-afghan-cuisine-washington-dc',
    categories: [{ alias: 'afghani', title: 'Afghan' }, { alias: 'foodtrucks', title: 'Food Trucks' }],
    coordinates: { latitude: 38.8746332954787, longitude: -76.9945468381047 },
    display_phone: '(703) 283-5498',
    distance: 1622.8067571463273,
    id: 'VfH-ZFEoSD0MjRfi7C7-uA',
    image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/U-6dZGayxWxhNacqLc0AIA/o.jpg',
    is_closed: false,
    location: {
      address1: 'Navy Yard', address2: '', address3: '', city: 'Washington DC', country: 'US', display_address: ['Navy Yard', 'Washington DC, AL 20003'], state: 'AL', zip_code: '20003',
    },
    name: 'Fresh Afghan Cuisine',
    phone: '+17032835498',
    price: '$',
    rating: 5,
    review_count: 40,
    transactions: [],
    url: 'https://www.yelp.com/biz/fresh-afghan-cuisine-washington-dc?adjust_creative=UBP9-ctBfIQcQ_5xVmk5UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=UBP9-ctBfIQcQ_5xVmk5UA',
  }, 
  { alias: 'bistro-aracosia-washington',
    categories: [{ alias: 'afghani', title: 'Afghan' }, { alias: 'wine_bars', title: 'Wine Bars' }],
    coordinates: { latitude: 38.92493, longitude: -77.10172 },
    display_phone: '(202) 363-0400',
    distance: 10789.537728332898,
    id: '1JRBSzV2NEo-b72ZVm6qXg',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/YOLVQAu1MmBLb5fmlpCR_A/o.jpg',
    is_closed: false,
    location: {
      address1: '5100 MacArthur Blvd', address2: null, address3: '', city: 'Washington, DC', country: 'US', display_address: ['5100 MacArthur Blvd', 'Washington, DC 20016'], state: 'DC', zip_code: '20016',
    },
    name: 'Bistro Aracosia',
    phone: '+12023630400',
    price: '$$$',
    rating: 4.5,
    review_count: 227,
    transactions: ['delivery', 'pickup'],
    url: 'https://www.yelp.com/biz/bistro-aracosia-washington?adjust_creative=UBP9-ctBfIQcQ_5xVmk5UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=UBP9-ctBfIQcQ_5xVmk5UA',
  },
];

const categoriesTemp = [
  { alias: 'asian',
    id: 'asian1',
    title: 'Asian',
    parents: '',
    whitelist: '',
    blacklist: '',
  },
  { alias: 'halal',
    id: 'halal1',
    title: 'Halal',
    parents: '',
    whitelist: '',
    blacklist: '',
  },
  { alias: 'indian',
    id: 'indian1',
    title: 'Indian',
    parents: '',
    whitelist: '',
    blacklist: '',
  },
  { alias: 'thai',
    id: 'thai1',
    title: 'Thai',
    parents: '',
    whitelist: '',
    blacklist: '',
  },
]

const StyledApp = styled.div`
  background-color: rgb(217, 85, 80);
  min-height: 100vh;
  width: 100%;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  padding-bottom: 12px;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top);  
`;

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <YABSearch businessList={bizListTemp} categories={categoriesTemp} />
    </StyledApp>
  );
}

export default App;
