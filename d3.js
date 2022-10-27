
var task =[{"name":"aut"},{"phno":123354657},{"city":"mycity"},{"country":"India"},
{"name":"aut"},{"phno":123354657},{"city":"mycity"},{"country":"India"}];
var b
for (i=0;i<task.length;i++){
    b = task[i] ;
    console.log(b);
}
for (let x in task) {
  console.log(x);
}
for (let y of task){
console.log(y);
}
var c = task.forEach((item) =>{
console.log(item);

  console.log(c);
});

// Resume in Json format
let Resume = {
    "name":"Reshma",
    "Qualification":"B.tech",
    "CurrentRole":"Senior software engineer",
    "experience":[{
        "overallexperience":"3.11 years",
        "Currentorganization": "Tech Mahindra",
        "previousorganization":"EA sports",
        "previousprojectduration":"Sept 2018 to October 2021",
        "CurrentProjectDuration": "November 2021 to Till date",
        "CurrentProject":"Microsoft Authenticator",
        "Projectdescription":"Microsoft authenticator is a Password manager which can manage the saved passwords, addresses and payments,it also supports multi factor authentication (MFA) even if you still use a password, by providing a second layer of security after you type your password.",
        "Environment": "Android,iOS",
        "TechnicalSkills":"jira manualtesting postmantool testrails androidstudio",
    }
]
    
}
console.log(Resume);