function ClickPicture()
{
    return new Promise ((res,rej) => {
        setTimeout(() => {
        console.log("Picture Clicked")
        res()
    },4000)
    })
    
}

function SelectPicture()
{
    return new Promise ((res,rej) => {
        setTimeout(() => {
        console.log("Picture selected")
        res()
    },3000)
    })
    
}

function ApplyFillter()
{
    return new Promise ((res,rej) => {
        setTimeout(() => {
        console.log("Filter Appled")
        res()
    },2000)
    })
    
}

function ChooseCaption()
{
    return new Promise ((res,rej) => {
        setTimeout(() => {
        console.log("Caption Choosed")
        res()
    },2000)
    })
    
}

function PostPicture()
{
    return new Promise ((res,rej) => {
        setTimeout(() => {
        console.log("Picture Posted")
        res()
    },1000)
    })
    
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

ClickPicture()
.then()
.then()
.then()
.then()