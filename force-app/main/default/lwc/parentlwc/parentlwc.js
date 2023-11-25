/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 25-11-2023
 * @last modified by  : Vrushabh Uprikar
**/
import { LightningElement, track } from 'lwc';

export default class Parentlwc extends LightningElement {

    @track handleSwitch = false;

    handleClick() {
        this.handleSwitch = this.handleSwitch ? false : true;
    }

}
