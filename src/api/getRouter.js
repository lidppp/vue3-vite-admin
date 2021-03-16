import http from '@/utils/request'
import {syncRouterList} from "../router/router";

export function getRouterList (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(syncRouterList)
        },1000)
    })
}
