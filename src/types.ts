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
    variantOptions: Variant[]
    images: Image[]
}

export interface Image {
    id: string
    url: string
}

export interface Variant {
    id: string
    name: string
    optionValues: string[]
}
