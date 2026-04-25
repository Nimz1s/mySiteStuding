let a = "";
let b = "";

let current = "";

let op = "";
let isOpSelect = false;
let isDot = false;
const out = document.getElementById("res");


const out2 = document.getElementById("a");
const out3 = document.getElementById("b");


const operations = {
  "" : (a, b) => 0 ,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'x': (a, b) => a * b,
  '/': (a, b) => b !== 0 ? a / b : "Ділення на 0!",
  '%': (a, b) => b !== 0 ? a / 100 * b : 0
};

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const elem = btn.innerText;
    const type = btn.dataset.type;
    

    if (type === "num") {
        if(!isOpSelect){
            a += elem;
            out.innerText = a;
            out2.innerText = a;
            return;
        }
        if(current){
            a += elem;
            b = a;
            out.innerText = b; 
            out3.innerText = b; 
            return;
        }
        b += elem;
        out.innerText = b; 
        out3.innerText = b;
    }
    if (type === "op") {
        op = elem;
        isOpSelect = true;
        if(isDot){
            isDot = false;
            return;
        }
        out.innerText = op;
    }
    if (type === "dot"){
        if (current){
            a += elem;
            b = a;
            out.innerText = b; 
            return;
        }
        if(!isOpSelect && !isDot){
            a+=".";
            out.innerText = a;
            ou2.innerText = a;
            isDot = true;
            return;
        }
        if(!isDot){
            b+=".";
            isDot = true;
            out.innerText = b;
            out3.innerText = b;
            return;
        }
        
        
       
    }
    if (type === "change"){
        if(current){
            current = -current;
            out.innerText = current;
            return;
        }
        if(!isOpSelect){
            a = -a;
            out.innerText = a;
            out2.innerText = a;
            return;
        }
        b = -b;
        out.innerText = b;
        out3.innerText = b;
    }
    if (type === "equal"){
        if(current){
            current = operations[op](Number(current), Number(b));
            out.innerText = current;
            a = "";
            out2.innerText = a;
            return;
        }
        current = operations[op](Number(a), Number(b));
        a = "";
        out.innerText = current;
        out2.innerText = a;

    }
    if (type === "clear"){
        let a = "";
        let b = "";

        let current = "";

        let op = "";
        let isOpSelect = false;
        let isDot = false;
        out.innerText = 0;
        out2.innerText = "a";
        out3.innerText = "b";
    }

    
  });
});

