export class UsageError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UsageError';
    this.exitCode = 2;
  }
}

export class BootstrapRefusalError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BootstrapRefusalError';
    this.exitCode = 1;
  }
}
