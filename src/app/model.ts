export class Model {
    user;
    items;
    
    constructor() {
      this.user = "Cinar";
      this.items = [
        new TodoItems("Spor", true),
        new TodoItems("Kahvaltı", false),
        new TodoItems("Ders çalışma", false),
        new TodoItems("Sinema", false),
      ];
    }
  }
  
  export class TodoItems {
    description;
    action;  // Исправлено 'actionn' на 'action'
    
    constructor(description: string, action:boolean) {
      this.description = description;
      this.action = action;
    }
  }
  