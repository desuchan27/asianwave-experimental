export interface Billboard {
    id: string
    label: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    billboard: Billboard
}

export interface Product {
    id: string
    category: Category
    name: string
    price: string
    isFeatured: boolean
    variant: {
        id: string;
        name: string;
        options: string[];
    }
    images: Image[]
}

export interface Image {
    id: string
    url: string
}

