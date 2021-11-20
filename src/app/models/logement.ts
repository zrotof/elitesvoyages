import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class Logement {

    id?: string;
    villeLogement?: string;
    nomLogement?: string;
    nbrEtoileLogement?: number;
    priceLogement?: number;
    currencyLogement?: string;
    imgLogement?: string;
    optionLogement?: Option[];
}

export class Option{
    id?:string;
    libelleOption?: string;
}
