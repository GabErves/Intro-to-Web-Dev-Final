import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./IndividualEmployee.css";
const Book = (props)=>{
    
    return (
    
    
    <div style={{backgroundColor: '#FFF', color:'#000', padding:'20px 30px'}}>
        <h3>Indvidual Employee Info</h3>
         <Card style={{ width: '18rem', marginLeft:'560px' }} className='center'>
      <Card.Img style={{height:"300px", width:"287px"}} src={props.data.photo} variant="top" />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
        Start Date: {props.data.startDate}
        <br></br>
        Department: {props.data.department}
        <br></br>
        Role: {props.data.role}
        </Card.Text>
        <Button onClick={props.resetState} variant="primary">Back to List</Button>
      </Card.Body>
    </Card>
        {/* <h1>{props.data.name}</h1>
        <p>Start Date: {props.data.startDate}</p>
        <p>Department: {props.data.department}</p>
        <p>Role: {props.data.role}</p>
        <img style={{height:"300px", width:"300px"}} src={props.data.photo}></img>
        <Button onClick={props.resetState}>Back to list</Button>  */}
    </div>)
}
export default Book;  