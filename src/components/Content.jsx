import React from 'react';

/**
 * Import the desired form component in this class and display it inside the tapp content
 */
import TemplateForm  from './forms/TemplateForm.jsx';


export default class Content extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * This method calls the submit function of the form, which was provided as a prop.
     * It can be used as an alternative to the form button. Hide the form button with the prop hideButton set to true.
     */
    submitForm(){
        this.form.onSubmit();
    }

    /**
     * This function will be set as submit prop for the TemplateForm-element
     */
    onSubmit(supportObj) {
        console.log(supportObj)
        if(supportObj.radio != 'KFZ'){
        chayns.intercom.sendMessageToPage({
            text: supportObj.Vorname + ' ' + supportObj.Nachname + ' hat einen Schaden gemeldet.\nEmail: ' + supportObj.Email + '\nTelefon: ' + supportObj.Telefon + '.\nGeschädigter: ' + supportObj.VornameGeschädigter + ' ' + supportObj.NachnameGeschädigter +  '\nOrt an dem der Schaden entstanden ist: ' + supportObj.Ort + '\nDatum an dem der Schaden entstanden ist: ' + supportObj.Datum + '\nSchadensart: ' + supportObj.radio + '\nAnmerkung: ' + supportObj.Anmerkung 
        });
        }else{
           chayns.intercom.sendMessageToPage({
            text: supportObj.Vorname + ' ' + supportObj.Nachname + ' hat einen Schaden gemeldet.\nEmail: ' + supportObj.Email + '\nTelefon: ' + supportObj.Telefon + '.\nGeschädigter: ' + supportObj.VornameGeschädigter + ' ' + supportObj.NachnameGeschädigter + '\nOrt an dem der Schaden entstanden ist: ' + supportObj.Ort + '\nDatum an dem der Schaden entstanden ist: ' + supportObj.Datum + '\nSchadensart: ' + supportObj.radio + '\nAnmerkung: ' + supportObj.Anmerkung + '\nFabrikat und Typ: ' + supportObj.Fabrikat + '\nKennzeichen des Geschädigten: ' + supportObj.Kennzeichen + '\nArt des KFZ-Schadens: ' + supportObj.Schadensart + '\nSchuld: ' + supportObj.Schuld.name + '\n Wurde der Unfall aufgenommen? ' + supportObj.Unfallaufgenommen + '\nWildunfall: ' + supportObj.Wildunfall
        });  
        }
        chayns.dialog.alert('', 'Sie haben erfolgreich Ihren Schaden gemeldet. Wir bearbeiten Ihre Meldung so schnell wie möglich');
    }

    render() {
        return (
            <div className="tapp__content content">
                <TemplateForm ref={ref => {this.form = ref}} submit={res => { this.onSubmit(res)}} />
            </div>
        );
    }
}