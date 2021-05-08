export namespace NStudent {
  export enum GenderEnum {
    male = 'male',
    female = 'female',
  }
}

export interface IStudent {
  title?: string;
  last_name?: string;
  first_name?: string;
  promotion?: string;
  gender?: NStudent.GenderEnum;
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
  gender?: NStudent.GenderEnum;
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