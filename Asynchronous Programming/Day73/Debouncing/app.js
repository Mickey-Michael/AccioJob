const input = document.getElementById("input")

 
function abc(fn, delay)
{
    let id
    return function(e)
    {
        clearTimeout(id)
        id = setTimeout(() => {
        fn(e)
        },delay)
    } 
}

const merafn = abc((e) => console.log(e.target.value),2000)
input.addEventListener("input", merafn)
