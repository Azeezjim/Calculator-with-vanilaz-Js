let result = document.getElementById('inputtext');

let calculate= (number) => {
  result.value += number
}

let Result = () => { 

  try{
    result.value=eval(result.value)
  }
  catch(err) {
    alert("Invald entery")
  }
}

function clear(){
  result.value = " ";
} 

function del() {
  result.
}