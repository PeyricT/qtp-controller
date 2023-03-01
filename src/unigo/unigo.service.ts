import { Injectable, HttpService } from '@nestjs/common';
import { resolve } from 'path';
import { UNIGO_ENDPOINT as unigoRes } from '../constant';
import { InputTrimmedVectorDto } from './dto/unigo.dto';
import * as t from './unigo.types'

@Injectable()
export class UnigoService {
    constructor(private httpService: HttpService) {
    }
    
    getHello(): string {
        return 'Unigo Serving!';
    }

    getRawVector(taxid: number) {
        return this.httpService.get(`${unigoRes}/vectors/${taxid}`).toPromise(); 
    }

    getTrimmedVectorByProt(inputTrimmedVector : InputTrimmedVectorDto): Promise<{[prot:string] : t.GOTermInterface[]}>{
        return new Promise((resolve,reject) => {
            const protData : {[prot:string] : t.GOTermInterface[]} = {}
            inputTrimmedVector.uniprotIds.forEach(uId => protData[uId] = [])
            const promise = this.httpService.get(`${unigoRes}/vectors/${inputTrimmedVector.taxid}`).toPromise()
            promise.then(resp => {
                const data: {[key in t.NsType]: t.VectorInterface} = resp.data
                Object.entries(data).forEach(([ns,vector])=>{
                    inputTrimmedVector.uniprotIds.forEach(uId => {
                        const protIdx = vector.registry.indexOf(uId)
                        Object.entries(vector.terms).forEach(([go, term]) => {
                            if(term.elements.includes(protIdx) && go !== "0000") protData[uId].push({go:go, ns:ns, name:term.name})
                        })
                    })

                                        
                })     
                resolve(protData);            
            })
            .catch(err => reject(err)); 
        })
        
    }

    getTrimmedVector(inputTrimmedVector: InputTrimmedVectorDto): Promise<t.TrimmedVectorResult[]>{
        return new Promise((resolve, reject) => {
            const completeVectorPromise = this.httpService.get(`${unigoRes}/vectors/${inputTrimmedVector.taxid}`).toPromise()
            completeVectorPromise.then(resp => {
                const results: t.TrimmedVectorResult[] = []
                const completeVector : {[key in t.NsType]: t.VectorInterface} = resp.data; 
                Object.entries(completeVector).forEach(([ns, nsVector]) => {
                    const protIdx = inputTrimmedVector.uniprotIds.map(id => nsVector.registry.indexOf(id)); 
                    Object.entries(nsVector.terms).forEach(([go, terms])=> {
                        console.log("OOO", go, terms); 
                        const intersection = protIdx.filter(idx => terms.elements.includes(idx));
                        console.log(intersection); 
                        if(intersection.length > 0) results.push(
                            {go:go, 
                            prots:intersection.map(idx => nsVector.registry[idx]),
                            name: terms.name, 
                            ns: ns as t.NsType,
                            freq: terms.freq})
                    })
                }) 
                resolve(results); 
            }).catch(err => reject(err))
            
        })
    }
}
