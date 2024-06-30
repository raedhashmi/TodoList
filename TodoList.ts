import inquirer from "inquirer";
import chalk from "chalk";
export default async() => {
console.log("Welcome to Todo list")

function options(Todos: string[]){
    inquirer.prompt ([{
    name:"op",
    message:"Whats on your mind?",
    type:"list",
    choices:["View Todos","Add Todo","Delete Todo","Quit"]
}])
.then((answers) => {
    if(answers.op == "View Todos"){
        if(Todos.length == 0){
            console.log(chalk.red("ERR! The Todo list is empty."))
        }
        else {
        for(let i=0; i < Todos.length; i++){
            console.log(i+1,". ",Todos[i])
        }}
        options(Todos)
    }
    if(answers.op == "Add Todo"){
        addTodo(Todos)       
    }
    if(answers.op == "Delete Todo"){
        if(Todos.length == 0){
            console.log(chalk.red("ERR! The Todo list is empty"))
        options(Todos)
        }
        else {
        for(let i=0; i < Todos.length; i++){
            console.log(i+1,". ",Todos[i])
        }
        delTodo(Todos)
    }      
    }
    if(answers.op == "Quit"){
        console.log(chalk.blueBright("Bye!"))
    }
})
return Todos
}


function addTodo(new_todo: string[]):void{
        inquirer.prompt([{
        name:"new_todo",
        message:"What do you want your Todo to say?",
        type:"input"
    }])
    .then((answers) => {
        new_todo.push(answers.new_todo)
        console.log("New Todo added.")
        options(new_todo)
})
}
function delTodo(del_todo: string[]):void{
    inquirer.prompt([{
    name:"delete",
    message:"What do you want to delete?(Enter Serial number)",
    type:"input"
}])
.then((answers) => {
    if(answers.delete > del_todo.length)
        console.log(chalk.red("ËRR! Out of bounds"))
    else{
    del_todo.splice(answers.delete-1,1)
    console.log("Deleted.")
    options(del_todo)
    }
})
}
let arr: string[] =[]
options(arr)
}