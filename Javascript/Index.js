let Count;
let Total=0;

let Increment=(Val)=>
{
    Count=Val+1;
    for(let I=1 ; I<=4 ; I++)
    {
        if(I==Count)
        {
            document.getElementsByClassName(`No-${I}`)[0].style.backgroundColor='black';
        }
        else
        {
            document.getElementsByClassName(`No-${I}`)[0].style.backgroundColor='transparent';
        }

    }
    

    document.getElementsByClassName(`Step-${Val}`)[0].style.display='none';

    document.getElementsByClassName(`Step-${Count}`)[0].style.display='flex';

    if(Count==4)
    {
        LastStep();
    }
}
let Random=(Val)=>
{
    for(let I=1 ; I<=4 ; I++)
    {
        if(I==Val)
        {
            document.getElementsByClassName(`Step-${I}`)[0].style.display='flex';
            document.getElementsByClassName(`No-${I}`)[0].style.backgroundColor='black';
        }
        else
        {
            document.getElementsByClassName(`Step-${I}`)[0].style.display='none';
            document.getElementsByClassName(`No-${I}`)[0].style.backgroundColor='transparent';
        }

    }
    if(Val==4)
    {
        LastStep();
    }
}
let ArcadeSelect="";

let Arcade=(Class)=>
{
    ArcadeSelect=`Arcade-${Class}`;


    for(let I=1 ; I<=3 ; I++)
    {
        if(I==Class)
        {
            document.getElementsByClassName(`${ArcadeSelect}`)[0].style.backgroundColor='#e74c3c';
        }
        else
        {
            document.getElementsByClassName(`Arcade-${I}`)[0].style.backgroundColor='#c2fff7cc';
        }
    }
}

let Plan=[];

let PlanSelect=(Val,Class)=>
{
    if(document.querySelector(`.${Class} input`).checked)
    {
        Plan.push(Class);
        Plan=[...new Set(Plan)]
    }
    if (!document.querySelector(`.${Class} input`).checked)
    {
        let Ind=Plan.indexOf(`${Class}`)
        Plan.splice(Ind,1)
    }
}

let LastStep=()=>
{
    Total=0;
    if(ArcadeSelect)
    {
        let Name=document.querySelector(`.${ArcadeSelect} .Proxy h5`).innerHTML;
        let Price=document.querySelector(`.${ArcadeSelect} .Proxy p`).innerHTML;
        const HTMLData=
        `
        <p>${Name}</p>
        <p>${Price}</p>
        `
        let Match=Price.match(/(\d+)/)
        Total+=+Match[0]
        document.querySelector(`.Mode`).innerHTML=HTMLData;
    }

    document.querySelector(`.Services`).innerHTML=""

    for (let I=0 ; I<Plan.length ; I++)
    {
        let Name=document.querySelector(`.${Plan[I]} div .P1`).innerHTML;
        let Price=document.querySelector(`.${Plan[I]} + .P2`).innerHTML;
        let Match=Price.match(/(\d+)/)
        Total+=+Match[0]
        const HTMLData=
        `<div class="Service">
            <p>${Name}</p>
            <p>${Price}</p>
        </div>`
        document.querySelector(`.Services`).insertAdjacentHTML("afterbegin",HTMLData);
    }
    document.querySelector(`.Total`).innerHTML="";
    const HTMLData=
    `
        <p>Total</p>
        <p>$${Total}/mo</p>
    `
    document.querySelector(`.Total`).insertAdjacentHTML("afterbegin",HTMLData);
}