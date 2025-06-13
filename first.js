// const qrinput=document.querySelector("#qr-input");
// const qrbutton=document.querySelector("#qr-button");
// const qrimg=document.querySelector("#qr-img");

// qrbutton.addEventListener("click",()=>{
//     const inputvalue=qrinput.value;
//     if(!inputvalue){
//         alert("enter your url here");
//         return;
//     }else{
//         qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
//         qrimg.alt=`QR Code for ${inputvalue}`;
//     }
// });

// const input=document.querySelector("#password");
// const output=document.querySelector("#output");

// input.addEventListener("input",()=>{
//     const inputvalue=input.value;
//     if(inputvalue.length < 8) {
//         output.innerText="password is to long enough";
//         output.style.color="red";
//     }
//     else{

//         console.log(inputvalue.search(/[a-z]/));
//         if(inputvalue.search(/[a-z]/)==-1){
//             output.innerText="password is missing a lowercase letter";
//             output.style.color="red";
//         }
//         else if(inputvalue.search(/[A-Z]/)==-1){
//                output.innerText="password is missing a Uppercase letter";
//             output.style.color="red";
//         }
//         else if(inputvalue.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\[\{\]\}\;\:\'\"\,\<\.\>\?\/\`\~\]]/)==-1){
//                output.innerText="password is missing a special character";
//             output.style.color="red";
//         }
//         else if(inputvalue.search(/[0-9]/)==-1){
//                output.innerText="password is missing a numeric letter";
//             output.style.color="red";
//         }
//         else{
//             output.innerText="password is strong";
//             output.style.color="green";
//         }

//     }
// });

// const quiz = [
//   {
//     question: "What is the most used programming language in 2025?",
//     ans1text: "Java",
//     ans2text: "C",
//     ans3text: "Python",
//     ans4text: "JavaScript",
//     answer: "Python",
//   },
//   {
//     question: "Who is the President of US in 2025?",
//     ans1text: "Joe Biden",
//     ans2text: "Donald Trump",
//     ans3text: "Barack Obama",
//     ans4text: "George Bush",
//     answer: "Donald Trump",
//   },
//   {
//     question: "What does HTML stand for?",
//     ans1text: "Hypertext Markup Language",
//     ans2text: "Cascading Style Sheet",
//     ans3text: "Jason Object Notation",
//     ans4text: "Helicopters Terminals Motorboats Lamborginis",
//     answer: "Hypertext Markup Language",
//   },
//   {
//     question: "What year was JavaScript launched?",
//     ans1text: "1996",
//     ans2text: "1995",
//     ans3text: "1994",
//     ans4text: "none of the above",
//     answer: "1995",
//   },
// ];

// const question = document.querySelector("#question");
// console.log(question);
// console.log(question.textContent);

// const option_a = document.querySelector("#text_option_a");
// const option_b = document.querySelector("#text_option_b");
// const option_c = document.querySelector("#text_option_c");
// const option_d = document.querySelector("#text_option_d");
// const answer=document.querySelectorAll(".answer");
// console.log(option_a);
// console.log(option_b);
// console.log(option_c);
// console.log(option_d);

// console.log(option_a.textContent);
// console.log(option_b.textContent);
// console.log(option_c.textContent);
// console.log(option_d.textContent);

// const submit=document.querySelector("#submit");

// let currquestion=0;
// let score=0;

// console.log(quiz[currquestion].question);
// console.log(quiz[currquestion].ans1text);
// console.log(quiz[currquestion].ans2text);
// console.log(quiz[currquestion].ans3text);
// console.log(quiz[currquestion].ans4text);

// question.textContent=quiz[currquestion].question;
// option_a.textContent=quiz[currquestion].ans1text;
// option_b.textContent=quiz[currquestion].ans2text;
// option_c.textContent=quiz[currquestion].ans3text;
// option_d.textContent=quiz[currquestion].ans4text;

// console.log(answer);

// submit.addEventListener("click",()=>{
//     const checkedans=document.querySelector('input[type="radio"]:checked');
//     console.log(checkedans);

//     if(checkedans===null){
//         alert("please select an answer");
//     }else{
//         if(checkedans.nextElementSibling===quiz[currquestion].answer){
//             score++;
//         }

//         currquestion++;
//         if(currquestion < quiz.length){

// question.textContent=quiz[currquestion].question;
// option_a.textContent=quiz[currquestion].ans1text;
// option_b.textContent=quiz[currquestion].ans2text;
// option_c.textContent=quiz[currquestion].ans3text;
// option_d.textContent=quiz[currquestion].ans4text;
// checkedans.checked=false;
//         }else{
//             alert("your score is " +score + " out of " +quiz.length);
//             location.reload();
//         }
//     }
// });

// const span=document.querySelectorAll("span");

//  span.forEach((item)=>{
//   item.addEventListener("click",()=>{
//     item.classList.toggle("active");

//   })
//  })

const quiz = [
  {
    question: "What is the most used programming language in 2025?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "Python",
  },
  {
    question: "Who is the President of US in 2025?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Donald Trump",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

// const question = document.querySelector("#question");

// const option_a = document.querySelector("#text_option_a");

// const option_b = document.querySelector("#text_option_b");

// const option_c = document.querySelector("#text_option_c");

// const option_d = document.querySelector("#text_option_d");

// const submit = document.querySelector("#submit");

// let currquestion = 0;
// let score = 0;

// console.log(quiz[currquestion].question);
// console.log(quiz[currquestion].ans1text);
// console.log(quiz[currquestion].ans2text);
// console.log(quiz[currquestion].ans3text);
// console.log(quiz[currquestion].ans4text);

// question.textContent = quiz[currquestion].question;
// option_a.textContent = quiz[currquestion].ans1text;
// option_b.textContent = quiz[currquestion].ans2text;
// option_c.textContent = quiz[currquestion].ans3text;
// option_d.textContent = quiz[currquestion].ans4text;

// submit.addEventListener("click", () => {
//   const checkedans = document.querySelector(`input[type="radio"]:checked`);
//   console.log(checkedans);

//   if (checkedans === null) {
//     alert("please select an option");
//   } else {
//     if (
//       checkedans.nextElementSibling.textContent === quiz[currquestion].answer
//     ) {
//       score++;
//     }

//     currquestion++;
//   }
//   if (currquestion < quiz.length) {
//     question.textContent = quiz[currquestion].question;
//     option_a.textContent = quiz[currquestion].ans1text;
//     option_b.textContent = quiz[currquestion].ans2text;
//     option_c.textContent = quiz[currquestion].ans3text;
//     option_d.textContent = quiz[currquestion].ans4text;
//     checkedans.checked = false;
//   } else {
//     alert("your score is " + score + " out of " + quiz.length);
//     location.reload();
//   }
// });

const span=document.querySelectorAll("span");
span.forEach((item)=>{
  item.addEventListener("click",()=>{
    item.classList.toggle("active");
  });
});