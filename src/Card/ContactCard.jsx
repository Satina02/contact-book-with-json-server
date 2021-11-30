import React, {useContext} from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { ContactsContext } from '../contexts/ContactsContext';

const ContactCard = ({item}) => {
    const { deleteContact } = useContext(ContactsContext)

    console.log('item', item);
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <Card style={{ width: '10rem'}}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Link to={`/all-contacts/${item.id}`}><Card.Title>{item.name}</Card.Title></Link>
                    <Card.Text>
                    <p>{item.phone}</p>
                    <p>{item.email}</p>
                    <img onClick={() => deleteContact(item.id)} style={{cursor:"pointer"}} width="30px" src="https://icon-library.com/images/delete-icon/delete-icon-14.jpg" alt="" />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContactCard;  