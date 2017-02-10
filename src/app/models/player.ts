import { PreferredFoot } from './preferred-foot';
import { PreferredPosition } from './preferred-position';

export interface IPlayer {
    email: string,
    firstName: string,
    surname: string,
    dateOfBirth: string,
    phoneNumber: string,
    preferredFoot: PreferredFoot,
    preferredPosition: PreferredPosition
}