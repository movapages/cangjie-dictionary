import {BehaviorSubject} from "rxjs";

import zi2c from '../json/zi2c.json';
import c2zi from '../json/c2zi.json';

export const cangjieSubject = new BehaviorSubject({zi2c: zi2c.zi2c, c2zi: c2zi.c2zi});
export const historySubject = new BehaviorSubject([]);
export const searchSubject = new BehaviorSubject([]);
