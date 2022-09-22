<template>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Month</th>
      <th scope="col">Payslips</th>
      <th scope="col">Gross salary</th>
      <th scope="col">Net salary</th>
      <th scope="col"  data-toggle="tooltip" data-placement="bottom" title="View Salary evolution"  @click="sortListCall('payrollDate')" ><font-awesome-icon icon="fa-solid fa-arrows-up-down" /></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for = "(pay, index) in payslips" :key="pay.id">
      <th scope="row" @click="SalaryPopup(pay.payslipEntries)" >{{index}}</th>
      <td>{{pay.payrollDate}}</td>
      <td class="text-danger" >
        <a :href="'/payslipsFiles/' + pay.fileAttachment.accessToken + '.pdf' ">{{ pay.fileAttachment.accessToken }}.pdf</a>
      </td>
      <td>{{GrossSalary(pay.payslipEntries)}}</td>
      <td>{{NetSalary(pay.payslipEntries)}}</td>

    </tr>
  </tbody>
</table>
</template>
<script>
import { defineComponent,ref } from "vue";
import payslipsJs from '../../composables/payslipsJs.js'



export default defineComponent({
  props: ['payslips'],  
  setup(props,{emit}) {
     const { GrossSalary, NetSalary} = payslipsJs()

      const sortListCall = (value)=> {
       emit("sortListCall",value);
         }

       const SalaryPopup = (value)=> {
       emit("SalaryPopup",value);
    }
   return {GrossSalary,NetSalary,sortListCall,SalaryPopup} 

  }
}
)
</script>