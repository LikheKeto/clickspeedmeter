{
    const button = document.getElementById("button")
    const output = document.getElementById("output")
    const stopwatch = document.getElementById("stopwatch")
    let a = 0;
    let value ={
        seconds:30
    }
    document.addEventListener("keypress",()=>{
        stopwatch.innerText="30"
        button.addEventListener("click", () => {
            a = a + 1
            output.innerText = a;
        })
        function actualScore(){
            var ans =confirm(`Your speed is ${a/30} clicks per seconds`)
            if (ans === true){
                location.reload()
            }
            if (ans === false){
                location.reload()
            }
        }
        setInterval(tick,1000)
        function tick(){
            let b = value.seconds - 1
            value.seconds = b;
            if (b>=0){
                print(b)
            }
            
        }
        function print(b){
            if(b<10){
                b="0"+b
            }
            stopwatch.innerText = b
        }
        setTimeout(score,30100)
        function score(){
            console.log(actualScore())
        }
        
    })

}
