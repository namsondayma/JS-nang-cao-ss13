"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("Job type:", this.type);
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
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
