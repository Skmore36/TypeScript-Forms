import * as React from 'react';
import {Form} from 'react-bootstrap';
import {Note} from '../Models/note_model';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
//import {useRef} from 'react';
interface IcreateNotesProps {
    notes : Note[],
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const createNotes : React.FunctionComponent<IcreateNotesProps> = ({notes,setNotes}) => {
    const titleRef = React.useRef<HTMLInputElement>(null);
    const textRef = React.useRef<HTMLTextAreaElement>(null);
    const colorRef = React.useRef<HTMLInputElement>(null);
    const [error,setError] = React.useState<string>('');
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault()
        if(titleRef.current?.value === '' || textRef.current?.value === ''){
            return setError("Please Fillup all fields ");
        }
        setError('')
        setNotes([...notes,{
            id : (new Date()).toString(),
            title : (titleRef.current as HTMLInputElement).value,
            text : (textRef.current as HTMLTextAreaElement).value,
            color : (colorRef.current as HTMLInputElement).value,
            date : (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = '';
        (textRef.current as HTMLTextAreaElement).value = '';

    } 

    return (
    <>
        <h2>Create Notes</h2>
        {error && <Alert variant = 'danger'>{error}</Alert>}
        <Form className = 'mt-3 mb-3' onSubmit = {(e) => handleSubmit(e)}>
            <Form.Group className = 'mb-3' controlId = 'formBasicTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type = 'text' placeholder = 'Tile for Note' ref = {titleRef} />
            </Form.Group>
            
            <Form.Group className = 'mb-3' controlId = 'formBasicTitle'>
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder = 'Enter notes' as = 'textarea' rows = {3} ref = {textRef} />
            </Form.Group>
            
            <Form.Group className = 'mb-3' controlId = 'formBasicTitle'>
                <Form.Label htmlFor = 'colorInput'>Notes Color</Form.Label>
                <Form.Control type = 'color' id = 'colorInput' defaultValue = '#dfdfdfd' title = 'Enter your color' ref = {colorRef} />
            </Form.Group>
            <Button type = 'submit' variant = 'primary'>Submit</Button>
        </Form>
    </>
  )
};
export default createNotes;
