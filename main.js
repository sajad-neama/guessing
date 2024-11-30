// ____________________________________ Part of functions ______________________________________________________________

// ----------------------------------- Started_function() --------------------------------------------------
    
function Started_function() {
    MyStart.addEventListener("click", (e) => {
        document.querySelector(".worong").textContent ="40"
        _Restart ()

    })
}


// --------------------------------------------------------------------------------------------------------------------
// ------------------ الفكشن التي تعمل على اضافة الصور بمكانات عشوائية وتضهرها --------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

function _Restart (){
    Show_All_Items() 

    MyName.textContent = window.prompt("Inter your name" ); 
    cont = 0 
    clearTimeout(TimeDown)
    MyStart.textContent = "Rest";
    Random_Selection()
}



// --------------------------------------------------------------------------------------------------------------------
// ------------------ الفكشن التي تعمل على اضافة الصور بمكانات عشوائية وتضهرها --------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------


function Random_Selection() {
    let myarrey = []
    MyIcon.forEach((e)=>{ 
        e.style.transform ='rotatey(0deg)';
        myarrey.push(e.className)
    })
    for (let i = 0 ; i < 40  ;++i){
        document.querySelectorAll(".fa-question")[i].style.transform ='rotatey(180deg)';
        randomChoose = myarrey[Math.floor(Math.random() * myarrey.length)];
        myarrey.splice(myarrey.indexOf(randomChoose),1);
        MyIcon[i].className = randomChoose ;

    }
    Waiting_before_hiding()
}
// --------------------------------------------------------------------------------------------------------------------
// ------------------- الفكشن التي تحسب وقت وتخفي العناصر عن اللاعب--------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

function Waiting_before_hiding() {
    TimeDown = setTimeout(() => {
        for (let i = 0 ; i < 40  ;++i){
            document.querySelectorAll(".fa-question")[i].style.transform ='rotatey(0deg)';
            MyIcon[i].style.transform ='rotatey(180deg)';
        }
    }, 2200);

    Matching_Subtraction()
}
// -----------------------------------------------------------------------------------------------------------------------------
// نحتبر عند الضغط على مكان عشوائي ومكان اخر هل هم متطابقين وعند كل خطا نقوم بنقاص المحاولات 
// --------------------------------------------------------------------------------------------------------------------
function Matching_Subtraction() {
    let myArry= [];
    console.log(myArry)
    console.log(myArry.length)   
    MyQuestionIcon.forEach(e => {

        e.addEventListener ("click", (ele)=>{
            Hide_All_Images()
            let first = e.parentElement.firstElementChild;
            let last = e ;


            Images_Match(first , last ,myArry )

        })

        
    });

}
// -----------------------------------------------------------------------------------------------------------------------------
// التاكد من تطابق الصور
// --------------------------------------------------------------------------------------------------------------------
function Images_Match (first , last  , myArry){

    if (myArry.length % 2 == 0 ){
        myArry.push(first.className);
        console.log (myArry)
        first.style.transform= "rotatey(0deg)";
        last.style.transform = 'rotatey(180deg)';
    }else{
        
    if (first.className === myArry[(myArry.length)-1] && myArry.length % 2 == 1 ){
        cont++ 
        Hide_All_Images()
        first.style.transform= "rotatey(0deg)";
        last.style.transform = 'rotatey(180deg)';
        console.log (cont)
        myArry.push(first.className);
        console.log("help")
        console.log(myArry)

        }
    if (first.className !== myArry[(myArry.length)-1] && myArry.length % 2 == 1){
        // تقليل الفرص
        +(document.querySelector(".worong").textContent)--;
        Hide_All_Images()
        first.style.transform= "rotatey(0deg)";
        last.style.transform = 'rotatey(180deg)';
        setTimeout(() => {
            MyIcon.forEach(element => {
                if (element.className === myArry[(myArry.length) - 1]) {
                    element.parentElement.lastElementChild.style.transform = "rotatey(0deg)" ;
                }
            });
            first.style.transform= "rotatey(180deg)";
            last.style.transform = 'rotatey(0deg)';
            myArry.splice(myArry[(myArry.length)-1], 1)
            console.log(myArry)
            console.log("im cut ")
        }, 300);
    }
    }
};

// -----------------------------------------------------------------------------------------------------------------------------
// اخفاء جميع العناصر عند الفوز او الخسار وظهور رسالة للاعب  
// --------------------------------------------------------------------------------------------------------------------
function Hide_All_Images() {
    if (cont == 40){

        MyBox.forEach(element => {
            element.style.display = 'none';
        });

        document.querySelector(".win-massag").style.display = 'block';
        let myPicter = document.querySelector ('.picter')


        myPicter.style.cssText =`
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 448px;
        // height: 275px;
        ` 
        
    }
    if (+(document.querySelector(".worong").textContent) === 0){
        MyBox.forEach(element => {
            element.style.display = 'none';
        });

        document.querySelector(".loss-massag").style.display = 'block';
        let myPicter = document.querySelector ('.picter')
        
        myPicter.style.cssText =`
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 448px;
        // height: 275px;
        
        ` 
    }
}
// -----------------------------------------------------------------------------------------------------------------------------
// اضهار جميع العناصر عند اعادة اللعب   
// --------------------------------------------------------------------------------------------------------------------
function Show_All_Items() {
    let myPicter = document.querySelector (".picter");
    myPicter.style.cssText =`
    width: 448px;
    display: flex;
    height: 275px;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    ` 
    
    document.querySelectorAll (".picter div").forEach(element => {
            if (element.className == "win-massag" || element.className ==  "loss-massag"){
                element.style.display = 'none';
            }else{
                element.style.display = 'block';
            }

            
        });

}
//_______________________________________ Part of general variables_______________________________________________________
let cont = 0;
let MyStart = document.querySelector(".start");
let MyName = document.querySelector(".name");
let MyIcon = document.querySelectorAll(" i:not(.fa-question)");
let MyQuestionIcon = document.querySelectorAll(".fa-question");
let TimeDown = 0;
let MyBox = document.querySelectorAll(".box");
// let myArry= [];


//________________________________________ Part of building__________________________________________


Started_function()











