
function increase()
{     
   let no = document.querySelector("#first").value;
    no++; 
       localStorage.setItem("count",JSON.stringify(no));     
       display();

     let yes = localStorage.getItem ("limit");
    if( yes == no)
    {
        navigator.vibrate([1000 , 500 , 1000, 500,1000]);
    }


}

display();

function display()
{
       let dis = JSON.parse(localStorage.getItem("count"));
       document.querySelector("#first").value = dis;
}


function limit()
{
      let newHtml = document.querySelector("#pop-up");
                newHtml.innerHTML = `
                <div id="ytr">
                        <div>
                                <input type="number" id="second">
                        </div>

                        <div>
                                <button  onclick=" count();     gayab();" class="sav"> Save  </button>
                        </div>
                </div>
                `
}

function gayab()
{
      let   mtr = document.querySelector("#ytr");
            mtr.innerHTML="";
}

function count()
{
    let xyz = document.querySelector("#second").value;
     localStorage.setItem("limit",xyz);
}

function rety()
{
     localStorage.clear();
     display();
}
