function mysetinterval(cb, delay)
{
    let id 
    function repeat()
    {
        cb()
        id = setTimeout(repeat,delay)
    }
    id = setTimeout(repeat, delay)

    return () => clearTimeout(id)
}

const fn = mysetinterval(() => {
    console.log("Mickey")
},2000)

setTimeout(() => {
    fn()
},5000)

