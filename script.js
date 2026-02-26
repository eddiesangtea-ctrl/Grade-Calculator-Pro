const subjectBox = document.getElementById("subjects");

// Add first subject automatically
addSubject();

function addSubject(){
    const div = document.createElement("div");
    div.className="row";

    div.innerHTML = `
        <input type="text" placeholder="Subject">
        <input type="number" placeholder="Marks" class="marks">
        <button onclick="this.parentElement.remove()">❌</button>
    `;

    subjectBox.appendChild(div);
}

function calculate(){
    const marks = document.querySelectorAll(".marks");

    let total = 0;
    let count = 0;

    marks.forEach(m=>{
        let val = Number(m.value);
        if(val>=0){
            total += val;
            count++;
        }
    });

    if(count===0){
        alert("Enter marks!");
        return;
    }

    let average = total/count;
    let percentage = average;
    let grade="";
    let gpa=0;

    if(average>=90){ grade="A+"; gpa=4.0; }
    else if(average>=80){ grade="A"; gpa=3.7; }
    else if(average>=70){ grade="B"; gpa=3.0; }
    else if(average>=60){ grade="C"; gpa=2.5; }
    else if(average>=50){ grade="D"; gpa=2.0; }
    else{ grade="F"; gpa=0; }

    document.getElementById("total").textContent=total;
    document.getElementById("average").textContent=average.toFixed(2);
    document.getElementById("percentage").textContent=percentage.toFixed(2)+"%";
    document.getElementById("gpa").textContent=gpa;

    const gradeText=document.getElementById("grade");
    const status=document.getElementById("status");

    gradeText.textContent="Grade: "+grade;

    if(average>=50){
        status.textContent="✅ PASS";
        status.className="pass";
    }else{
        status.textContent="❌ FAIL";
        status.className="fail";
    }
}

function toggleDark(){
    document.body.classList.toggle("dark");
}