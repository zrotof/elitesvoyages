export class TopTour {

    title?: string;
    price!: number;
    image?: string;
    link?: string;
    place?: string;
    formula?: string;
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

export class SpotlightedTour{
    title?: string;
    price!: number;
    image?: string;
    link?: string;
    formula?: string;
    tag!: Tag;
}

export class Tag {
    icon?: any;
    label?: string;
    color?: string;
}