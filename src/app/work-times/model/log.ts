import { Time } from "@angular/common";

export class workLog{
    id:           number;
    association:  string;
    date:         string;
    start:        Time;
    finish:       Time;
    description:  string;
    totalTime:    string;

    constructor() {
    }
}