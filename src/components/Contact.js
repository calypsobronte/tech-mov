import React, { Component } from 'react';
import firebase, { initializeApp } from 'firebase';
import { DB_CONFIG } from '../Config/config'
import 'firebase/database'

class Contact extends Component {
    constructor(props){
        super(props);
        this.addContact = this.addContact.bind(this);
        this.handleOptionChangeLider = this.handleOptionChangeLider.bind(this);
        this.handleOptionChangeComunidad =this.handleOptionChangeComunidad.bind(this);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('Contacts');
        this.state = {
            selectedOptionLider : 'No',
            selectedOptionComunidad : 'No'
        };
    }

    addContact(e){
        this.db.push().set({
            name:this.textname.value,
            email: this.textemail.value,
            lider: this.state.selectedOptionLider,
            comunidadLider: this.textComunidadLider.value,
            comunidad: this.state.selectedOptionComunidad,
            comunidadPertenece: this.textComunidadParticipa.value,
            saludo: this.saludo.value}).then((data) => {console.log('data ',data)}).catch((error)=>{console.log('error ',error)});
        alert("Ya tenemos tu información");
    }

    handleOptionChangeLider(event) {
        this.setState({
            selectedOptionLider:event.target.value
          });
        if(event.target.value=="Si")
        {
            this.textComunidadLider.readOnly=false;
        }else
        {
            this.textComunidadLider.readOnly=true;
        }
    }

    handleOptionChangeComunidad(event)
    {
        this.setState({
            selectedOptionComunidad:event.target.value
          });
        if(event.target.value=="Si")
        {
            this.textComunidadParticipa.readOnly=false;
        }else
        {
            this.textComunidadParticipa.readOnly=true;
        }
    }
    render() {
        return(
            <div><br /><br /><br />
                <form>
                    <input type="text" placeholder="Hola. ¿Cuál es tu nombre?" ref={input => {this.textname = input;}}></input>
                    <br /><input type="text" placeholder="Escríbenos tu Email" ref={input => {this.textemail = input;}}></input>
                    <h4>¿Eres un lider de Meetup o Comunidad Tech?</h4>
                    <input type="radio" name="lider" value="Si" checked={this.state.selectedOptionLider === 'Si'}
                    onChange={this.handleOptionChangeLider}/>Sí, soy un líder
                    <input type="radio" name="lider" value="No" checked={this.state.selectedOptionLider === 'No'}
                    onChange={this.handleOptionChangeLider}/>No, aún no.
                    <input type="text" placeholder="Nombre de tu Comunidad?" 
                    ref={input => {this.textComunidadLider = input;}}></input>
                    <h4>¿Participas en alguna Comunidad Tech?</h4>
                    <input type="radio" name="comunidad" value="Si" checked={this.state.selectedOptionComunidad === 'Si'}
                    onChange={this.handleOptionChangeComunidad}/>Sí, soy muy activ@
                    <input type="radio" name="comunidad" value="No" checked={this.state.selectedOptionComunidad === 'No'}
                    onChange={this.handleOptionChangeComunidad}/>No, aún no :(
                    <input type="text" placeholder="En cuál o cuáles comunidades participas?" 
                    ref={input => {this.textComunidadParticipa = input;}}></input><br />
                    <textarea placeholder="Quieres saludarnos? Escríbenos aquí..." ref={input => {this.saludo = input;}}></textarea>
                    <br /><button onClick={this.addContact}>ENVIAR!</button>
                </form>
            </div>
        );
    }
}
export default Contact;