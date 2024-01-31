window.onload = () =>{
    main();
   
};

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const ChangeBtn = document.getElementById('change-btn');
    const CopyBtn = document.getElementById('copy-btn');
    
    ChangeBtn.addEventListener('click', function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    CopyBtn.addEventListener('click' , function(){
        navigator.clipboard.writeText(output.value)

    } );


}

function generateHexColor() {
    // #000000 #fffffff
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    


}
