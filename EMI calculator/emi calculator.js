
// Personal Loan EMI Calculator Functionality
function PersonalLoanAmountChanged(){
    document.getElementById("Personal_Loan_Amount_Range").value=document.getElementById("Personal_Loan_Amount").value
}
function PersonalLoanAmountRangeChanged(){
    document.getElementById("Personal_Loan_Amount").value=document.getElementById("Personal_Loan_Amount_Range").value
}
function PersonalLoanIRChanged(){
    document.getElementById("Personal_Loan_IR_Range").value=document.getElementById("Personal_Loan_IR").value
}
function PersonalLoanIRRangeChanged(){
    document.getElementById("Personal_Loan_IR").value=document.getElementById("Personal_Loan_IR_Range").value
}
function PersonalLoanTenureChanged(){
    document.getElementById("Personal_Loan_Tenure_Range").value=document.getElementById("Personal_Loan_Tenure").value
}
function PersonalLoanTenureRangeChanged(){
    document.getElementById("Personal_Loan_Tenure").value=document.getElementById("Personal_Loan_Tenure_Range").value
}
function PersonalLoanEMICalculatorResult(){
    let P=document.getElementById("Personal_Loan_Amount").value;
    let R=document.getElementById("Personal_Loan_IR").value/12/100;
    let N=document.getElementById("Personal_Loan_Tenure").value*12;
    let result=Math.round([P*R*Math.pow(1+R,N)]/[Math.pow(1+R,N)-1]);
    document.getElementById("plmi").innerText=result;
}

//Home Loan EMI Calculator Functionality
function HomeLoanAmountChanged(){
    document.getElementById("Home_Loan_Amount_Range").value=document.getElementById("Home_Loan_Amount").value
}
function HomeLoanAmountRangeChanged(){
    document.getElementById("Home_Loan_Amount").value=document.getElementById("Home_Loan_Amount_Range").value
}
function HomeLoanIRChanged(){
    document.getElementById("Home_Loan_IR_Range").value=document.getElementById("Home_Loan_IR").value
}
function HomeLoanIRRangeChanged(){
    document.getElementById("Home_Loan_IR").value=document.getElementById("Home_Loan_IR_Range").value
}
function HomeLoanTenureChanged(){
    document.getElementById("Home_Loan_Tenure_Range").value=document.getElementById("Home_Loan_Tenure").value
}
function HomeLoanTenureRangeChanged(){
    document.getElementById("Home_Loan_Tenure").value=document.getElementById("Home_Loan_Tenure_Range").value
}
function HomeLoanEMICalculatorResult(){
    let P=document.getElementById("Home_Loan_Amount").value;
    let R=document.getElementById("Home_Loan_IR").value/12/100;
    let N=document.getElementById("Home_Loan_Tenure").value*12;
    let result=Math.round([P*R*Math.pow(1+R,N)]/[Math.pow(1+R,N)-1]);
    document.getElementById("hlmi").innerText=result;
}

//Car Loan EMI Calculator functionality
function CarLoanAmountChanged(){
    document.getElementById("Car_Loan_Amount_Range").value=document.getElementById("Car_Loan_Amount").value
}
function CarLoanAmountRangeChanged(){
    document.getElementById("Car_Loan_Amount").value=document.getElementById("Car_Loan_Amount_Range").value
}
function CarLoanIRChanged(){
    document.getElementById("Car_Loan_IR_Range").value=document.getElementById("Car_Loan_IR").value
}
function CarLoanIRRangeChanged(){
    document.getElementById("Car_Loan_IR").value=document.getElementById("Car_Loan_IR_Range").value
}
function CarLoanTenureChanged(){
    document.getElementById("Car_Loan_Tenure_Range").value=document.getElementById("Car_Loan_Tenure").value
}
function CarLoanTenureRangeChanged(){
    document.getElementById("Car_Loan_Tenure").value=document.getElementById("Car_Loan_Tenure_Range").value
}
function CarLoanEMICalculatorResult(){
    let P=document.getElementById("Car_Loan_Amount").value;
    let R=document.getElementById("Car_Loan_IR").value/12/100;
    let N=document.getElementById("Car_Loan_Tenure").value*12;
    let result=Math.round([P*R*Math.pow(1+R,N)]/[Math.pow(1+R,N)-1]);
    document.getElementById("clmi").innerText=result;
}
