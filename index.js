let budget=0, totalExpenses=0, balance=0;
let expTitle=[];
let expAmount=[];


if(expTitle.length==0){
    document.getElementById("table").style.visibility="hidden"
}

function budgetManupulation(){
    budget=document.getElementById("budget-data").value;
    document.getElementById("budget").innerText=budget; 
    balance = budget-totalExpenses;
    document.getElementById("balance").innerText=balance;
    if(balance<0){
        document.getElementById("bal-icon").style.color="#cc0000";
    }
    else{
        document.getElementById("bal-icon").style.color="#1f7a1f"
    }
    if(budget<0){
        document.getElementById("bud-icon").style.color="#cc0000";
    }
    else{
        document.getElementById("bud-icon").style.color="#1f7a1f";
    }
    document.getElementById("budget-data").value=""
}

function sum(ar){
    let total=0;
    for(i=0;i<ar.length;i++){
        total+=Number(ar[i]);
    }
    return total;
}


function expManupulation(){
    expTitleData=document.getElementById("expTitleData").value;
    expAmountData=document.getElementById("expAmountData").value;
    expTitle.push(expTitleData);
    expAmount.push(expAmountData);
    totalExpenses = sum(expAmount);
    balance=budget-totalExpenses;
    document.getElementById("balance").innerText=balance;
    document.getElementById("expense").innerText=totalExpenses;
    if(balance<0){
        document.getElementById("bal-icon").style.color="#cc0000";
    }
    if(totalExpenses>0){
        document.getElementById("exp-icon").style.color="#cc0000";
    }
    document.getElementById("expTitleData").value="";
    document.getElementById("expAmountData").value="";
    document.getElementById("table").style.visibility="visible"
    appendChildlist(expTitleData, expAmountData);
}



// appending table of expense title and expense value

function appendChildlist(expTitleData, expAmountData){
    let tableRow=document.createElement("tr");
    let tableHeading=document.createElement("th");
    let headingText=document.createTextNode(expTitle.length);
    tableHeading.appendChild(headingText);
    let tableExpTitle=document.createElement("td");
    let tableDataExpTitle=document.createTextNode(expTitleData);
    tableExpTitle.appendChild(tableDataExpTitle);
    let tableExpAmt=document.createElement("td");
    let tableDataExpAmt=document.createTextNode(expAmountData);
    tableExpAmt.appendChild(tableDataExpAmt);
    tableRow.appendChild(tableHeading);
    tableRow.appendChild(tableExpTitle);
    tableRow.appendChild(tableExpAmt);
    let bdy=document.getElementById("table-body");
    bdy.appendChild(tableRow);
}
