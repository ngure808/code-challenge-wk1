
function taxation(basicSalary, benefits){
    let nssf = 0;
    let nhif = 0;

    // this function takes in basicsalary and benefits as parameters
    function benefitsfunction(basicSalary, benefits = 0){
        let  nhifDeduction = 0
        

        // nhif ranges with regards to ones basicsalary
         if (basicSalary > 0  && basicSalary <= 5999){
           nhifDeduction  = 150
          
         }else if (basicSalary >= 6000 && basicSalary <= 7999){
           nhifDeduction =300
    
         }else if(basicSalary >= 8000 && basicSalary <= 11999){
           nhifDeduction =400
    
         }else if(basicSalary >= 12000 && basicSalary <= 14999){
           nhifDeduction =500
         }
         else if(basicSalary >= 15000 && basicSalary <= 19999){
           nhifDeduction =600
    
         }
         else if(basicSalary >= 20000 && basicSalary <= 24999){
           nhifDeduction =750
    
         }
         else if(basicSalary >= 25000 && basicSalary <= 29999){
           nhifDeduction =850
    
         }
         else if(basicSalary >= 30000 && basicSalary <= 34999){
           nhifDeduction =900
    
         }
         else if(basicSalary >= 35000 && basicSalary <= 39999){
           nhifDeduction =950
    
         }else if(basicSalary >= 40000 && basicSalary <= 44999){
           nhifDeduction =1000
    
         }
         else if(basicSalary >= 50000 && basicSalary <= 59999){
           nhifDeduction =1200
    
         }
         else if(basicSalary >= 60000 && basicSalary <= 69999){
           nhifDeduction =1300
    
         }
         else if(basicSalary >= 70000 && basicSalary <= 79999){
           nhifDeduction =1400
    
         }
         else if(basicSalary >= 80000 && basicSalary <= 89999){
           nhifDeduction =1500
    
         }
         else if(basicSalary >= 90000 && basicSalary <= 99999){
           nhifDeduction =1600
    
         }
         else if (basicSalary >= 100000){
           nhifDeduction =1700
         }
    
        
        // this is only calculated if there are benefits included
         if(benefits > 0){
             nssf = benefits;
         }else{
             nssf = basicSalary * 0.06;
         }
    
        
         nhif = nhifDeduction;

        //  calculates the taxable income that will be used im the following function for tax
         taxableIncome = basicSalary - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 taxableIncome,
             }
    }   

    /*this function takes on taxable income as the argument
    passed through the function
    returns the paye tax and net salary
    */
    function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let taxRate = 0;
    let relief= 2400;

    // calculates persons tax depending on their monthly pay
    if(taxableIncome > 0 && taxableIncome <= 24000){
        grossTax = (taxableIncome*0.10);
    }

    else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        taxRate = (taxableIncome - 24000) * 0.25;
        grossTax = 2400 + taxRate
    }

    else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        taxRate = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + taxRate
    }

    else if (taxableIncome >= 500001 && taxableIncome <= 800000){
        taxRate = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + taxRate
    }

    else if(taxableIncome > 800000){
        taxRate = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + taxRate
    }

    paye =  ~~(grossTax - relief);
    netsalary = (taxableIncome - paye);
    return { paye, netsalary }
    }
   
    let personsTaxableIncome  = benefitsfunction(basicSalary,benefits);
    let taxed = tax(personsTaxableIncome.taxableIncome);

    // returns individual values of the nssf, nhif, payee, basicsalary and netsalary
    return {
        NSSFDeductions:  personsTaxableIncome.nssf,
        NHIFDeductions:  personsTaxableIncome.nhif,
        payee:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalary
    }
}
console.log(taxation)