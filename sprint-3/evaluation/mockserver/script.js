let formDisplay = document.getElementById("displayForm");

//generating form
formDisplay.addEventListener("click",async (e)=>{
    let res = await fetch("http://localhost:3000/formFields");
    let data = await res.json();
    console.log("displayform: "+data);

    const form = document.getElementById("form");

    data.forEach((doc)=>{
        const input = document.createElement('input');
        input.type = doc.type;
        input.id = doc.key;
        input.name = doc.key;
        input.placeholder = doc.label;
        input.maxLength = doc.maxLength || 50;
        input.required = true;

        const br = document.createElement('br');

        form.appendChild(input);
        form.appendChild(br);
    });
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.innerText = "submit";

    form.appendChild(submit);
})

//validate form
// function validate(obj){
//     if(obj.type == "text"){
//         if(obj.value.length) < 3){
//             alert("Name can't be less 3 ");
//             return false;
//         }
//     }
// }

//submit form 
const form = document.getElementById("form");

form.addEventListener("submit",async (e)=>{
    e.preventDefault();

    let inputs = document.querySelectorAll("#form input");
    const submission = {};
    console.log(inputs);
    inputs = Array.from(inputs);
    inputs.pop();
    console.log(inputs);
    inputs.forEach((input)=>{
        submission[input.name] = input.value;
    })
    console.log(submission);
    let response = await fetch("http://localhost:3000/submissions",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(submission)
    })

    if(response.ok){
        fetchSubmissions();
    }
});

//fetching submission;
async function fetchSubmissions(){
    const response = await fetch("http://localhost:3000/submissions");
    const submissions = await response.json();
    console.log("sumission:"+submissions);

    const submissionsContainer = document.getElementById("submissions");
    submissionsContainer.innerHTML = "";

    submissions.forEach((submission)=>{
        const card = document.createElement('div');
        card.className = "card";
        for(let key in submission){
            const p = document.createElement('p');
            p.innerText = `${key}: ${submission[key]}`;
            p.className="para";
            card.append(p);
        }
        submissionsContainer.append(card);
    })
}

// fetch all submissions
fetchSubmissions();