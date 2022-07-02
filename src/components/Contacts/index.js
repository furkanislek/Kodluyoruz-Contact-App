import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Furkan",
      phone_number: "123456"
    },
    {
      fullname: "Ahmet",
      phone_number: "857456"
    },
    {
      fullname: "Ayşe",
      phone_number: "954731"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div>
        <List contacts={contacts} />
        <Form addContact = {setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts