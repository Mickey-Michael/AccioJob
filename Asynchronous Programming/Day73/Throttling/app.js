const btn = document.getElementById("btn")

function throttle(fn, delay)
{
    let last = 0

    return function()
    {
        let now = Date.now()
        if(now - last <= delay)
        {
            return
        }

        last = now
        fn()
    }
}

let th = throttle(() => console.log("ok"),2000)

btn.addEventListener("click" , th)


