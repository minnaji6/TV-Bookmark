import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FetchCardsHome from './FetchCardsHome';
import ShowsPage from './ShowsPage';
import ShowListing from './ShowListing';

function Home() {
  return (
    <>
    <FetchCardsHome/>
    <ShowsPage/>
    <ShowListing/>
    </>
  );
}

export default Home;
