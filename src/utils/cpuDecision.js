export function cpuDecision() {
  let decision = Math.random()
  console.log(decision);
  if (decision<0.5) {
    return console.log(false)
  } else {
    return console.log(true)
  }
  
}