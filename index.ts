
import inquirer  from "inquirer";
class myAccount {
    name:string
    mybalance:number
    mypin:number
    constructor(name:string,mybalance:number,mypin:number){
        this.mybalance = mybalance
        this.mypin = mypin
        this.name = name
        console.log("welcome to mybank");
        console.log("your current Account balance is 20000");
    }
}
let answer =new myAccount("kiran",20000,2345)
let password =await inquirer.prompt([
    {
        name:"Person",
        type:"string",
        message:"please enter your name"
    },
    {
        name:"Amount",
        type:"number",
        message:"please enter your Amount"
    },
    {
        name:"pin",
        type:"number",
        message:"please enter your pin"
    }
])
if(password.pin === 2345){
    console.log("Authentication is successfully");
}else{
    console.log("Invalid pin");
}
if(password.Amount === 20000){
    console.log("withdraw your amount");
}else if(password.Amount > 20000){
    console.log("Insufficient balance");
}else if(password.Amount < 20000){
    console.log("Insufficient balance");
}
else{
    console.log("Invalid Amount");
}



