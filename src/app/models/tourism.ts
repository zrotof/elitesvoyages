export class TopTour {

    title?: string;
    price!: number;
    image?: string;
    link?: string;
    place?: string;
}

export class GeneralTour {
    title?: string;
    country?: string;
    price!: number;
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