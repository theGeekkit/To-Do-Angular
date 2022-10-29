export class Task {
  task: string ;
<<<<<<< HEAD
  priority: string;
  deadline: string;
  // strikethrough?: boolean;
=======
  deadline: string ;
  priority: string ;
  strikethrough: boolean;
>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4


  constructor(task: string,
              deadline: string,
              priority: string)
              {
    this.task = task;
<<<<<<< HEAD
    this.priority = this.priority;
    this.deadline = this.deadline;
    // this.strikethrough= false;
=======
    this.deadline = deadline
    this.priority = priority
    this.strikethrough= false;
>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4


  }

}
