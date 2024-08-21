
// let rootEl = document.getElementById('root');

// let p1 = document.createElement('p');

// p1.innerHTML = 'i am a paragraph created by dom';

// rootEl.append(p1);


// ----------------------------

// let rootEl = document.getElementById('root');

// // React.createElement('tag','props(isko hum attribute bhi kahte hai', 'Content inside tag');
// // let p1 = React.createElement('p',null,'I am Paragraph created by react');

// // in react -> class ko 'lassName' bolte hai & for ko 'htmlFor'
// let p1 = React.createElement('p',{className:'para', id:'graph'},'I am Paragraph created by react');

// let root = ReactDOM.createRoot(rootEl); // Make rootEl as root

// root.render(p1); // Display P1 (p1 inside root)


// ------------------------------
// DOM -> Virtual DOM => advantage in react -> JSX(Javascript XML(Extensible Markup Language))
// JSX ki madad se -> hum html directly apne js file me likh sakte hai

let rootEl = document.getElementById('root');
let p1 = <div>
            <p>
                <h1>
                    Hi i am p form react Jsx
                </h1>
            </p> 
        </div>; // due to jsx -> bhayankar nesting possible => inspect karke elements ke andar jakr dekho

let root = ReactDOM.createRoot(rootEl);
root.render(p1);