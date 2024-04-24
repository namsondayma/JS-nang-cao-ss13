abstract class Job {
    protected type: string;
    constructor(type: string) {
      this.type = type;
    }
    printType(): void {
      console.log("Job type:", this.type);
    }
    abstract calculateSalary(): number;
  }
  class PartimeJob extends Job {
    private workingHour: number;
    constructor(workingHour: number) {
      super("Part-time");
      this.workingHour = workingHour;
    }
    calculateSalary(): number {
      return 30000 * this.workingHour;
    }
  }
  class FulltimeJob extends Job {
    constructor() {
      super("Full-time");
    }
    calculateSalary(): number {
      return 10000000;
    }
  }
  const partimeJob = new PartimeJob(20);
  partimeJob.printType();
  const partimeSalary = partimeJob.calculateSalary();
  console.log("Part-time job salary:", partimeSalary);
  const fulltimeJob = new FulltimeJob();
  fulltimeJob.printType();
  const fulltimeSalary = fulltimeJob.calculateSalary();
  console.log("Full-time job salary:", fulltimeSalary);