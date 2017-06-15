import {Action} from "utils";
import {Zone} from "domain/zone";

export const Types = {
    requestZones: "ZONE_SERVICE_REQUEST",
    receivedZones: "ZONE_SERVICE_RECEIVE"
}

export interface ReceivedZonesActions extends Action {
    rootZone: Zone
}

export const requestZones: Action = ({
    type: Types.requestZones});

export const receiveZones = (rootZone: Zone): ReceivedZonesActions => ({
    type: Types.receivedZones, 
    rootZone: rootZone});