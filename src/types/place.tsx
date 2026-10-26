export type PlaceCatalog = 'Природа' | 'Розваги' | 'Історія'

export type Place = {
    id : string;
    name : string;
    description : string;
    category: PlaceCatalog;
    rating: number;
    image: string;
}