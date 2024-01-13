export interface IUsers {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    height?: number; //lehet más
    weight?: number; //lehet más
    age?: number;
    location_id?: string; //lehet más
    favouritefood_id?: string;
    gym_id?: string; //lehet más
}