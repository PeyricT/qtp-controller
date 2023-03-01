/*
    Would like to get model from python provider ....

"P02924":
{
    "GO":[{"evidence":"ECO:0000314","id":"GO:0030288","term":"C:outer membrane-bounded periplasmic space"},{"evidence":"ECO:0000315","id":"GO:0015407","term":"F:ATPase-coupled monosaccharide transmembrane transporter activity"},{"evidence":"ECO:0000318","id":"GO:0030246","term":"F:carbohydrate binding"},{"evidence":"ECO:0000314","id":"GO:0048029","term":"F:monosaccharide binding"},{"evidence":"ECO:0000501","id":"GO:0042882","term":"P:L-arabinose transmembrane transport"}],
    "fullName":"L-arabinose-binding periplasmic protein",
    "geneName":"araF",
    "id":"P02924",
    "name":"ARAF_ECOLI"}
*/
import { IsDefined,  IsArray } from 'class-validator';

export class UniprotBatchRequest {
    @IsArray()
    uniprotIDs: string[]
}

export class UniprotDatum {
  @IsDefined()
  id: string;
/*
  @ArrayNotE()
  proteinsExp: string[];
  
  @IsString()
  fullName: string;
*/
}
