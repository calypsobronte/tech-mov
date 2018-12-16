import React, { Component } from 'react';
import firebase, { initializeApp } from 'firebase';
import { DB_CONFIG } from '../Config/config.js'
import 'firebase/database'


const TableRow = ({id, name, email, Lider, comunidadLider,comunidad,comunidadPertenece,saludo}) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{Lider}</td>
        <td>{comunidadLider}</td>
        <td>{comunidad}</td>
        <td>{comunidadPertenece}</td>
        <td>{saludo}</td>
      </tr>
    );
  }

class ContactList extends Component {
    constructor(props){
        super(props);
        this.app =  firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('Contacts');
        this.state = {Conctats: []}
    }

    componentDidMount() {
		const { Conctats } = this.state;
		this.db.on('child_added', snap => {
			Conctats.push({
				ContactId: snap.key,
				ContactName: snap.val().name,
                ContactEmail: snap.val().email,
				ContactLider: snap.val().Lider,
				ContactLiderComunidad: snap.val().comunidadLider,
				ContactComunidad: snap.val().comunidad,
                ContactComunidadPertenece: snap.val().comunidadPertenece,
                ContactSaludo: snap.val().saludo
			});
			this.setState({Conctats});
		});
    }

    
    
    render() {
        return (
          <table>
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>¿Es Lider?</th>
                <th>Comunidad Lider</th>
                <th>¿Pertenece a una comunidad?</th>
                <th>Comunidad Pertenece</th>
                <th>Saludo</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.Conctats.map(Conctat => {
                        return (
                            <TableRow
                            key={Conctat.ContactId} 
                            id={Conctat.id} 
                            name={Conctat.ContactName}
                            email={Conctat.ContactEmail} 
                            Lider={Conctat.ContactLider} 
                            comunidadLider={Conctat.ContactLiderComunidad}
                            comunidad = {Conctat.ContactComunidad}
                            comunidadPertenece ={Conctat.ContactComunidadPertenece}
                            saludo ={Conctat.ContactSaludo} 
                            />    
                        )
                    })
                }
            </tbody>
          </table>
        );
      }
}

export default ContactList;
