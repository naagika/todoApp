import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Model, TodoItems} from './model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
 export class AppComponent{
  model = new Model();
  title = "To Do Application"
  isDidplay=false;

  getPendingTasks() {
    if (this.isDidplay){
      return this.model.items
    }
    return this.model.items.filter(item => !item.action); // Возвращает только невыполненные задачи
  }
  addItem(value: string){
    if (value!="") {
      this.model.items.push(new TodoItems(value, false));
    }
  }

 }
