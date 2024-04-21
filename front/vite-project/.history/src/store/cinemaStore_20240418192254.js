import { defineStore } from "pinia";
const useCinemaStore = defineStore("cinema",{

    state:()=>{
        cinemaList:[]
    },
    actions:{
        async getCinemaList(){
            var res = await axios()
            this.cinemaList=res.data.data
        }
    },
    getters:{
        test(){
            return "1111"
        }
    }
})
export default useCinemaStore