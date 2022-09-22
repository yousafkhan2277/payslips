<template>

    <Popup v-if="showPopup" @click="SalaryPopup">
    <h1>Gross/Net Salary Evolution</h1>
     <hr>
     Gross/Net Salary Evolution = {{salaryEvolutionValue()}}

    </Popup>
	<main id="Home-page">
		<h1>My Payslips</h1>
   

<div class="bg-white set-border" >
<div class="bg-dark set-border">
<div class="set-header">
<span   class="tab" :class="{ active: active==='EUR' }"   @click="FilterData('EUR')">EUR(12)</span>
<span class="tab"  :class="{ active: active==='USD' }" @click="FilterData('USD')">USD(2)</span>
</div>
</div>
    <div class="table-responsive-lg container-fluid bg-white">

      <payslipsTable :payslips="payslips"
      @sortListCall="sortList"
      @SalaryPopup="SalaryPopup"
      />
        </div>
</div>
	</main>
</template>
<script>

import { ref,onMounted,reactive  } from 'vue'
import Popup from '../../components/Popup.vue'
import payslipsData from '../../data/payslips.json'
import payslipsTable from './payslipsTable.vue'
import payslipsJs from '../../composables/payslipsJs.js'

export default {
components:{Popup,payslipsTable},

    setup() {
const { payslips,active,sortedbyASC,salaryEvolution,salaryEvolutionValue,sortList,FilterData,showPopup,SalaryPopup } = payslipsJs()

 onMounted(() => {
  FilterData('EUR')
    })

return {payslips,active,sortedbyASC,salaryEvolution,salaryEvolutionValue,sortList,FilterData,showPopup,SalaryPopup}

    },
}
</script>







<style scoped>
.set-border{
      border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}
.set-header{
  color: white;
    display: flex;
    justify-content: flex-start;
}
.active{
    background-color: coral;
}
.tab{
  text-align: center;
    vertical-align: middle;
    line-height: 53px;
    margin-left: 20px;
    width: 70px;
    margin-right: 40px;
}
</style>