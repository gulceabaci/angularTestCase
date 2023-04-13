export interface ApiResponse {
    id: string;
    title: string;
    text: string;
    type: string;
    images: string[];
    location: {
      type: string;
      coordinates: number[];
    };
    isDinner: boolean;
    isDelivery: boolean;
    storeInfo: {
      id: string;
      geoLocation: {
        latitude: number;
        longitude: number;
      };
      userPoint: number;
      workingHours: any[];
      status: string;
      rate: number;
      minOrderPrice: number;
    };
    categoryId: string;
  }
  