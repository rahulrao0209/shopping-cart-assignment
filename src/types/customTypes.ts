export type Banner = {
    bannerImageUrl: string;
    bannerImageAlt: string;
    isActive: boolean;
    order: number;
    id: string;
}

export type Category = {
    name: string;
    key: string;
    description: string;
    enabled: boolean;
    order: number;
    imageUrl?: string;
    id: string;
}