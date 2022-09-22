import { ref,onMounted,reactive  } from 'vue'
import payslipsData from '../data/payslips.json'

const payslipsJs = () => {

  const active = ref(true)
  const sortedbyASC = ref(true)
  const salaryEvolution = ref([])
  const showPopup = ref(false)
  let payslipsJson = payslipsData;
        const SalaryPopup =(value)=>{
          salaryEvolution.value=value;
          console.log("dssd",salaryEvolution.value);
          showPopup.value = !showPopup.value
        }
  let payslips = ref([])

      
    const FilterData = (curn) => {
      active.value = curn;
      payslips.value = [];
  payslipsJson.forEach(element => {
  if(element.payslipEntries[0].currency == curn) {
        payslips.value.push(element)
      } ;
      });
    }
    const sortList = ( sortBy)=> {
      console.log("ddqqq",sortedbyASC.value);
        if (sortedbyASC.value) {
         let a = payslips.value.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
          console.log(a);
          sortedbyASC.value = false;
        } else {
          payslips.value.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
          sortedbyASC.value = true;
        }
        console.log("eee");
      }
  const salaryEvolutionValue = () =>{
  let netSalary =  salaryEvolution.value.filter(function(elem){
      if(elem.key == "NET PAY") return elem;
       });
  let grossSalary =  salaryEvolution.value.filter(function(elem){
      if(elem.key == "GROSS") return elem;
       });
  
       return netSalary[0].amount.toFixed(2) + grossSalary[0].amount.toFixed(2);
  
  }


  const GrossSalary = (data) => {

    let salary = data.filter(function(elem){
      if(elem.key == "GROSS") return elem;
       });
       return salary[0].amount.toFixed(2) +'  ' + salary[0].currency;
      }
  
      const NetSalary = (data) => {
    let salary = data.filter(function(elem){
      if(elem.key == "NET PAY") return elem;
       });
       return salary[0].amount.toFixed(2) +'  ' + salary[0].currency;
      }

  return {payslips,active,sortedbyASC,salaryEvolution,showPopup,salaryEvolutionValue,sortList,FilterData,SalaryPopup,GrossSalary,NetSalary}
}

export default payslipsJs