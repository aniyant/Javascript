// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
function UniqueString(strings) {
  return strings.reduce((ans,cur)=>{
    if(cur in ans){
      ans[cur] += 1
    }
    else{
      ans[cur] = 1;
    }
    return ans;
  },{})
}
// console.log(UniqueString(strings));

// qn :2

function ProductOfMultipleOfThreeOrFive(numbers1) {
  return numbers1.reduce((ans,curr)=>{
    if(curr%3===0 || curr%5 ==0){
      ans += curr;
    } 
    return ans;
  },0)

}
// console.log(ProductOfMultipleOfThreeOrFive(numbers1));

// filter method Qn:1\

function palindromesString(words) {
  return words.reduce((ans,curr)=>{
    if(curr == curr.split("").reverse().join("")){
      ans.push(curr);
    }
    return ans;
  },[])
}
// console.log(palindromesString(words))

// filter method Qn:2

function findImage(filePaths) {
  let ans = filePaths.filter((curr)=>(curr.includes(".png") || curr.includes(".jpg")))
  return ans;
}
// console.log(findImage(filePaths))

// map method Qn:1

function swapStrings(strings1) {
  let ans = strings1.map((curr)=>{
    curr = curr.split("");
    // curr[0],curr[curr.length-1] = curr[curr.length-1],curr[0];
    let temp = curr[0];
    curr[0] = curr[curr.length-1];
    curr[curr.length-1] = temp;
    curr = curr.join("");
    return curr;
  })
  return ans;
}
// console.log(swapStrings(strings1));

// foreach method Qn:1
function countWords(sentences) {
  sentences.forEach((element,index) => {
    console.log(`sentence ${index+1} contains ${element.split(" ").length} words.`);
  });
}
// countWords(sentences)

// combination method Qn:1
function sumOfSquaresOfOddNumbers(numbers) {
  return numbers.filter(curr=>curr%2==1).map(curr=>curr*curr).reduce((ans,curr)=>(ans+curr),0);
  // let mnums = onums.map(curr=>curr*curr);
  // return mnums.reduce((ans,curr)=>(ans+curr),0);
}
// console.log(sumOfSquaresOfOddNumbers(numbers));

// combination method Qn:2
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
function massageArray(exampleInputArray) {
  const eo1 = exampleInputArray.map((item) => {
    // Map the courseName directly
    const courseName = item.courseName;

    // Map the courseDuration to Category
    const courseDurationId = item.courseDuration;
    const courseDuration = CourseDurationDirectory[courseDurationId];

    // Map the type to typeOfCourse
    const typeId = item.type;
    const type = typeOfCourse.find((t) => t.id === typeId)?.name;

    // Map the Category to CourseDurationDirectory
    const categoryId = item.Category;
    let ccat = Category[categoryId];
    // const Category = ccat;

    // Filter and map techTools
    const techTools = Object.entries(item.techTools)
      .filter(([key, value]) => value !== null && value !== "")
      .map(([key, value]) => ({ language: value, details: item.techdetails[key] }));

    // Construct the transformed object
    return {
      courseName,
      courseDuration,
      Category:ccat,
      type,
      techTools,
    };
  });

  return eo1;
}

//console.log(massageArray(exampleInputArray));


// Implementation methods ps Qn:6
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};
function ImplementationPS6(students) {
  let ans = {};
  for(const data of students){
    let {name,subjectID} = data;
    if(ans[name]){
      // ans[data.name].push();
      ans[name] = [...ans[name],subjectsHash[subjectID]];
    }
    else{
      ans[name] = [subjectsHash[subjectID]];
    }
  }
  return ans;
}
// console.log(ImplementationPS6(students));

// Implementation methods ps Qn:7

function ImplementationPS7(allStudentsMarksData) {
  const ans = allStudentsMarksData.map((element)=>{
    const name = element.name;
    let marks = [];
    for(let i=1;i<=5;i++){
      const subject = element[`subject${i}`];
      const score = element[`marks${i}`];

      if(subject && score){
        marks.push({subject,score});
      }
    }
    return {name,marks};
  });
  return ans;
}
// console.log(ImplementationPS7(allStudentsMarksData));


// Implementation methods ps Qn:9

function ImplementationPS9(voters) {
    const numYoungVotes = voters.filter(el=>el.age <=20 && el.voted).length;
    const numYoungPeople = voters.filter(el=>el.age <=20).length;

    const numMidVotesPeople = voters.filter(el=>el.age > 20 && el.age <= 45 && el.voted).length;    
    const numMidsPeople = voters.filter(el=>el.age > 20 && el.age <= 45).length;
    
    const numOldVotesPeople = voters.filter(el=>el.age > 45 && el.voted).length;
    const numOldsPeople = voters.filter(el=>el.age > 45).length;

    return {
      numYoungVotes,
      numYoungPeople,
      numMidVotesPeople,
      numMidsPeople,
      numOldVotesPeople,
      numOldsPeople
    }
}
// console.log(ImplementationPS9(voters));

// Implementation methods ps Qn:10
function ImplementationPS10(data) {
  let iceCreamCounts = {};

  // Iterate over each object in the data array
  for (const person of data) {
      // Iterate over each favorite ice cream of the current person
      for (const iceCream of person.favoriteIceCreams) {
          // Increment the count of the current ice cream flavor
          iceCreamCounts[iceCream] = (iceCreamCounts[iceCream] || 0) + 1;
      }
  }

  return iceCreamCounts;
}

// console.log(ImplementationPS10(data));

// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
