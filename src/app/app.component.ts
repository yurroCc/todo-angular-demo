import {Component, NgModule} from '@angular/core';
import {TodoItem} from "./todoItem";
import {TodoList} from "./todoList";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private list = new TodoList("Bob",[new TodoItem("Go for run", true),
                                new TodoItem("Get flowers"),
                                new TodoItem("Collect tickets")]);
    get username(): string{
        return this.list.user;
    }
    // get itemCount(): number{
    //     console.log(this)
    //     return this.list.items.filter(item => !item.complete).length;
    // }
    get itemCount(): number{
        console.log(this.items.length)
        console.log(this)
        return this.items.length
    }

    get items(): readonly  TodoItem[]{
        // return this.list.items;
        console.log(this.list.items.filter(item => console.log(this.showComplete+"conm")))
        //过滤掉 item.complete = true 的选项
        return this.list.items.filter(item => this.showComplete || !item.complete)
    }
    //添加item
    addItem (newItem: string){
        if(newItem !=""){
            this.list.addItem(newItem)
        }
    }
    showComplete: boolean =false
}
