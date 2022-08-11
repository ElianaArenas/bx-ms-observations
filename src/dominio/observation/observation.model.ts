export class Observation {
  eventException: string;
  observations: string[];

  constructor(eventException: string, observations: string[]) {
    this.eventException = eventException;
    this.observations = observations;
  }
}
