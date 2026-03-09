/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.masterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].badges)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].badges,
            charadex.page.masterlist.relatedData['badges']
          );
        }
		
		// Import story mode data
        if (charadex.tools.checkArray(listData.profileArray[0].stats)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].stats,
            charadex.page.masterlist.relatedData['stats']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
