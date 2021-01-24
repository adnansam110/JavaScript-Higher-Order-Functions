const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  // ----basic for loop-----

//   for (let i=0;i<companies.length; i++)
//   {
//       console.log(companies[i]);
//   }

// ------foreach-----

//   companies.forEach(function(company){
//       console.log(company);
//   });

// -----Filter------ 

// get 21 and older

// let canDrink =[];
// for(var i=0; i<ages.length; i++)
// {
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }

// var  canDrink = ages.filter(function(age){
//     if(age>=21)
//     {
//         return true;
//     }
// });

//   OR

// var  canDrink = ages.filter(age=> age>=21);

// console.log(canDrink);   

// var retailCompanies = companies.filter(function(company){
//     if(company.category ==='Retail')
//     {
//         return true;
//     }
// });

// OR

// var retailCompanies = companies.filter(company => company.category===
//'Retail');
// console.log(retailCompanies);

// ------get 80s companies-------

// var eightiesCompanies = companies.filter(company=>(company.start>=1980)&&(company.start<1990));
// console.log(eightiesCompanies);

// lasted 10 years or more

// var lastedTenYears = companies.filter(company=>
// ((company.end - company.start)>=10));
// console.log(lastedTenYears);

// -----Map-----

// create array of company name

// var companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// var testMap = companies.map(function(company){
//     return 1;
// })

// console.log(testMap);

// var testMap = companies.map(function(company){
//     return `${company.name} [${company.start}-${company.end}]`;
// });

//  OR 

// var testMap = companies.map(company =>
//     `${company.name} [${company.start}-${company.end}]`);


// console.log(testMap);

// var agesMap = ages
// .map(age=> Math.sqrt(age))
// .map(age =>age*2);
// console.log(agesMap);


// -----Sort------
// var sortCompany = companies.sort(function(c1,c2){
//     if(c1.start>c2.start)
//     {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

//  OR

// var sortCompany = companies.sort((a,b)=>a.start>b.start ? 1 : -1);

// console.log(sortCompany);

// var sortAges = ages.sort((a,b)=> a-b);//if b-a then descending order

// console.log(sortAges);

//------reduce-----

// var ageSum = 0;

// for(var i =0;i<ages.length;i++)
// {
//     ageSum +=ages[i];
// }

// var ageSum= ages.reduce(function(total,age){
//     return total + age;
// },0);

// OR

// var ageSum= ages.reduce((total,age)=> total+age, 0); 
// 0 shows the starting value of total

// console.log(ageSum);

// var totalYears = companies.reduce((total, company)=> total+
// (company.end - company.start),0);

// console.log(totalYears);

// --- Combine methods------

// var combined = ages
// .map(age => age * 2)
// .filter(age => age>=40)
// .sort((a,b) => a-b)
// .reduce((total, age) => total +age,0);
// console.log(combined);