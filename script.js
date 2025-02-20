const countValue = document.querySelector('#counter');

const increment = () =>{
    //  get the value from UI
    let value = parseInt (countValue.innerText);   // parseInt :-> it is used to convert string into integer  no.
    // update the value onto UI
    value =value + 1;
    // set the value onto UI
    countValue.innerText = value;
};


const decrement = () =>{
    //  get the value from UI
    let value = parseInt (countValue.innerText);
    // update the value onto UI
    value =value - 1;
    // set the value onto UI
    countValue.innerText = value;
};

