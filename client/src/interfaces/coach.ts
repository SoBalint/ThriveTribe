export interface ICoach {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    age?: number;
    location_id?: number; //ez lehet más
    experience_id?: number; //ez lehet más
}