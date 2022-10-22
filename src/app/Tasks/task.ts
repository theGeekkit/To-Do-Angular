export class Task {
  task: string ;
  deadline: string ;
  priority: string ;
  strikethrough: boolean;


  constructor(task: string,
              deadline: string,
              priority: string)
              {
    this.task = task;
    this.deadline = deadline
    this.priority = priority
    this.strikethrough= false;


  }

}
