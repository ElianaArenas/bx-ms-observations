export class Observation {
  code: string;
  observations: string[];

  constructor(code: string, observations: string[]) {
    this.code = code;
    this.observations = observations;
  }
}
