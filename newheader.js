import { LightningElement, api } from 'lwc';
import ABSA_LOGO from '@salesforce/resourceUrl/ABSA_LOGO';
 
export default class HeaderComponent extends LightningElement {
    logoUrl = ABSA_LOGO;
 
    @api headerText = 'Ultimate Banking';
}