import React from 'react';
import './style.css';


/**
 * Import the desired components
 */
import { Input } from 'tobit-chayns_components/react-chayns-input';
import { Checkbox } from 'tobit-chayns_components/react-chayns-checkbox'
import { SelectButton } from 'tobit-chayns_components/react-chayns-selectbutton';
import Textarea from 'tobit-chayns_components/react-chayns-textarea';

export default class TemplateForm extends React.Component {

    static propTypes = {
        submit: React.PropTypes.func.isRequired,
        hideButton: React.PropTypes.bool
    };

    constructor() {
        super();
        /**
         *  Set form properties as object.
         *  Use the component event handlers to update these properties.
         *  The properties will be validated by the components themselves.
         */
        this.form = {
            Vorname: null,
            Nachname: null,
            Email: null,
            Telefon: null,
            VornameGeschädigter: null,
            NachnameGeschädigter: null,
            radio: 'Sonstiger Schaden',
            Anmerkung: 'keine Anmerkung',
            Ort: null,
            Datum: null,
            Fabrikat: 'keine Angaben',
            Kennzeichen: 'keine Angaben',
            Schadensart: 'keine Angaben',
            Wildunfall: 'Nein',
            Unfallaufgenommen: 'Nein',
            Schuld: 'keine Angaben',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * This method will be called when the submit button gets clicked and checks whether all properties set in the state got a value.
     * You can add additional security checks here.
     * Remember that some elements (like inputs) have their own methods to highlight those errors (See their documentation for more information).
     * If yes, the method onValid will be called. If no, onInvalid will be called.
     */
    onSubmit() {
        this._submit.classList.add('button--disabled');
        location.reload();
        if (this.isValid())
            this.props.submit ? this.props.submit(this.form) : null;
    }

    valueRadio() {
        if (this.refs.r1.checked) {
            this._kreditkarte.classList.remove('hidden')
        } else { this._kreditkarte.classList.add('hidden') }
        if (this.refs.r2.checked) {
            this._paypal.classList.remove('hidden')
        } else { this._paypal.classList.add('hidden') }
        if (this.refs.r3.checked) {
            this._sofortüberweisung.classList.remove('hidden')
        } else { this._sofortüberweisung.classList.add('hidden') }
        if (this.refs.r4.checked) {
            this._überweisung.classList.remove('hidden')
        } else { this._überweisung.classList.add('hidden') }
        if (this.refs.r1.checked) this.setValue('radio', this.refs.r1.value)
        else if (this.refs.r2.checked) this.setValue('radio', this.refs.r2.value)
        else if (this.refs.r4.checked) this.setValue('radio', this.refs.r4.value)

    }

    /**
     * Checks whether all required properties are set.
     * ( Strings are secured via the regExp on the input elements )
     */
    isValid() {
        let valid = true;
        Object.keys(this.form).forEach((key) => {
            if (this.form[key] === null)
                valid = false;
        });
        return valid;
    }

    /**
     * Adds a value to the form object. If the form is valid the button will get enabled in case it is not hidden.
     */
    setValue(key, value) {

        if (key == 'Wildunfall' || key == 'Unfallaufgenommen') {
            if (value) {
                value = 'Ja';
            } else {
                value = 'Nein';
            }
        }
        this.form[key] = value;
        if (this.isValid())
            this._submit.classList.remove('button--disabled');
    }

    render() {
        let osList = [
            {
                id: 1,
                name: 'Geschädigter trägt keine Mitschuld'
            },
            {
                id: 2,
                name: 'Geschädigter trägt Teilschuld'
            },
            {
                id: 3,
                name: 'Geschädigter trägt volle Schuld'
            }
        ];





        return (
            <div className="accordion">
                <div className="accordion__head">Konto-Typ<p className="badge" style={{ float: 'right' }}>Just Cash</p></div>
                <div className="accordion__body">
                    <div className="accordion__intro">Wähle die Zahlungsart aus, mit der Du Dein Konto aufladen möchtest, wenn Du auf dieser Seite etwas kaufen möchtest.</div>
                    <div className="accordion__content">

                        <div className='table'>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r1' value='Kreditkarte' id='radio1w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio1w47653'>
                                            <div className='input0'  >Kreditkarte
                    </div>
                                        </label>
                                    </span>
                                    <div className='hidden' ref={ref => { this._kreditkarte = ref; } }>
                                        
                                    <div className="radio-content wrapper creditcard active">
                                    <div className="table">
                                    <div className="table__row">
                                    <div className="table__cell table-cell-creditcardnumber">
                                    <div className="input-group">
                                    <Input type="text" placeholder='Kartennummer' regExp='/^[a-zA-Z ]+$/' responsive='true' className="input opm-input" value="" required="" />
                                    </div>
                                    </div>
                                    <div className="table__cell credit-card-images-wrapper">
                                    <span>
                                    <div className="credit-number-visa credit-card-images credit-card-visa">
                                    </div></span><span>
                                    <div className="credit-number-master-card credit-card-images credit-card-mc">
                                    </div></span><span>
                                    <div className="credit-number-amex credit-card-images credit-card-amex">
                                    </div></span></div></div></div><div className=""><div className="input-group">
                                    <Input type="text" placeholder='CVC' responsive='true' className="input opm-input" value="" required="" />
                                    </div>
                                    </div>
                                    <div className="input-creditCardOwner">
                                    <div className="input-group">
                                    <Input type="text" placeholder='Karteninhaber' responsive='true' className="input opm-input" value="" required="" />
                                    </div></div>
                                    <div className="creditcard-date-wrapper">
                                    <span className="creditcard-span">Gültig bis:</span>
                                    <div className="creditcard-choosebutton-wrapper">
                                    <button className="choosebutton credit-input choose-month">Monat</button>
                                    <button className="choosebutton credit-input choose-year">Jahr</button>
                                    </div></div>
                                    <div className="text--center">
                                    <button className="button save-creditcard-button button--disabled">Speichern</button>
                                    <button className="button">Löschen</button></div></div>

                                 </div>
                                </div></div>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r2' value='PayPal' id='radio2w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio2w47653'>
                                            <div className='input1' name='fehler' >PayPal
                    </div>
                                        </label>
                                    </span>
                                    <div className='hidden' ref={ref => { this._paypal = ref; } }>
                                        <div className="paypal-image"></div>
                                        Beim Aufladen per PayPal wirst Du auf die Webseite von PayPal weitergeleitet, auf der Du Dich mit Deinem Account anmelden und die Aufladung bestätigen kannst.
                                    <div className="save-button-container"><button className="button">Speichern</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r3' value='Sofortüberweisung' id='radio3w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio3w47653'>
                                            <div className='input2'>Sofortüberweisung
                    </div>
                                        </label>
                                    </span>
                                    <div className='hidden' ref={ref => { this._sofortüberweisung = ref; } }>
                                        <div className="sofort-image"></div>
                                        Beim Aufladen per Sofortüberweisung wirst Du auf die Webseite des Anbieters weitergeleitet, auf derDu Dich mit Deinem Account anmelden und die Aufladung bestätigen kannst.
                                    <div className="save-button-container"><button className="button">Speichern</button></div>
                                    </div>
                                </div></div>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r4' value='Überweisung' id='radio4w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio4w47653'>
                                            <div className='input3' >Überweisung
                    </div></label></span>
                                    <div className='hidden' ref={ref => { this._überweisung = ref; } }>
                                        <div>Du kannst Dein chayns® Konto auch direkt per Überweisung aufladen. Überweise den Betrag dazu einfach an das folgende Konto. Das Geld wird Dir dann automatisch gutgeschrieben. </div>
                                        <div className="table">
                                            <div className="table__row" name="accOwner">
                                                <div className="table__cell">Kontoinhaber
                                    </div>
                                                <div className="table__cell">chayns ® OPM GmbH
                                    </div>
                                            </div>
                                            <div className="table__row">
                                                <div className="table__cell">IBAN</div>
                                                <div className="table__cell">DE81401640240508508202</div>
                                            </div>
                                            <div className="table__row"><div className="table__cell">BIC</div>
                                                <div className="table__cell">40164024</div>
                                            </div>
                                            <div className="table__row">
                                                <div className="table__cell">Verwendungszweck
                                    </div>
                                                <div className="table__cell">PID126-63951
                                    </div></div></div> </div></div></div></div>



                    </div>


                </div>


<div data-reactroot="" className="accordion person-info" data-group="1">
<div className="accordion__head">Persönliche Daten</div>
<div className="accordion__body">
<div className="accordion__content">
<div className="table">
<div className="table__row">
<div className="table__cell name-cell">
<div className="input-wrapper">
<div className="input-group">
<Input type="text" placeholder='Vorname' responsive='true' className="input opm-input valid" value="" required="" />
</div>
<div className="input-group">
<Input type="text" placeholder='Nachname' responsive='true' className="input opm-input valid" value="" required="" />
</div></div></div>
<div className="table__cell">
<div className="profile-pic" style={{backgroundImage:'&quot;https://graph.facebook.com//picture?width=100&amp;height=100&amp;1491575913293&quot'}}>
<i className="fa fa-camera profile-pic-camera">
</i></div></div></div></div>
<h3>Kontakt</h3>
<div className="input-group">
<Input type="text" placeholder='Telefonnummer' responsive='true' className="input" value="" required="" />
</div>
<div className="input-group">
<Input type="text" placeholder='Strasse/Hausnummer' responsive='true' className="input opm-input" value="" required="" />
</div>
<div className="table">
<div className="table__row table-row-invoice">
<div className="table__cell zipcode-cell">
<div className="input-wrapper">
<div className="input-group">
<Input type="text" placeholder='PLZ' responsive='true' className="input opm-input" value="" required="" />
</div></div></div>
<div className="table__cell city-cell">
<div className="input-group">
<Input type="text" placeholder='Ort' responsive='true' className="input opm-input" value="" required="" />
</div></div></div></div>
<div className="table country-table">
<div className="table__row country-row">
<div className="table__cell country-text-cell">Land
</div>
<div className="table__cell country-picket-cell">
</div></div></div>
<div className="text--center">
<button className="button button--disabled">Speichern</button>
</div></div>
<div className="accordion person-addresses accordion--wrapped" data-group="3">
<div className="accordion__head">Adressen</div>
<div className="accordion__body">
</div></div>
<div className="accordion accordion--wrapped" data-group="3">
<div className="accordion__head">Konto endgültig entfernen
</div>
<div className="accordion__body">
</div></div></div></div>


            </div>
        );
    }
}