var user = {
    id: 152,
    name: 'Sakib',
    age: 25,
    // education: {
    //     degree: "BSc",
    // },
};

var {education: {degree: x} = {}} = user

console.log(x)