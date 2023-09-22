console.log("test")
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    
let title_arr = ["g l a d i _ x y z", "g l a d i _ x y", "g l a d i _ x", "g l a d i _", "g l a d i",  "g l a d", "g l a", "g l", "g", "g l", "g l a", "g l a d", "g l a d i", "g l a d i _", "g l a d i _ x", "g l a d i _ x y", "g l a d i _ x y z",]


function resolveAfter1Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  }
  
  async function asyncCall() {
    const result = await resolveAfter1Seconds();
    for(let i = 0; i < title_arr.length; i++) {
        document.getElementById("title").innerHTML = title_arr[i];
        await sleep(500);
        if (i == title_arr.length-1) {
            i = 0; 
    }
    // Expected output: "resolved"
  }
}
  asyncCall();