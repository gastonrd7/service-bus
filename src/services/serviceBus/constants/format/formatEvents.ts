import * as universalModels from 'influencers-models';
import {Event} from './eventsEnum'

export function formatEvent(model: universalModels.Model, event: Event, field?: String){
    return `${event.toString().toUpperCase()}.${model.toString()}${field? '.' : ''}${field? field : ''}`;
}

export function formatSubcriptionEvent(model: universalModels.Model, event: Event, field: String, id?: string) : string{
    return `SUBSCRIPTION-${model.toString().toUpperCase()}.${field? field.toUpperCase() : ''}${field? '.' : ''}${event.toString().toUpperCase()}${id? '.' : ''}${id? id : ''}`;
}
