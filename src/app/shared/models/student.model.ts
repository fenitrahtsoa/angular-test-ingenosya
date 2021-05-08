import { jsonIgnore } from "json-ignore";

export enum GenderEnum {
  male = 'Male',
  female = 'Female',
}
export const GenderArrays = [
  {_id: GenderEnum.male, label: 'Male', icon: 'fa fa-male', color: '#9c27b0'},
  {_id: GenderEnum.female, label: 'Female', icon: 'fa fa-female', color: '#f44336'}
];

export interface IStudent {
  title?: string;
  last_name?: string;
  first_name?: string;
  promotion?: string;
  gender?: GenderEnum;
  birth?: string;
  email?: string;
  street_name?: string;
  city?: string;
  country?: string;
  company?: string;
  prefered_color?: string;
  street_address?: string;
  planned_career?: string;
  university?: string;
  linkedin?: string;
}
export default class Student implements IStudent {
  title?: string;
  last_name?: string;
  first_name?: string;
  promotion?: string;
  gender?: GenderEnum;
  birth?: string;
  email?: string;
  street_name?: string;
  city?: string;
  country?: string;
  company?: string;
  prefered_color?: string;
  street_address?: string;
  planned_career?: string;
  university?: string;
  linkedin?: string;

  @jsonIgnore()
  get iconGender(): string {
    if(this.gender) {
      const i = GenderArrays.find(i => i._id === this.gender);
      return i ? i.icon : 'fa fa-user';
    }
    return 'fa fa-user';
  }

  constructor(arg?: any) {
  }
}