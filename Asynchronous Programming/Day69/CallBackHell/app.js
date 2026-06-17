function ClickPicture(fn)
{
    setTimeout(() => {
        console.log("Picture Clicked")
        fn()
    },4000)
}

function SelectPicture(fn)
{
    setTimeout(() => {
        console.log("Picture selected")
        fn()
    },3000)
}

function ApplyFillter(fn)
{
    setTimeout(() => {
        console.log("Filter Appled")
        fn()
    },2000)
}

function ChooseCaption(fn)
{
    setTimeout(() => {
        console.log("Caption Choosed")
        fn()
    },2000)
}

function PostPicture(fn)
{
    setTimeout(() => {
        console.log("Picture Posted")
        fn()
    },1000)
}

// ClickPicture(SelectPicture(ApplyFillter(ChooseCaption(PostPicture()))))

ClickPicture(() => {
    SelectPicture(() => {
        ApplyFillter(() => {
            ChooseCaption(() => {
                PostPicture()
            })
        })
    })
})  