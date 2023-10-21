$("#Initiate").on("click",ROLinitiate)
function ROLinitiate(){
    var binText = $(".binary-data")
    var counter = 0
    console.log("initiate")
    const myTimeOut = setInterval(shiftLeft,5000)
    function shiftLeft(){
        var binTextData = binText.text()
        binTextData = binTextData+binTextData[0]
        binTextData=binTextData.slice(1,binTextData.length)
        binText.text(binTextData)
        counter+=1
        $("#EBX"+counter).text(binTextData)
        $("#DX"+counter).text("0"+binTextData[binTextData.length-1])
        if(counter>=8){
            clearInterval(myTimeOut)
        }
    }
}

$("#submit").on("click",function(){
    $(".binary-data").text($("#binary-input").val())
})

