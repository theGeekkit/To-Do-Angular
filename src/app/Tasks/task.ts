export class Task {
  task: string ;
  deadline: string ;
  priority: string ;
  strikethrough: boolean;
  id?:string;


  constructor(task: string,
              deadline: string,
              priority: string,
              id:string)
              {
    this.task = task;
    this.deadline = deadline
    this.priority = priority
    this.strikethrough= false;
    this.id = id


  }

}
