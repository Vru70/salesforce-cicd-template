/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 25-11-2023
 * @last modified by  : Vrushabh Uprikar
**/
import { LightningElement, api } from 'lwc';
import temp1 from './childlwc1.html';
import temp2 from './childlwc2.html';
export default class Childlwc extends LightningElement {

    @api handleSwitch;

    render() {
        return handleSwitch ? temp1 : temp2;
    }
}
