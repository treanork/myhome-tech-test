import { PropertyTypeEnum } from "../enums";

export interface HouseDetailsModel {
    PropertyId: number;
    GroupLogoUrl: string;
    BedsString: string;
    Price: number | string;
    SizeStringMeters: number;
    DisplayAddress: string;
    PropertyType: PropertyTypeEnum;
    BerRating: string;
    MainPhoto: string;
    Photos: string[];
    BathString: string;
}
  