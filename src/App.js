import TopNav from './components/TopNav'
import LeftNav from './components/LeftNav';
import ContentContainer from './components/ContentContainer';
import { UserContextProvider } from './Context/UserContext'
import { ProductsContextProvider } from './Context/ProductsContext'


const style = {
  display: "flex",
}


function App() {



  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <div className="App">
          <TopNav></TopNav>
          <section style={style}>
            <LeftNav></LeftNav>
            <ContentContainer></ContentContainer>
          </section>
        </div>
      </ProductsContextProvider>
    </UserContextProvider>

  );
}

export default App;
