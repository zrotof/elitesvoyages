export class TopTour {

    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    link?: string;
    place?: string;
}

export class GeneralTour {
    title?: string;
    country?: string;
    price?: number;
    currency?: string;
    image?: string | Blob;
    description?:string;
    dates?: string;
    id?: string;
    tags?: Tag[]
}

export class Tag {
    icon?: any;
    label?: string;
}