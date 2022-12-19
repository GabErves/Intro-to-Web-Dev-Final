
import './App.css';
import Books from './components/Employee';
import Book from './components/IndividualEmployee';
import Loading from './components/Loading';
import Error from './components/Error';
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(false);
  

  const resetState = () =>{
    getBookData();
    setBookData([]);
    setSelectedBook(null);
    setLoading(true);
    setError(false);

  }


  const getBookData = (id=null) =>{
    setLoading(true);
    // let individualData = false;
    let actualId = "";

    
    if(!!id && parseInt(id,10)>0){
      actualId = parseInt(id,10)
    }
    // if(!!id){
    
    //  individualData = true;
    // }



    axios
    .get(`https://api.matgargano.com/employees/${actualId}`)
    .then(response =>{
      setBookData(response.data);
      setLoading(false);
    })
    .catch((error) =>{
      setError(error.message || "No error given");
      console.log(error.message);
    })

  };

  // const toggleLoading = () =>{
  //   setLoading(!loading)
  // }
useEffect(() =>{
  getBookData();
}, []);

useEffect(() =>{
  if(!!selectedBook){
    getBookData(selectedBook);

  }
  
}, [selectedBook]);





  return (
    <div className="App">
      <h1>Employee Directory</h1>

      {!!error && <Error resetState={resetState} message={error}/>}
      {!error && <>
        {!!loading && <Loading/>}
        {!loading && (
        <div>
        
        {!selectedBook && <Books setSelectedBook={setSelectedBook} data={bookData}/>}


        {!!selectedBook && <Book resetState={resetState} data={bookData} />}
        
          
          </div>
          )}
      
        
        </>}
      
      
    </div>
  );
}

export default App;
