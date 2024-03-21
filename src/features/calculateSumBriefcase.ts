import { IParsedCurrency } from "../types/ICurrency";

export function calculateSumBriefcase(dataLocal:IProduct[],actual:IParsedCurrency[]){
    let oldSum = 0;
    const newSum = dataLocal.reduce((sum,local)=>{
        oldSum += local.priceUsd!*local.count;
        return sum+= actual.find(item=>item.id===local.name)?.priceUsd! * local.count;
    },0)
    let percentage = (newSum-oldSum)/oldSum*100;
    let difrience = newSum-oldSum<0?(newSum-oldSum).toFixed(2):"+"+(newSum-oldSum).toFixed(2);
    return {
        newSum:newSum.toFixed(2),
        difrience,
        percentage:percentage?percentage.toFixed(2):percentage
    };
}