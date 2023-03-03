import React,{useState} from 'react';
import './App.css';
import {Note} from './Models/note_model';
import Header from './Components/Header';
import NotesList from './Components/NotesList';
import {Container,Col,Row} from 'react-bootstrap';
import CreateNotes from  './Components/createNotes';

function App() {
  const [notes,setNotes] = useState<Note[]>([{
    id : (new Date).toString(),
    title : "Events",
    text : "New events and organization",
    color : "#dfdfdfdf",
    date : (new Date).toString()
  }]);
  const changeName = () =>{
     
  }
  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes = {notes} setNotes = {setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes = {notes} setNotes = {setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
