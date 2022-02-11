import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import creatorBrandExchange from './marktrade_creator_brand_exchange.svg'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import MarkTradeWebTheme from './MarkTradeWebTheme'
import markTradeLogo from './marktrade_logo_2.svg'
import { ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar';

function App() {
  const explainerTextStyle = {
    color: "#000000"
  }

  const explainerTextHighlightStyle = {
    color: "#000080"
  }

  const logoStyle = {
    width: "10%",
    height: "10%"
  }

  const creatorBrandExchangeStyle = {
    width: "70%",
    height: "70%"
  }

  const gridStyle = {
    margin: "72px"
  }

  const gridItemStyleCenter = {
    textAlign: 'center'
  }

  const gridItemStyleLeft = {
    textAlign: 'left'
  }

  const gridItemStyleRight = {
    textAlign: 'right'
  }

  return (
    <ThemeProvider theme={MarkTradeWebTheme}>
    <div className="App">
  
      <Grid container spacing={2} sx={gridStyle}>
        
        <Grid item xs={12}>
        <AppBar className={AppBar} position="static">
              <Toolbar disableGutters>
                <img className="markTradeLogo" style={logoStyle} src={markTradeLogo} alt="This is the MarkTrade logo image"/>
              </Toolbar>
          </AppBar>
        </Grid>

        <Grid item style={gridItemStyleCenter}>
          <h1 style={explainerTextStyle}>
            <span style={explainerTextHighlightStyle}>MarkTrade</span> decentralizes NFT intellectual property and licensing.
          </h1>
        </Grid>

        <Grid item style={gridItemStyleLeft} xs={4}>
          <p>
            <h1 style={explainerTextStyle}> <span style={explainerTextHighlightStyle}>MarkTrade</span> is a community and marketplace where NFT creators and 
            brand owners meet to exchange unique proofs of identity and IP ownership called <span style={explainerTextHighlightStyle}>Marks</span>.</h1>
          </p>
        </Grid>
        <Grid item xs={8}>
          <img className="creatorBrandExchange" style={creatorBrandExchangeStyle} src={creatorBrandExchange} alt="Creators and brands can exchange Marks"/>
        </Grid>

        <Grid item xs={8}>
        </Grid>
        <Grid item style={gridItemStyleRight} xs={4}>
          <p>
          <h1 style={explainerTextStyle}>Brand owners and holders of copyright for NFT artwork apply to trade on <span style={explainerTextHighlightStyle}>MarkTrade</span> which then verifies their IP ownership and issues their own <span style={explainerTextHighlightStyle}>Mark</span>.</h1>
          </p>
        </Grid>

        <Grid item style={gridItemStyleLeft} xs={4}>
          <p>
            <h1 style={explainerTextStyle}><span style={explainerTextHighlightStyle}>Mark</span> can then endorse NFTs with their <span style={explainerTextHighlightStyle}>Mark</span> by trading with other holders on <span style={explainerTextHighlightStyle}>MarkTrade</span>.</h1>
          </p>
        </Grid>
        <Grid item xs={8}>
          <img className="creatorBrandExchange" style={creatorBrandExchangeStyle} src={creatorBrandExchange} alt="Creators and brands can exchange Marks"/>
        </Grid>

        <Grid item xs={8}>

        </Grid>
        <Grid item style={gridItemStyleRight} xs={4}>
          <p>
          <h1 style={explainerTextStyle}><span style={explainerTextHighlightStyle}>Mark-bearing</span> NFTs can then be checked using <span style={explainerTextHighlightStyle}>MarkTrade</span> to confirm their authenticity.</h1>
          </p>
        </Grid>
      </Grid>

    </div>
    </ThemeProvider>
  );
}

export default App;
