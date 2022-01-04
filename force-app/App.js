/*commented All line Start
//code commented one line
console.log('Hi');
commented All line end*/
//alert('hi thiru');

// for(let i=0;i<=10;i++)
// {
//     i=100+i;
// }
// console.log(i);
// const i=10;

// console.log(i);
// const name='Thiru';
// const number=10;
// const boll=true;
// const nullable=null;
// const undef=undefined;

// console.log(typeof undef);
// const strdet="hi my nam eis thirumoorthi";
// // console.log(strdet.length);
// // console.log(strdet.toUpperCase());
// console.log(strdet.split(' ')[strdet.split(' ').length-1]);
//  const arrayobj=[11,22,14,15];
//  console.log(arrayobj.sort((a,b)=>a-b));
// console.log(arrayobj);
// arrayobj.push(100);
// console.log(arrayobj);
// arrayobj.pop();
// console.log(arrayobj);
// console.log(arrayobj.slice(0,2));
// arrayobj.unshift(1000);
// console.log(arrayobj);
// const employee={
//     name:'Thiru',
//     age:100,
//     Salay:1000000,
// };
// const employee1={
//     name:'Thiru1',
//     age:100,
//     Salay:1000000,
// };
// console.log(employee);
// console.log(Object.entries(employee));
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(employee.name);
// const employees=[employee,employee1];
// console.log(employees);
// console.log(JSON.stringify(employees));

// console.log("My name is "+ "Thiru");
// console.log(`My name is: ${employee1.name}`);
// console.log(`my age is ${employee1.age}`);

// function doalert()
// {
// alert('hi');
// }

// const doalert=function ()
// {
// alert('hi');
// }

// const doalert=()=>
// {
// alert('hi');
// }
// doalert();
// const x=91;
// const y=10;
// const z=9;
// if(x<y && y<z)
// {
//     console.log(`Y is bigger ${y}`)
// }

//ternary Opertaor
// const res=x<y ? y>z ? 'Y is bigger':'Z is bigger' :'X is bigger than Y';
// console.log(res);
// const weekoftheday=2;
// switch(weekoftheday)
// {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('weekday');
//         break;   
//                 default:
//                 console.log('weekend');
//                 break;
// }

//const objarr=["thiru","mani","ram"];
// for(let x=0;x<objarr.length;x++)
// {
//     if(x==1) continue;
//     //if(x==1) break;
//     console.log(objarr[x]);
// }
//let x=0;
// while(x<objarr.length)
// {
//     // if(x==1) break;
//    // if(x==1) continue;
//     console.log(objarr[x]);
//     x++;
// }
// do{
//     console.log(objarr[x]);
//     x++;
// }
// while(x<objarr.length)
// const objarr=["thiru","mani","ram"];
// for(let obj of objarr)
// {
//     console.log(obj);
// }

const employees=
[{
    name:'Thiru1',
    age:100,
    Salay:1000000,
},
{
    name:'Thiru2',
    age:120,
    Salay:1000000,
}
];
// for(let obj of employees)
// {
//     console.log(obj.name);
// }
// for(let prop in employees)
// {
//     console.log(`${prop} ${JSON.stringify(employees[prop])}`);
// }
// employees.forEach(employee=>
//     {
//         console.log(employee.name+ employee.age);
//     }
   
//     )
 
// const res= employees.map(employee=>
//     {
//        return employee.name;
//     }
//     );
// console.log(res);
// const res1= employees.filter(employee=>
//     {
//        return employee.age >100;
//     }
//     );
// console.log(res1);

const employees1=
[{
    name:'Thiru1',
    age:100,
    Salay:1000000,
},
{
    name:'Thiru2',
    age:120,
    Salay:1000000,
}
];

const employees2=
[{
    name:'Thiru3',
    age:100,
    Salay:1000000,
},
{
    name:'Thiru4',
    age:120,
    Salay:1000000,
}
];

const res=[...employees1,...employees2];
 //console.log(res);
// //Destrunction
// const [a,b,c,d]=res;
// console.log(a);
// const{name}=res;
// console.log(name);


// const employees100=
// {
//     name:'Thiru1',
//     age:100,
//     Salay:1000000,
// };
// console.log(JSON.stringify(employees100));
// const obj=JSON.parse(JSON.stringify(employees100));
// console.log(obj);
// const {name,age}=obj;
// console.log(name+age);
// const[name,age]=employees100;
// console.log(name+age);
// const employees101=
// {
//     name:'Thiru1',
//     age:100,
//     Salay:1000000,
// };
// //const res1={...employees100,...employees101,age:500};
// const res1=[...employees100,...employees101];

// console.log(res1);
// const{name2}=res1;
// console.log(name2);

function getEmployeeDetail(name,age){
this.name=name;
this.age=age;

}

getEmployeeDetail.prototype.getcity=()=>{
    return 'Annur';
}
getEmployeeDetail.prototype.getcountry=()=>{
   this.country='india';
}

const resConst=new getEmployeeDetail('thiru',10);
console.log(resConst.getcountry);