export default function createsDownloadList(list){

    const listsUrl = [];
    const listOfRendr = [];
    for (let i = 0; i < list.length; i += 1) {
       for (let j = 0; j < list[i].images.length; j += 1) {
          if(String(list[i].images[j].url).includes('RETINA_PORTRAIT_3_2')){
             listsUrl.push(list[i].images[j]);
 
             const newRenderEventList ={
                imag: listsUrl[i],
                event: list[i],
             }
             listOfRendr.push(newRenderEventList);
          }
 
 
       }
 
     }
    return listOfRendr;
 }