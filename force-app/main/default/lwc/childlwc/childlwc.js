/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 25-11-2023
 * @last modified by  : Vrushabh Uprikar
**/
import { LightningElement, api, track } from 'lwc';
import temp1 from './childlwc1.html';
import temp2 from './childlwc2.html';
export default class Childlwc extends LightningElement {

    @api handleSwitch;
    @track any;
    value;

    render() {
        console.log('render:');
        return this.handleSwitch ? temp1 : temp2;
    }
    renderedCallback() {
        if (this.handleSwitch) {
            this.any = 'Test ' + this.handleSwitch;
            this.value = 'When It is True';
        } else {
            this.value = 'When It is False';
        }
    }
}
