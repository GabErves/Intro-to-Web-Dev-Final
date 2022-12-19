import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Employee.css";


const Books = (props)=>{
    // const updateBook = (bookId)=>{
    //     props.setSelectedBook(bookId);

    // }


    return(
        <div className='top' style={{backgroundColor:"white", padding:"20px 10px"}}>
            <h3>Employee Overview Info</h3>
        {props.data.map(book =>{

        return (
        <Container className='center'>
        <Row>
        
        <Col><Card key={book.id} style={{ width: '18rem'}}>
            <Card.Img variant="top" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_629285904_382703.jpg" />
            <Card.Body>
              <Card.Title> {book.name}</Card.Title>
              <Card.Text>
              Department: {book.department}
              <br></br>
              Employee ID: {book.id}
             
              </Card.Text>
              <Button  key={book.id} style={{cursor:'pointer'}} onClick={()=>{props.setSelectedBook(book.id)}} variant="primary">More info</Button>
            </Card.Body>
            {/* <Card 
            key={book.id}
            onClick={()=>{ props.setSelectedBook(book.id)}} style={{cursor:'pointer'}} role="button">{book.name} in {book.department}, ID: {book.id}</Card> */}

          </Card></Col>
        
            
        </Row>
        </Container>
        
            
        )
      
    })}</div>

    )
    
    
}
export default Books; 