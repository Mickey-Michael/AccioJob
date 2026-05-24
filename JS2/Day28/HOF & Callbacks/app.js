function hof()
{
    const fn = () => {
        console.log("Hello From Return Function")
    }
    return fn
}

// const returnFn = hof()
// returnFn()

hof()()

function hof2(cd)
{
    cd()
}

function hof3(cd)
{
    cd()

    return() => {

    }
}

hof3()

hof2(() => {
    console.log("Hello Fron the Passed Function")
})