import { IParsedCurrency } from "../types/ICurrency";

export function calculateSumBriefcase(dataLocal:IProduct[],actual:IParsedCurrency[]){
    let oldSum = 0;
    const newSum = dataLocal.reduce((sum,local)=>{
        oldSum += local.priceUsd!*local.count;
        return sum+= actual.find(item=>item.id===local.name)?.priceUsd! * local.count;
    },0)
    return {
        newSum,
        difrience:(newSum-oldSum).toFixed(2),
        percentage:((newSum-oldSum)/oldSum*100)
    };
}