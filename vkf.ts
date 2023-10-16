import xml2js from 'xml2js';
import { readFileSync } from './util/readFileSync';
import { writeFileSync } from './util/writeFileSync';

const parser = new xml2js.Parser()
const builder = new xml2js.Builder();


// function filterExists(dataRows: any[]): any[] {
//   return dataRows.filter((dr:any) => {

//     let exists = false;

//     dr["pnp:DataValue"].forEach((dv:any) => {
//       const key = dv["$"]["FieldName"];
//       if(key === "ItemID" && ids.includes(dv["_"])) {
//         exists = true
//       }
//     })

//     return exists
    
//   })
// }

// function filterEmptyRequiredData(dataRows: any[]): any[] {
//   return dataRows.filter((dr:any) => {

//     let required = false;

//     dr["pnp:DataValue"].forEach((dv:any) => {
//       const key = dv["$"]["FieldName"];
//       if((key === "OtherAreaOfExpertise" || key === "OtherCustomerName") && dv["_"] ) {
//         required = true
//       }

//       if(key === "Sector" && dv["_"] === "4") {
//         required = true
//       }
//     })

//     return required
    
//   })
// }

function analyzeData(result: any) {
  const filtered = result['feed']['entry']
    .map((entry:any) => entry['content'][0]['m:properties'][0]['d:Ebene4'])
    // .filter((x:any) => x instanceof String)
    .flat()


  console.log(filtered)

  // writeFileSync('vkf_ebene3.txt', filtered)
}


function main() {


  const pathOfImportFile = "./vkf_ebene4.xml";
    
  const data = readFileSync(pathOfImportFile)

  if(data) {
    parser.parseString(data, (err, result) => {
      analyzeData(result)
    })
  }
  
}

main()

